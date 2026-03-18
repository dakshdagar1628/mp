import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahesh Rawat | Senior Design Lead",
  description: "Portfolio of Mahesh Rawat, Senior Design Lead & Architect with 14 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#121212] text-white selection:bg-white selection:text-[#121212]`}>
        {children}
      </body>
    </html>
  );
}
