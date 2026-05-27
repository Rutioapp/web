import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Borrador de terminos de uso para la web beta de Rutio.",
  alternates: {
    canonical: siteConfig.links.legal.terms
  }
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms of Use - Draft"
      title="Condiciones base para la web beta"
      description="Este texto es un placeholder simple y reemplazable. No constituye asesoria legal final."
    >
      <div className="space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
        <section className="space-y-2">
          <h2 className="text-xl text-foreground">Naturaleza del sitio</h2>
          <p>La web de Rutio tiene fines informativos y de acceso temprano a la beta del producto.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">Acceso beta</h2>
          <p>
            Unirte a la waitlist no garantiza acceso inmediato ni acceso garantizado a la beta. Las invitaciones se enviaran de forma gradual
            segun disponibilidad.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">Cambios antes del lanzamiento</h2>
          <p>
            Funcionalidades, contenido y disponibilidad de Rutio pueden cambiar antes del lanzamiento oficial en funcion del aprendizaje de la
            fase beta.
          </p>
        </section>

        <p className="rounded-2xl border border-line/70 bg-muted/30 px-4 py-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
          Draft legal placeholder. Reemplazar tras revision legal final.
        </p>
      </div>
    </PageShell>
  );
}
