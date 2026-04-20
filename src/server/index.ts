import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Resend } from 'resend';
import { z } from 'zod';

const PORT = Number(process.env.PORT ?? 3000);
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM ?? 'Portfolio Lily <onboarding@resend.dev>';
const CONTACT_TO = process.env.CONTACT_TO ?? 'lilydechalonge@gmail.com';

if (!RESEND_API_KEY) {
  console.warn('[server] RESEND_API_KEY not set — /api/send will return 503');
}

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(5000),
  website: z.string().optional(),
});

const rateLimit = new Map<string, number>();
const RATE_WINDOW_MS = 30_000;

function checkRate(ip: string): boolean {
  const now = Date.now();
  const last = rateLimit.get(ip) ?? 0;
  if (now - last < RATE_WINDOW_MS) return false;
  rateLimit.set(ip, now);
  if (rateLimit.size > 10_000) {
    for (const [k, ts] of rateLimit) {
      if (now - ts > RATE_WINDOW_MS * 10) rateLimit.delete(k);
    }
  }
  return true;
}

const app = new Hono();

app.post('/api/send', async (c) => {
  const ip =
    c.req.header('x-forwarded-for')?.split(',')[0]?.trim() ??
    c.req.header('x-real-ip') ??
    'unknown';

  if (!checkRate(ip)) {
    return c.json({ error: 'rate_limited' }, 429);
  }

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: 'invalid_json' }, 400);
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'invalid_body', issues: parsed.error.flatten() }, 400);
  }

  if (parsed.data.website && parsed.data.website.length > 0) {
    return c.json({ ok: true });
  }

  if (!resend) {
    return c.json({ error: 'mail_not_configured' }, 503);
  }

  const { name, email, message } = parsed.data;
  const subject = `Nouveau message du portfolio - ${name}`;

  try {
    const result = await resend.emails.send({
      from: RESEND_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Nom:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Message:</strong></p>
<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    });

    if (result.error) {
      console.error('[server] resend error', result.error);
      return c.json({ error: 'mail_send_failed' }, 502);
    }

    return c.json({ ok: true });
  } catch (error) {
    console.error('[server] /api/send crash', error);
    return c.json({ error: 'mail_send_failed' }, 502);
  }
});

app.use('/*', serveStatic({ root: './dist/client' }));
app.use('/*', serveStatic({ path: './dist/client/index.html' }));

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      default:
        return '&#39;';
    }
  });
}

serve({ fetch: app.fetch, port: PORT }, (info) => {
  console.log(`[server] listening on http://localhost:${info.port}`);
});
