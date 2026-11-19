import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahesh Rawat | Senior Architect / Design Lead",
  description:
    "Senior architect and design lead working across architecture, interiors, biophilic design, sensory experience, and wayfinding.",
  openGraph: {
    title: "Mahesh Rawat | Senior Architect / Design Lead",
    description:
      "Senior architect and design lead working across architecture, interiors, biophilic design, sensory experience, and wayfinding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
