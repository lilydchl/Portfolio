import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

const fieldBase =
  'w-full rounded-lg border border-black/10 bg-[color:var(--input-background)] px-4 py-2.5 ' +
  'text-sm text-brand-ink placeholder:text-brand-mute/80 ' +
  'focus:border-brand-pink focus:outline-none focus:ring-2 focus:ring-brand-pink/30 ' +
  'disabled:cursor-not-allowed disabled:opacity-60 transition-colors';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = 'text', ...rest }, ref) => (
    <input ref={ref} type={type} className={cn(fieldBase, className)} {...rest} />
  ),
);
Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, rows = 5, ...rest }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(fieldBase, 'resize-y min-h-[120px]', className)}
      {...rest}
    />
  ),
);
Textarea.displayName = 'Textarea';
