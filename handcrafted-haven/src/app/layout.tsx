import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSession } from "@/app/lib/session";

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description:
    "A warm, artisan-inspired marketplace for handmade goods, maker stories, and thoughtful shopping.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col">
        <Navbar isLoggedIn={!!session} />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
