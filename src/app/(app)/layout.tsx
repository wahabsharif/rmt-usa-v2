import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import TopBar from "@/components/common/TopBar";
import Footer from "@/components/common/Footer";
import MobileNavBar from "@/components/common/MobileNavBar";
import { generateMetadata } from "@/data/metaData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = generateMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <TopBar />
        <NavBar />
        <MobileNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
