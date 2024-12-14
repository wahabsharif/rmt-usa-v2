export interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

export const navBarData: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Company",
    href: "#",
    submenu: [
      { label: "About", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Legacy", href: "#" },
      { label: "Certifications", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        label: "Product Design & Engineering",
        href: "/services/product-design-and-engineering",
      },
      { label: "Quality Testing", href: "/services/quality-testing" },
      {
        label: "Regulatory Affairs & Quality Management",
        href: "/services/regulatory-affairs-and-quality-management",
      },
      {
        label: "Manufacturing Consultancy",
        href: "/services/manufacturing-consultancy",
      },
    ],
  },
  {
    label: "Product Archive",
    href: "/products",
    submenu: [
      {
        label: "Invasive",
        href: "/products/invasive",
      },
      {
        label: "Non-Invasive",
        href: "/products/non-invasive",
      },
      {
        label: "Wearable Medical Devices",
        href: "/products/wearable-medical-devices",
      },
      {
        label: "Active Medical Devices",
        href: "/products/active-medical-devices",
      },
      {
        label: "Medical Software",
        href: "/products/medical-software",
      },
      {
        label: "Drug Delivery Systems",
        href: "/products/drug-delivery-systems",
      },
      {
        label: "Bio-Compatible Scaffolds, Composites & Coatings",
        href: "/products/bio-compatible-scaffolds-composites-coatings",
      },
      {
        label: "Wellness Devices",
        href: "/products/wellness-devices",
      },
    ],
  },
  {
    label: "Insights",
    href: "#",
    submenu: [
      { label: "News / Events", href: "#" },
      { label: "Blogs", href: "#" },
    ],
  },
  {
    label: "Careers",
    href: "#",
  },
];
