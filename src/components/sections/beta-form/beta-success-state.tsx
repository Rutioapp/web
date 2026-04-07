interface BetaSuccessStateProps {
  name: string;
  title: string;
  description: string;
  actionLabel: string;
  onReset: () => void;
}

export function BetaSuccessState({ name, title, description, actionLabel, onReset }: BetaSuccessStateProps) {
  return (
    <div className="rounded-[1.75rem] border border-success/20 bg-success/10 p-6 sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-lg text-success">
        ?
      </span>
      <h3 className="mt-4 text-2xl leading-8 text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        {name}, {description}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex h-11 items-center justify-center rounded-full border border-line/80 bg-white/80 px-5 text-sm font-medium text-foreground transition-colors hover:bg-white"
      >
        {actionLabel}
      </button>
    </div>
  );
}
