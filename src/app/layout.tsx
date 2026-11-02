import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devlinks",
  description: "Todos os meus links em um só lugar",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt_BR" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background font-sans text-foreground antialiased`}><ThemeProvider>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
