import type { PostgrestError } from "@supabase/supabase-js";

import {
  createSupabaseBrowserClient,
  isSupabaseBrowserConfigured,
  type WaitlistSignupInsert
} from "@/lib/supabase/client";
import type { BetaFormValues } from "@/lib/validations/beta-form.schema";

const DUPLICATE_EMAIL_ERROR_CODE = "23505";
const WAITLIST_SOURCE = "rutio_web_landing_beta";
const WAITLIST_CONFIGURATION_ERROR =
  "La lista de espera estara disponible en breve. Prueba de nuevo en unos minutos.";
const GENERIC_WAITLIST_ERROR = "No pudimos guardar tu solicitud ahora mismo. Intentalo de nuevo en unos minutos.";

export const DUPLICATE_WAITLIST_MESSAGE = "Este email ya esta en la lista. Te avisaremos cuando abramos la beta.";

interface SubmitWaitlistSuccessResult {
  status: "success";
}

interface SubmitWaitlistDuplicateResult {
  status: "duplicate";
  message: string;
}

interface SubmitWaitlistErrorResult {
  status: "error";
  message: string;
}

export type SubmitWaitlistEntryResult =
  | SubmitWaitlistSuccessResult
  | SubmitWaitlistDuplicateResult
  | SubmitWaitlistErrorResult;

function isDuplicateEmailError(error: PostgrestError) {
  if (error.code === DUPLICATE_EMAIL_ERROR_CODE) {
    return true;
  }

  const details = `${error.message} ${error.details ?? ""}`.toLowerCase();

  return details.includes("duplicate key value") || details.includes("waitlist_signups_email_key");
}

function toWaitlistInsertPayload(values: BetaFormValues): WaitlistSignupInsert {
  const fullName = `${values.firstName.trim()} ${values.lastName.trim()}`.trim();
  const locale = typeof navigator !== "undefined" ? navigator.language : null;
  const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : null;

  return {
    email: values.email.trim().toLowerCase(),
    name: fullName || null,
    source: WAITLIST_SOURCE,
    message: `challenge:${values.challenge.trim()};device:${values.device.trim()}`,
    locale,
    user_agent: userAgent
  };
}

export async function submitWaitlistEntry(values: BetaFormValues): Promise<SubmitWaitlistEntryResult> {
  if (!isSupabaseBrowserConfigured()) {
    return {
      status: "error",
      message: WAITLIST_CONFIGURATION_ERROR
    };
  }

  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    return {
      status: "error",
      message: WAITLIST_CONFIGURATION_ERROR
    };
  }

  const payload = toWaitlistInsertPayload(values);
  const { error } = await supabase.from("waitlist_signups").insert(payload);

  if (!error) {
    return { status: "success" };
  }

  if (isDuplicateEmailError(error)) {
    return {
      status: "duplicate",
      message: DUPLICATE_WAITLIST_MESSAGE
    };
  }

  return {
    status: "error",
    message: GENERIC_WAITLIST_ERROR
  };
}
