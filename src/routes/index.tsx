import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blank — A fresh start" },
      {
        name: "description",
        content: "A clean, minimal canvas ready for your next idea.",
      },
      { property: "og:title", content: "Blank — A fresh start" },
      {
        property: "og:description",
        content: "A clean, minimal canvas ready for your next idea.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <div className="max-w-xl space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Projeto em branco
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Uma tela limpa e minimalista pronta para receber sua próxima ideia.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Começar aqui
          </Link>
          <a
            href="https://docs.lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Ler documentação
          </a>
        </div>
      </div>

      <footer className="absolute bottom-8 text-xs text-muted-foreground">
        Feito com Lovable
      </footer>
    </main>
  );
}
