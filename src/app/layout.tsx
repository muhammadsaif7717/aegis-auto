import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0F17",
};

export const metadata: Metadata = {
  title: "Aegis Auto | Luxury Car Wrap & Paint Protection Studio",
  description:
    "Manhattan's premier cleanroom automotive styling atelier specializing in bespoke self-healing Paint Protection Film (PPF), exotic color wraps, 9H graphene ceramic coating, and precision paint correction.",
  keywords: [
    "PPF",
    "Paint Protection Film",
    "Car Wrap",
    "Vinyl Wrap NYC",
    "Supercar Detailing",
    "Ceramic Coating",
    "XPEL Cleanroom",
    "Stealth PPF",
    "Porsche GT3 RS Wrap",
  ],
  authors: [{ name: "Aegis Auto Bespoke Atelier" }],
  openGraph: {
    title: "Aegis Auto — Elite Supercar Paint Protection & Styling Atelier",
    description:
      "Class-100 Cleanroom PPF, color change wraps, and multi-stage paint correction with zero blade-on-paint guarantee.",
    type: "website",
    locale: "en_US",
    siteName: "Aegis Auto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#0B0F17] text-[#F8FAFC] antialiased selection:bg-amber-500/30 selection:text-white flex flex-col overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
