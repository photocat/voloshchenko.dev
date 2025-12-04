/**
 * Root layout component that wraps all pages with a header and footer.
 */

import React from "react";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { APP_HEADER_MOBILE_HEIGHT, APP_HEADER_DESKTOP_HEIGHT} from "@/lib/constants";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div
          className="flex h-screen flex-col relative items-center"
          style={
              {
                  "--app-header-mobile-height": `${APP_HEADER_MOBILE_HEIGHT}px`,
                  "--app-header-desktop-height": `${APP_HEADER_DESKTOP_HEIGHT}px`,
              } as React.CSSProperties
          }
      >
        <Header />
          <main className="flex-1 wrapper pt-[var(--app-header-mobile-height)] lg:pt-[var(--app-header-desktop-height)]">
            { children }
        </main>
        <Footer />
      </div>
    );
}
