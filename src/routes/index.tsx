import { createFileRoute } from "@tanstack/react-router";
import { ChartNoAxesColumnIncreasing, CodeXml, FileUser } from "lucide-react";
const LOGO_WEBP = "/dts-logo.webp?v=3";
const LOGO_PNG = "/dts-logo.png?v=3";
const shareImageUrl = "https://id-preview--8d6efa8c-2516-4023-b1ba-594adb35c077.lovable.app/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DTS | Digital Trust Solutions GmbH" },
      {
        name: "description",
        content: "Digital Trust Solutions GmbH – Software Engineering, Accounting und professionelle Bewerbungsunterlagen.",
      },
      { property: "og:title", content: "DTS | Digital Trust Solutions GmbH" },
      {
        property: "og:description",
        content: "Software Engineering, Accounting und professionelle Bewerbungsunterlagen von Digital Trust Solutions GmbH.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: shareImageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "DTS-Logo auf weissem Hintergrund" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: shareImageUrl },
    ],
    links: [{ rel: "preload", as: "image", href: LOGO_WEBP, type: "image/webp", fetchPriority: "high" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="dts-page bg-background text-foreground">
      <section aria-labelledby="brand-name" className="dts-hero">
        <h1 id="brand-name" className="sr-only">Digital Trust Solutions GmbH</h1>
        <picture>
          <source srcSet={LOGO_WEBP} type="image/webp" />
          <img
          src={LOGO_PNG}
          alt="DTS – Digital Trust Solutions GmbH"
          width={1600}
          height={534}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="dts-logo"
          />
        </picture>
        <div className="dts-services" aria-label="Leistungen">
          <div className="dts-service">
            <CodeXml aria-hidden="true" className="dts-service-icon" strokeWidth={1.35} />
            <span>Software<br />Engineering</span>
          </div>
          <a href="https://www.startsaldo.ch" className="dts-service dts-service-link">
            <ChartNoAxesColumnIncreasing aria-hidden="true" className="dts-service-icon" strokeWidth={1.35} />
            <span>Accounting</span>
          </a>
          <a href="https://www.bewerbungswerkstatt.ch" className="dts-service dts-service-link">
            <FileUser aria-hidden="true" className="dts-service-icon" strokeWidth={1.35} />
            <span>Professionelle<br />Bewerbungsunterlagen</span>
          </a>
        </div>
      </section>
    </main>
  );
}
