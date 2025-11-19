import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

//Fonts
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400"],
});

//Metadata
export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebas.variable} ${manrope.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
