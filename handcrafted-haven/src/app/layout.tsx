import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description:
    "A warm, artisan-inspired marketplace for handmade goods, maker stories, and thoughtful shopping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
