export interface AnalyticsEvent {
  name: string;
  payload?: Record<string, string | number | boolean | null | undefined>;
}

export function trackEvent(_event: AnalyticsEvent) {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  // Reserved for future analytics integration.
}
