"use client";
import Footer from "@/components/common/Footer";
import MobileNavBar from "@/components/common/MobileNavBar";
import NavBar from "@/components/common/NavBar";
import TopBar from "@/components/common/TopBar";
export default function NotFoundPage() {
  return (
    <>
      <TopBar />
      <NavBar />
      <MobileNavBar />
      <div className="flex items-center justify-center h-screen p-2">
        <div className="text-center">
          <h1 className="text-2xl md:text-6xl font-bold text-thRed mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-sm md:text-lg text-gray-700 mb-6">
            Oops! The page you are looking for does not exist.
          </p>
          <p className="text-center text-xs md:text-md text-gray-600 mb-10 max-w-md mx-auto">
            At RMT, we are focused on innovating ideas and accelerating success.
            While this page may be missing, our dedication to turning ideas into
            market-ready products remains unwavering.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-thLightBlue text-white rounded-md hover:bg-thDarkBlue transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
