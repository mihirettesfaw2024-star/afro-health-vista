import * as React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-blue-900 text-white hover:bg-blue-800 shadow-sm',
      outline: 'border border-blue-900 text-blue-900 hover:bg-blue-50',
      ghost: 'hover:bg-blue-50 text-blue-900',
      secondary: 'bg-emerald-600 text-white hover:bg-emerald-700',
      link: 'text-blue-900 underline-offset-4 hover:underline',
    };
    const sizes = {
      default: 'h-11 px-6 py-2',
      sm: 'h-9 px-4',
      lg: 'h-14 px-10 text-lg',
      icon: 'h-10 w-10',
    };

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };