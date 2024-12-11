import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

// Metadata
export const metadata: Metadata = {
  title: "African Plains Conservation Trust",
  description:
    "African Plains Conservation Trust is a non-profit organization that works towards sustainable conservation of select habitats and ecosystems in Kenya as well as development of neighboring communities.",
  openGraph: {
    title: "African Plains Conservation Trust",
    description:
      "Supporting the sustainable conservation of ecosystems and the development of surrounding communities in Kenya.",
    url: "https://africanplains.org",
    images: ["/hero-img.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "African Plains Conservation Trust",
    description:
      "Supporting the sustainable conservation of ecosystems and the development of surrounding communities in Kenya.",
    images: ["/hero-img.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="efI+B8VMyyCyIpHNOeElmg"
          defer={true}
        />
        <meta
          name="ahrefs-site-verification"
          content="8fc9c178bccf0c56e3ed474999f963ea7c66307dd913e0a9cbb9bb6f4b65da9b"
        />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
