import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politica de Privacidad",
  description: "Como Rutio trata los datos del sitio web, la waitlist y la app en fase alpha/beta.",
  alternates: {
    canonical: siteConfig.links.legal.privacy
  }
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Politica de Privacidad"
      title="Privacidad en Rutio"
      description="Esta politica explica, de forma simple, como tratamos los datos del sitio web de Rutio y de la app durante esta etapa de desarrollo."
    >
      <div className="space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
        <p>
          <strong className="text-foreground">Ultima actualizacion:</strong> Mayo 2026.
        </p>

        <p>
          Rutio es un proyecto de app de habitos en desarrollo. Esta politica cubre dos contextos diferentes:
          el sitio web publico (incluida la waitlist beta) y el uso de la app movil en fase alpha/beta.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">1. Datos del sitio web y waitlist</h2>
          <p>
            Si envias el formulario de waitlist, podemos tratar y almacenar en Supabase:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Tu email.</li>
            <li>Tu nombre (nombre y apellido) cuando lo compartes en el formulario.</li>
            <li>Informacion de interes que envies, como familia de habitos y dispositivo principal.</li>
            <li>
              Datos tecnicos/contextuales asociados al envio, como <code>source</code>, idioma/locale del navegador y{" "}
              <code>user agent</code>, cuando estan disponibles.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">2. Para que usamos esos datos</h2>
          <p>
            Usamos los datos de waitlist para gestionar el acceso beta, contactar contigo sobre Rutio y enviar novedades del producto
            relacionadas con la beta y su lanzamiento.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">3. Comparticion y uso comercial de datos</h2>
          <p>Rutio no vende tus datos, no los usa para publicidad y no los hace publicos.</p>
          <p>
            El tratamiento tecnico de la waitlist se apoya en Supabase como proveedor de infraestructura. Apple y Google tambien pueden
            procesar ciertos datos tecnicos de forma independiente cuando usas sus plataformas o tiendas.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">4. Datos de la app movil (alpha/beta)</h2>
          <p>
            Rutio permite crear habitos, registrar progreso, escribir entradas de diario, visualizar estadisticas y usar funciones de
            gamificacion/personalizacion.
          </p>
          <p>
            En la fase actual alpha/beta, gran parte de los datos de uso de la app puede mantenerse localmente en el dispositivo, salvo que
            se habiliten funciones con backend o nube para una version concreta.
          </p>
          <p>
            Si introducimos o activamos cuentas, sincronizacion cloud u otros servicios remotos, actualizaremos esta politica para reflejarlo
            con claridad.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">5. Base legal y derechos (GDPR)</h2>
          <p>
            Tratamos datos con base en tu consentimiento (por ejemplo, cuando te apuntas a la waitlist) y en nuestro interes legitimo para
            operar y asegurar el servicio.
          </p>
          <p>
            Puedes solicitar acceso, correccion o eliminacion de tus datos. Tambien puedes pedir informacion adicional sobre el tratamiento
            escribiendo a nuestro email de contacto.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">6. Conservacion y seguridad</h2>
          <p>
            Aplicamos medidas tecnicas razonables para proteger los datos. Conservamos los datos de waitlist mientras sean necesarios para la
            gestion de la beta o hasta que solicites su eliminacion.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">7. Menores</h2>
          <p>
            Rutio esta dirigido a publico general y no busca recopilar intencionalmente datos personales de menores sin base legal o
            autorizacion cuando corresponda.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">8. Cambios y funciones futuras</h2>
          <p>
            Podemos actualizar esta politica si cambian las funciones o los requisitos legales. Versiones futuras pueden incluir cuentas,
            sincronizacion cloud, suscripciones premium, analytics u otras integraciones.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl text-foreground">9. Contacto y solicitudes de eliminacion</h2>
          <p>
            Para solicitudes de acceso, correccion o eliminacion de datos, escribenos a{" "}
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
