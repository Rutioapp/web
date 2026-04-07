import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, helperText, error, id, ...props },
  ref
) {
  const inputId = id ?? props.name;

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={cn(
          "h-12 w-full rounded-2xl border border-line/80 bg-white/80 px-4 text-sm text-foreground placeholder:text-muted-foreground/75 focus:border-brand/60 focus:bg-white",
          error && "border-red-300 focus:border-red-400",
          className
        )}
        {...props}
      />
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {!error && helperText ? <p className="text-sm text-muted-foreground">{helperText}</p> : null}
    </div>
  );
});
