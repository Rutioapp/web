import type { PostgrestError } from "@supabase/supabase-js";

import {
  createSupabaseBrowserClient,
  isSupabaseBrowserConfigured,
  type WaitlistSignupInsert
} from "@/lib/supabase/client";
import { WAITLIST_FIELD_LIMITS, type BetaFormValues } from "@/lib/validations/beta-form.schema";

const DUPLICATE_EMAIL_ERROR_CODE = "23505";
const WAITLIST_SOURCE = "rutio_web_landing_beta";
// TODO: Move this flow behind a Next.js route handler for stronger server-side rate limiting / bot controls.
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

function truncate(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  return value.slice(0, maxLength);
}

function isDuplicateEmailError(error: PostgrestError) {
  if (error.code === DUPLICATE_EMAIL_ERROR_CODE) {
    return true;
  }

  const details = `${error.message} ${error.details ?? ""}`.toLowerCase();

  return details.includes("duplicate key value") || details.includes("waitlist_signups_email_key");
}

function toWaitlistInsertPayload(values: BetaFormValues): WaitlistSignupInsert {
  const fullName = `${values.firstName.trim()} ${values.lastName.trim()}`.trim();
  const messageParts = [
    values.challenge.trim() ? `challenge:${values.challenge.trim()}` : null,
    `device:${values.device.trim()}`
  ].filter((part): part is string => Boolean(part));
  const locale = typeof navigator !== "undefined" ? truncate(navigator.language, 32) : null;
  const userAgent = typeof navigator !== "undefined" ? truncate(navigator.userAgent, 512) : null;

  return {
    email: values.email,
    name: fullName ? truncate(fullName, WAITLIST_FIELD_LIMITS.firstName + WAITLIST_FIELD_LIMITS.lastName + 1) : null,
    source: truncate(WAITLIST_SOURCE, WAITLIST_FIELD_LIMITS.source),
    message: truncate(messageParts.join(";"), WAITLIST_FIELD_LIMITS.message),
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

  try {
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
  } catch {
    return {
      status: "error",
      message: GENERIC_WAITLIST_ERROR
    };
  }

  return {
    status: "error",
    message: GENERIC_WAITLIST_ERROR
  };
}
