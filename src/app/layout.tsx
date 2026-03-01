import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solomon Nnamani | Full Stack Developer",
  description:
    "Full stack developer specializing in premium Shopify storefronts and editorial commerce experiences. Based in Nigeria, building for brands worldwide.",
  keywords: [
    "Solomon Nnamani",
    "Full Stack Developer",
    "Shopify Developer",
    "Next.js Developer",
    "Nigeria",
    "Web Developer",
    "Commerce Platform",
  ],
  authors: [{ name: "Solomon Nnamani" }],
  openGraph: {
    title: "Solomon Nnamani | Full Stack Developer",
    description:
      "Full stack developer specializing in premium Shopify storefronts and editorial commerce experiences.",
    url: "https://solomonnnamani.netlify.app",
    siteName: "Solomon Nnamani",
    type: "website",
    images: [
      {
        url: "https://solomonnnamani.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solomon Nnamani - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solomon Nnamani | Full Stack Developer",
    description:
      "Full stack developer specializing in premium Shopify storefronts and editorial commerce experiences.",
    images: ["https://solomonnnamani.netlify.app/og-image.png"],
  },
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
