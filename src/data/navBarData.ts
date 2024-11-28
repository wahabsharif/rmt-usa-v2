export interface MenuItem {
    label: string;
    href: string;
    submenu?: MenuItem[];
    isButton?: boolean;
}

export const navBarData: MenuItem[] = [
    {
        label: "Home",
        href: "#",
    },
    {
        label: "Company",
        href: "#",
        submenu: [
            {
                label: "ABOUT",
                href: "#",
                submenu: [
                    { label: "About RMT", href: "#" },
                    { label: "Mission", href: "#" },
                    { label: "Vision", href: "#" },
                ],
            },
            {
                label: "OUR TEAM",
                href: "#",
                submenu: [
                    { label: "Leadership", href: "#" },
                    { label: "Our Professionals", href: "#" },
                ],
            },
            { label: "Legacy", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Certifications(Optional)", href: "#" },
        ],
    },
    {
        label: "SERVICES",
        href: "#",
        submenu: [
            {
                label: "Product design & engineering",
                href: "#",
                submenu: [
                    { label: "design & fabrication", href: "#" },
                    { label: "embedded systems", href: "#" },
                    { label: "biomaterials & drug synthesis", href: "#" },
                    { label: "software", href: "#" },
                    { label: "embedded systems", href: "#" },
                ],
            },
            { label: "Quality testing", href: "#" },
            { label: "Regulatory affairs & quality management", href: "#" },
            { label: "Manufacturing consultancy", href: "#" },
        ],
    },
    {
        label: "PRODUCT ARCHIVE",
        href: "#",
    },
    {
        label: "INSIGHTS",
        href: "#",
        submenu: [
            { label: "News / Events", href: "#" },
            { label: "Blogs", href: "#" },
        ],
    },
    {
        label: "CONTACT US",
        href: "#",
    },
];

