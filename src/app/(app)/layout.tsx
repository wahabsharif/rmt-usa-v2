import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import TopBar from "@/components/common/TopBar";
import Footer from "@/components/common/Footer";
import MobileNavBar from "@/components/common/MobileNavBar";
import { Manrope } from "next/font/google";
import { generateMetadata } from "@/data/metaData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = generateMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <TopBar />
        <NavBar />
        <MobileNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
