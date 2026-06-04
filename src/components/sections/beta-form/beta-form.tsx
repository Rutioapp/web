"use client";

import Link from "next/link";
import { useState } from "react";

import { landingContent } from "@/content/landing-content";
import { trackEvent } from "@/lib/analytics";
import {
  betaFormSchema,
  waitlistHoneypotSchema,
  type BetaFormValues
} from "@/lib/validations/beta-form.schema";
import { submitWaitlistEntry } from "@/lib/waitlist/submit-waitlist-entry";
import { Input } from "@/components/ui/input";
import { BetaSuccessState } from "@/components/sections/beta-form/beta-success-state";
import { WAITLIST_COUNT_UPDATED_EVENT } from "@/lib/counters/hero-smart-counter-service";

const initialValues: BetaFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  challenge: "",
  device: "",
  consent: true
};

type FieldErrors = Partial<Record<keyof BetaFormValues, string>>;
type FormMessageTone = "error" | "info";
const HONEYPOT_FIELD_NAME = "website";
const HONEYPOT_SUCCESS_NAME = "Gracias";

interface FormMessage {
  tone: FormMessageTone;
  text: string;
}

export function BetaForm() {
  const formContent = landingContent.sections.beta.form;
  const [values, setValues] = useState<BetaFormValues>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<FormMessage | null>(null);

  function updateField<K extends keyof BetaFormValues>(field: K, value: BetaFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFormMessage(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    const honeypotEntry = new FormData(event.currentTarget).get(HONEYPOT_FIELD_NAME);
    const honeypotValue = typeof honeypotEntry === "string" ? honeypotEntry : "";
    const honeypotResult = waitlistHoneypotSchema.safeParse(honeypotValue);
    const isLikelyBot = !honeypotResult.success || honeypotResult.data.length > 0;

    if (isLikelyBot) {
      setErrors({});
      setFormMessage(null);
      setSubmittedName(values.firstName.trim() || HONEYPOT_SUCCESS_NAME);
      return;
    }

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
    setFormMessage(null);
    setIsSubmitting(true);

    try {
      const submitResult = await submitWaitlistEntry(result.data);

      if (submitResult.status === "success") {
        setSubmittedName(result.data.firstName.trim() || HONEYPOT_SUCCESS_NAME);
        window.dispatchEvent(new Event(WAITLIST_COUNT_UPDATED_EVENT));
        trackEvent({ name: "beta_waitlist_submitted", payload: { challenge: result.data.challenge, device: result.data.device } });
        return;
      }

      if (submitResult.status === "duplicate") {
        setFormMessage({ tone: "info", text: submitResult.message });
        return;
      }

      setFormMessage({ tone: "error", text: submitResult.message });
    } finally {
      setIsSubmitting(false);
    }
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
    <form onSubmit={handleSubmit} noValidate aria-busy={isSubmitting} className="rounded-[1.8rem] border border-brand/15 bg-white p-6 shadow-soft sm:p-8 lg:p-9">
      <h3 className="text-[1.9rem] leading-8 text-foreground">{formContent.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{formContent.subtitle}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Input
          label={formContent.fields.firstName}
          name="firstName"
          value={values.firstName}
          placeholder={formContent.placeholders.firstName}
          maxLength={60}
          autoComplete="given-name"
          disabled={isSubmitting}
          onChange={(event) => updateField("firstName", event.target.value)}
          error={errors.firstName}
        />
        <Input
          label={formContent.fields.lastName}
          name="lastName"
          value={values.lastName}
          placeholder={formContent.placeholders.lastName}
          maxLength={60}
          autoComplete="family-name"
          disabled={isSubmitting}
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
          maxLength={254}
          autoComplete="email"
          inputMode="email"
          required
          disabled={isSubmitting}
          onChange={(event) => updateField("email", event.target.value)}
          error={errors.email}
        />
      </div>

      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={HONEYPOT_FIELD_NAME}>Website</label>
        <input
          id={HONEYPOT_FIELD_NAME}
          name={HONEYPOT_FIELD_NAME}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          maxLength={256}
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
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
          required
          disabled={isSubmitting}
          onChange={(event) => updateField("consent", event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-line text-brand focus:ring-brand/40"
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <div className="space-y-1">
          <label htmlFor="consent" className="text-sm leading-6 text-muted-foreground">
            {formContent.fields.consent}
          </label>
          <p className="text-xs leading-5 text-muted-foreground">
            <span>Consulta la </span>
            <Link
              href={formContent.consentLinks[0].href}
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-2 transition-colors hover:text-brand"
            >
              {formContent.consentLinks[0].label}
            </Link>
            <span> y los </span>
            <Link
              href={formContent.consentLinks[1].href}
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-2 transition-colors hover:text-brand"
            >
              {formContent.consentLinks[1].label}
            </Link>
            <span>.</span>
          </p>
          {errors.consent ? <p id="consent-error" className="mt-1 text-sm text-red-600">{errors.consent}</p> : null}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-foreground px-5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:bg-[#5c3520] disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:translate-y-0 disabled:hover:bg-foreground"
      >
        {isSubmitting ? "Enviando..." : formContent.submitLabel}
      </button>
      {formMessage ? (
        <p
          role={formMessage.tone === "error" ? "alert" : "status"}
          className={`mt-3 rounded-xl border px-3 py-2 text-sm ${
            formMessage.tone === "error"
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-brand/20 bg-brand/5 text-foreground/80"
          }`}
        >
          {formMessage.text}
        </p>
      ) : null}
      <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">{formContent.note}</p>
    </form>
  );
}
