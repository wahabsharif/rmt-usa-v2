import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import TopBar from "@/components/common/TopBar";
import Footer from "@/components/common/Footer";
import MobileNavBar from "@/components/common/MobileNavBar";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
export const metadata: Metadata = {
  title: "RMT USA",
};

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
