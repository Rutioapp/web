import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terminos y Condiciones",
  description: "Condiciones de uso del sitio web de Rutio, waitlist beta y app en desarrollo.",
  alternates: {
    canonical: absoluteUrl(siteConfig.links.legal.terms)
  }
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terminos y Condiciones"
      title="Uso del sitio web y la app Rutio"
      description="Estas condiciones describen el uso del sitio de Rutio, la waitlist beta y la app en fase de desarrollo."
    >
      <div className="space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          <strong className="text-foreground">Ultima actualizacion:</strong> Mayo 2026.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">1. Descripcion del servicio</h2>
          <p>
            Rutio es una app de habitos en desarrollo. El sitio web actual es informativo e incluye un formulario de waitlist para personas
            interesadas en la beta.
          </p>
          <p>
            La app puede incluir funciones como habitos, progreso, diario, estadisticas, gamificacion y personalizacion, pero durante
            alpha/beta algunas funciones pueden estar incompletas o cambiar.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">2. Waitlist y acceso beta</h2>
          <p>
            Unirte a la waitlist no garantiza acceso a la beta ni un plazo concreto de invitacion. Las invitaciones se envian de forma
            progresiva segun disponibilidad y objetivos de prueba.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">3. Responsabilidad del usuario</h2>
          <p>
            Eres responsable de la informacion que envias en la web y del contenido que creas en la app (por ejemplo, habitos o entradas de
            diario). Debes usar Rutio de forma legal y respetuosa.
          </p>
          <p>No debes intentar abusar del formulario, interferir con el servicio ni explotar vulnerabilidades del sitio o de la app.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">4. Disponibilidad, cambios y suspension</h2>
          <p>
            Podemos modificar, pausar o retirar funciones del sitio o de la app en cualquier momento, especialmente durante desarrollo,
            alpha y beta.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">5. Estado del servicio y garantias</h2>
          <p>Durante alpha/beta, Rutio se ofrece en estado &quot;as is&quot; y &quot;as available&quot;.</p>
          <p>
            No garantizamos disponibilidad continua, ausencia total de errores ni que el uso de Rutio implique el logro de objetivos de
            habitos personales.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">6. Funciones futuras</h2>
          <p>
            En futuras versiones, Rutio puede incorporar cuentas, sincronizacion cloud, suscripciones premium y nuevas integraciones. Esas
            funciones pueden tener condiciones adicionales.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">7. Contacto</h2>
          <p>
            Para consultas sobre estos terminos, puedes escribir a{" "}
            <a className="text-foreground underline" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </section>
      </div>
    </PageShell>
  );
}
