import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "./providers/ClientProviders";
import RotationPrompt from "./components/ui/RotationPrompt";
import StructuredData from "./components/StructuredData";
import FAQSchema from "./components/FAQSchema";
import { metadata as siteMetadata } from "./metadata";
import { viewport as siteViewport } from "./viewport";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Not critical, defer loading
  fallback: ["monospace"],
  adjustFontFallback: true,
});

// Export metadata and viewport for SEO
export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          rel="preload" 
          as="image" 
          href="/assets/images/hero/hero-frame2.svg"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <FAQSchema />
        <RotationPrompt />
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
