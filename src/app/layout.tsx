import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solomon Nnamani - Portfolio",
  description: "Aspiring software engineer showcasing projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
