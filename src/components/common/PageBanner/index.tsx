// components/PageBanner.tsx
import BreadCrumb from "./Breadcrumb";

const PageBanner = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `
        url('/images/building-banner-picture.png')
      `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-thDarkBlue bg-opacity-70"></div>

      {/* Centered Breadcrumb */}
      <div className="z-20">
        <BreadCrumb />
      </div>
    </div>
  );
};

export default PageBanner;
