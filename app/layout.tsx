import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sacrament Meeting",
  description: "This app helps organize the sacrament meeting program",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header wardName="Bountiful 8th Ward" />

          {/* Hero using next/image (local asset in public/hero.jpg) */}
          <header className="relative h-48 w-full">
            <Image
              src="/hero.png"
              alt="Ward meeting hall"
              fill
              priority
              sizes="(min-width: 768px) 1200px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-2xl font-bold text-white drop-shadow-md">
                Bountiful 8th Ward
              </h1>
            </div>
          </header>

          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
