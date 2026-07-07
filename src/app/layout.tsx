import type { Metadata } from "next";
import { Inter, JetBrains_Mono, PT_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-pt-serif",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Megha - Graphic Designer",
  description:
    "Megha is a graphic designer based in Delhi specialising in brand identity, packaging and editorial design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, ptSerif.variable, jetBrainsMono.variable)}
    >
      <body className="bg-bg font-body antialiased text-ink">{children}</body>
    </html>
  );
}
