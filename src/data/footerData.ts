import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export const footerData = {
  description:
    "Your complete journey partner from conceptualisation to Full-Scale Commercial Reality in the Medical Innovation Landscape.",
  usPhoneNumber: "+1 (689) 216-4437",
  pakPhoneNumber: "+92 (51) 848-0117",
  links: [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/products", text: "Products" },
    { href: "/blog-posts", text: "Blog" },
    { href: "/careers", text: "Careers" },
    { href: "/contact", text: "Contact" },
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
