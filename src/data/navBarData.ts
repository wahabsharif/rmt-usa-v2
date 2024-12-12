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
      { label: "Product Design & Engineering", href: "/services#product-design" },
      { label: "Quality Testing", href: "/services#quality-testing" },
      { label: "Regulatory Affairs & Quality Management", href: "/services#regulatory-affairs" },
      { label: "Manufacturing Consultancy", href: "/services#manufacturing" },
    ],
  },
  {
    label: "Product Archive",
    href: "#",
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
