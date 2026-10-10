import { createFileRoute } from "@tanstack/react-router";
import { ChartNoAxesColumnIncreasing, CodeXml, FileUser } from "lucide-react";
import logoAsset from "@/assets/dts-logo.png.asset.json";

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
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="dts-page bg-background text-foreground">
      <section aria-labelledby="brand-name" className="dts-hero">
        <h1 id="brand-name" className="sr-only">Digital Trust Solutions GmbH</h1>
        <img
          src={logoAsset.url}
          alt="DTS – Digital Trust Solutions GmbH"
          width={1536}
          height={1024}
          fetchPriority="high"
          className="dts-logo"
        />
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
