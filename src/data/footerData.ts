import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export const footerData = {
  description:
    "Your complete journey partner from conceptualisation to Full-Scale Commercial Reality in the Medical Innovation Landscape.",
  phoneNumber: "+1 1234 5678",
  links: [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "#", text: "Products" },
    { href: "#", text: "Blog" },
    { href: "#", text: "Contact" },
  ],
  socialLinks: [
    {
      href: "https://www.instagram.com/revivemedicaltechnologies/",
      icon: FaInstagram,
    },
    { href: "https://www.facebook.com/", icon: FaFacebook },
    {
      href: "https://www.linkedin.com/company/revive-medical-technologies-inc/",
      icon: FaLinkedin,
    },
    {
      href: "https://www.youtube.com/@revivemeditech",
      icon: FaYoutube,
    },
  ],
};
