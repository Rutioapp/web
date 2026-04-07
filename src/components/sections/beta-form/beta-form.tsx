"use client";

import { useState } from "react";

import { landingContent } from "@/content/landing-content";
import { trackEvent } from "@/lib/analytics";
import { betaFormSchema, type BetaFormValues } from "@/lib/validations/beta-form.schema";
import { Input } from "@/components/ui/input";
import { BetaSuccessState } from "@/components/sections/beta-form/beta-success-state";

const initialValues: BetaFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  challenge: "",
  device: "",
  consent: true
};

type FieldErrors = Partial<Record<keyof BetaFormValues, string>>;

export function BetaForm() {
  const formContent = landingContent.sections.beta.form;
  const [values, setValues] = useState<BetaFormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  function updateField<K extends keyof BetaFormValues>(field: K, value: BetaFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = betaFormSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: FieldErrors = {};

      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof BetaFormValues | undefined;
        if (field && !nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }

      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmittedName(result.data.firstName);
    trackEvent({ name: "beta_waitlist_submitted", payload: { challenge: result.data.challenge, device: result.data.device } });
  }

  if (submittedName) {
    return (
      <BetaSuccessState
        name={submittedName}
        title={formContent.successTitle}
        description={formContent.successDescription}
        actionLabel={formContent.successAction}
        onReset={() => {
          setSubmittedName(null);
          setValues(initialValues);
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[1.8rem] border border-brand/15 bg-white p-6 shadow-soft sm:p-8">
      <h3 className="text-[1.9rem] leading-8 text-foreground">{formContent.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{formContent.subtitle}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Input
          label={formContent.fields.firstName}
          name="firstName"
          value={values.firstName}
          placeholder={formContent.placeholders.firstName}
          onChange={(event) => updateField("firstName", event.target.value)}
          error={errors.firstName}
        />
        <Input
          label={formContent.fields.lastName}
          name="lastName"
          value={values.lastName}
          placeholder={formContent.placeholders.lastName}
          onChange={(event) => updateField("lastName", event.target.value)}
          error={errors.lastName}
        />
      </div>

      <div className="mt-4">
        <Input
          label={formContent.fields.email}
          name="email"
          type="email"
          value={values.email}
          placeholder={formContent.placeholders.email}
          onChange={(event) => updateField("email", event.target.value)}
          error={errors.email}
        />
      </div>

      <div className="mt-4 space-y-2">
        <label htmlFor="challenge" className="block text-sm font-medium text-foreground">
          {formContent.fields.challenge}
        </label>
        <select
          id="challenge"
          name="challenge"
          value={values.challenge}
          onChange={(event) => updateField("challenge", event.target.value)}
          className="h-12 w-full rounded-2xl border border-line/80 bg-background/55 px-4 text-sm text-foreground focus:border-brand/60 focus:bg-white"
          aria-invalid={errors.challenge ? true : undefined}
          aria-describedby={errors.challenge ? "challenge-error" : undefined}
        >
          <option value="">Selecciona una familia...</option>
          {formContent.challengeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.challenge ? <p id="challenge-error" className="text-sm text-red-600">{errors.challenge}</p> : null}
      </div>

      <div className="mt-4 space-y-2">
        <label htmlFor="device" className="block text-sm font-medium text-foreground">
          {formContent.fields.device}
        </label>
        <select
          id="device"
          name="device"
          value={values.device}
          onChange={(event) => updateField("device", event.target.value)}
          className="h-12 w-full rounded-2xl border border-line/80 bg-background/55 px-4 text-sm text-foreground focus:border-brand/60 focus:bg-white"
          aria-invalid={errors.device ? true : undefined}
          aria-describedby={errors.device ? "device-error" : undefined}
        >
          <option value="">¿iPhone o Android?</option>
          {formContent.deviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.device ? <p id="device-error" className="text-sm text-red-600">{errors.device}</p> : null}
      </div>

      <div className="my-5 h-px bg-brand/10" />

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={values.consent}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-line text-brand focus:ring-brand/40"
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <div>
          <label htmlFor="consent" className="text-sm leading-6 text-muted-foreground">
            {formContent.fields.consent}
          </label>
          {errors.consent ? <p id="consent-error" className="mt-1 text-sm text-red-600">{errors.consent}</p> : null}
        </div>
      </div>

      <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-foreground px-5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-[#5c3520]">
        {formContent.submitLabel}
      </button>
      <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">{formContent.note}</p>
    </form>
  );
}

