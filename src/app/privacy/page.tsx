import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Borrador de politica de privacidad para la web beta de Rutio.",
  alternates: {
    canonical: siteConfig.links.legal.privacy
  }
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy - Draft"
      title="Borrador de privacidad para la fase beta"
      description="Este texto es un placeholder simple y reemplazable. No constituye asesoria legal final."
    >
      <div className="space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
        <section className="space-y-2">
          <h2 className="text-xl text-foreground">Que datos podemos recoger</h2>
          <p>
            Si envias el formulario de waitlist, Rutio puede guardar datos como nombre, apellido, email, tipo de dispositivo y el mensaje
            o reto compartido en el formulario.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">Para que usamos esos datos</h2>
          <p>
            Usamos esos datos para gestionar la lista de espera, contactar sobre acceso a la beta y compartir novedades relacionadas con el
            lanzamiento de Rutio.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">Solicitud de eliminacion</h2>
          <p>
            Puedes solicitar la eliminacion de tus datos escribiendo a{" "}
            <a className="text-foreground underline" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>

        <p className="rounded-2xl border border-line/70 bg-muted/30 px-4 py-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
          Draft legal placeholder. Reemplazar tras revision legal final.
        </p>
      </div>
    </PageShell>
  );
}
