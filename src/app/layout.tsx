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
  title: "RodCode — Rodolfo Rodriguez | Full Stack Developer",
  description: "Desarrollador Full Stack con experiencia en React, Next.js, NestJS, React Native y AWS. Transformo ideas en soluciones digitales efectivas.",
  openGraph: {
    title: "RodCode — Rodolfo Rodriguez | Full Stack Developer",
    description: "Desarrollador Full Stack con experiencia en React, Next.js, NestJS, React Native y AWS.",
    url: "https://rodcode.dev",
    siteName: "RodCode",
    images: [
      {
        url: "https://rodcode.dev/hologramas_portfolio.png",
        width: 1200,
        height: 630,
        alt: "RodCode Portfolio — Rodolfo Rodriguez",
      },
    ],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "RodCode — Rodolfo Rodriguez | Full Stack Developer",
    description: "Desarrollador Full Stack con experiencia en React, Next.js, NestJS, React Native y AWS.",
    images: ["https://rodcode.dev/hologramas_portfolio.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
