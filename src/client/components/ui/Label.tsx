import { forwardRef, type LabelHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...rest }, ref) => (
    <label
      ref={ref}
      className={cn('block text-sm font-medium text-brand-ink mb-1.5', className)}
      {...rest}
    />
  ),
);
Label.displayName = 'Label';
