import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
          This gallery is closed
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The exhibit you're looking for doesn't exist. Let's get you back to the main hall.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-parchment transition-colors hover:bg-navy-deep"
          >
            Return to Museum
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The American Story — A Digital Museum" },
      {
        name: "description",
        content:
          "Step inside an interactive digital museum exploring American history — from Colonial times to the modern day. Click artifacts, watch videos, take quizzes.",
      },
      { property: "og:title", content: "The American Story — A Digital Museum" },
      { name: "twitter:title", content: "The American Story — A Digital Museum" },
      { name: "description", content: "An interactive digital museum exploring American history with curated exhibits and engaging content." },
      { property: "og:description", content: "An interactive digital museum exploring American history with curated exhibits and engaging content." },
      { name: "twitter:description", content: "An interactive digital museum exploring American history with curated exhibits and engaging content." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/331fd5e1-5dbb-4901-b3c0-c6c32241d20d/id-preview-84ef6280--d61194a7-8b14-414c-8671-043f991db326.lovable.app-1777271441124.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/331fd5e1-5dbb-4901-b3c0-c6c32241d20d/id-preview-84ef6280--d61194a7-8b14-414c-8671-043f991db326.lovable.app-1777271441124.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;900&family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
