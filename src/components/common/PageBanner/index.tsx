// components/PageBanner.tsx
import BreadCrumb from "./Breadcrumb";

const PageBanner = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `
        radial-gradient(circle, rgba(220,51,50,0.5193678057160365) 0%, rgba(1,53,80,1) 67%),
        url('/images/page-banner.webp')
      `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Breadcrumb */}
      <div className="z-20">
        <BreadCrumb />
      </div>
    </div>
  );
};

export default PageBanner;
