import type { Metadata, Viewport } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

export const metadata: Metadata = {
  title: "¿Qué mate sos? | Yerba Cósmico × Adhoc",
  description: "Descubrí tu ritual de mate ideal en 45 segundos.",
  icons: {
    icon: "/adhoc-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${archivoBlack.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
