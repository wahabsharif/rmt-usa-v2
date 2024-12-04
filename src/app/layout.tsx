import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/components/common/NavBar";
import TopBar from "@/components/common/TopBar";
import Footer from "@/components/common/Footer";
import MobileNavBar from "@/components/common/MobileNavBar";

export const metadata: Metadata = {
  title: "RMT USA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
