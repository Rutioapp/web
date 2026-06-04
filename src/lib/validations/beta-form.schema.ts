import { z } from "zod";

export const WAITLIST_FIELD_LIMITS = {
  firstName: 60,
  lastName: 60,
  email: 254,
  source: 64,
  challenge: 64,
  message: 280,
  honeypot: 256
} as const;

export const betaFormSchema = z.object({
  firstName: z.string().trim().max(WAITLIST_FIELD_LIMITS.firstName, "Usa un nombre mas corto."),
  lastName: z.string().trim().max(WAITLIST_FIELD_LIMITS.lastName, "Usa un apellido mas corto."),
  email: z.string().trim().toLowerCase().email("Introduce un email valido.").max(WAITLIST_FIELD_LIMITS.email, "El email es demasiado largo."),
  challenge: z.string().trim().max(WAITLIST_FIELD_LIMITS.challenge, "Usa un texto mas corto."),
  device: z.string().trim().min(1, "Selecciona tu dispositivo principal."),
  consent: z.boolean().refine((value) => value, {
    message: "Necesitamos tu consentimiento para avisarte sobre la beta."
  })
});

export type BetaFormValues = z.infer<typeof betaFormSchema>;

export const waitlistHoneypotSchema = z
  .string()
  .trim()
  .max(WAITLIST_FIELD_LIMITS.honeypot, "Campo no valido.")
  .optional()
  .default("");
