import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabane",
  description: "Luxusní glamping chata v přírodě u Vysokého Mýta. Pronájem moderní dřevěné chaty pro dovolenou. Ubytování v přírodě Pardubice.",
  keywords: ["glamping", "Vysoké Mýto", "chata", "ubytování", "dovolená", "pronájem chaty", "chaty", "pronájem chaty Pardubice", "Pardubice", "glamping Pardubice"],
  authors: [{ name: "Cabane Badger Ridge" }],
  creator: "Atelier Lavit",
  publisher: "Cabane Badger Ridge",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://cabane.cz",
    title: "Cabane Badger Ridge | Glamping chata Vysoké Mýto",
    description: "Luxusní glamping chata v přírodě u Vysokého Mýta. Pronájem moderní dřevěné chaty pro dovolenou.",
    siteName: "Cabane Badger Ridge",
    images: [
      {
        url: "https://cabane.cz/herodesktop.png",
        width: 1200,
        height: 630,
        alt: "Cabane Badger Ridge - Glamping chata Vysoké Mýto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabane Badger Ridge | Glamping chata Vysoké Mýto",
    description: "Luxusní glamping chata v přírodě u Vysokého Mýta. Pronájem moderní dřevěné chaty pro dovolenou.",
    images: ["https://cabane.cz/herodesktop.png"],
  },
  alternates: {
    canonical: "https://cabane.cz",
  },
  metadataBase: new URL("https://cabane.cz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
