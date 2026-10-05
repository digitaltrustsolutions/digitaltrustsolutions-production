import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Domain nicht in Verwendung" },
      {
        name: "description",
        content: "Diese Domain ist derzeit nicht in Verwendung.",
      },
      { property: "og:title", content: "Domain nicht in Verwendung" },
      {
        property: "og:description",
        content: "Diese Domain ist derzeit nicht in Verwendung.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-background px-6 py-10 text-foreground sm:px-10 sm:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />

      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <header className="flex items-center justify-between font-mono text-xs uppercase text-muted-foreground">
          <span>Domainstatus</span>
          <span aria-label="Inaktiv" className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-status" />
            Inaktiv
          </span>
        </header>

        <section className="grid flex-1 place-items-center py-20">
          <div className="w-full max-w-3xl">
            <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-border sm:mb-14 sm:h-20 sm:w-20">
              <div className="relative h-7 w-7 rounded-full border border-foreground sm:h-9 sm:w-9">
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-foreground" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-foreground" />
              </div>
            </div>

            <p className="mb-5 font-mono text-xs uppercase text-muted-foreground">
              Kein Inhalt hinterlegt
            </p>
            <h1 className="max-w-2xl text-4xl font-medium leading-tight sm:text-6xl lg:text-7xl">
              Diese Domain ist derzeit nicht in Verwendung.
            </h1>
          </div>
        </section>

        <footer className="flex items-end justify-between gap-6 border-t border-border pt-5 font-mono text-xs text-muted-foreground">
          <span>Keine Inhalte verfügbar</span>
          <span aria-hidden="true">—</span>
        </footer>
      </div>
    </main>
  );
}
