import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Athenkosi Marobo · IT Engineer",
  description:
    "Cape Town IT Engineer experienced with Microsoft 365, Entra ID, Intune, Active Directory, Exchange, Zero Trust security and enterprise support.",
  keywords: ["IT Engineer", "Cape Town", "Zero Trust", "Microsoft 365", "Zscaler", "IT Support", "Athenkosi Marobo"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${sans.variable} ${mono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#about">Skip to content</a>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
