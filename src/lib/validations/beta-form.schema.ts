import { z } from "zod";

export const betaFormSchema = z.object({
  firstName: z.string().trim().min(2, "Escribe tu nombre.").max(60, "Usa un nombre más corto."),
  lastName: z.string().trim().min(2, "Escribe tu apellido.").max(60, "Usa un apellido más corto."),
  email: z.string().trim().email("Introduce un email válido."),
  challenge: z.string().trim().min(1, "Selecciona una familia principal."),
  device: z.string().trim().min(1, "Selecciona tu dispositivo principal."),
  consent: z.boolean().refine((value) => value, {
    message: "Necesitamos tu consentimiento para avisarte sobre la beta."
  })
});

export type BetaFormValues = z.infer<typeof betaFormSchema>;
