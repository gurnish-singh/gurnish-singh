// components/ui/badge.tsx
import { cn } from '@/lib/utils';

export default function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100',
        className
      )}
      {...props}
    />
  );
}
