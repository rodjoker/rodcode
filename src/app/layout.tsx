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
  icons: {
    icon: '/rodcode_logo_black.png',
    shortcut: '/rodcode_logo_black.png',
    apple: '/rodcode_logo_black.png',
  },
  title: "RodCode — Rodolfo Rodriguez | Full Stack Developer",
  description: "Desarrollador Full Stack: React, Next.js, Node.js/Express, NestJS, React Native y AWS. Plataformas en producción y proyectos con IA.",
  openGraph: {
    title: "RodCode — Rodolfo Rodriguez | Full Stack Developer",
    description: "Desarrollador Full Stack: React, Node.js/Express, Next.js, NestJS y AWS.",
    url: "https://rodcode.dev",
    siteName: "RodCode",
    images: [
      {
        url: "https://rodcode.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rodolfo Rodríguez — Full Stack Developer (React, Node.js, Express)",
      },
    ],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "RodCode — Rodolfo Rodriguez | Full Stack Developer",
    description: "Desarrollador Full Stack: React, Node.js/Express, Next.js, NestJS y AWS.",
    images: ["https://rodcode.dev/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
