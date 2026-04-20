import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input, Textarea } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export function App() {
  return (
    <main className="min-h-screen bg-brand-cream px-8 py-16 text-brand-ink">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-2">
          <p className="font-script text-5xl text-brand-pink">Lily de Chalonge</p>
          <h1 className="text-4xl">Portfolio — design system preview</h1>
          <p className="text-brand-soft-ink">
            Smoke-test pour les tokens, fonts et primitives UI avant de construire le layout.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl">Typographie</h2>
          <p className="font-serif text-xl">Playfair Display — titres éditoriaux</p>
          <p className="font-sans">Poppins — corps de texte par défaut</p>
          <p className="font-accent">Work Sans — texte secondaire accent</p>
          <p className="font-hand text-lg">Homemade Apple — notes manuscrites</p>
          <p className="font-script text-3xl">Sacramento — décoratif</p>
        </section>

        <section className="flex flex-wrap gap-3">
          <Button>Primaire</Button>
          <Button variant="secondary">Secondaire</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="sm">Petit</Button>
          <Button size="lg">Grand</Button>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input id="name" placeholder="Votre nom" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Votre message" />
              </div>
              <Button type="submit">Envoyer</Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
