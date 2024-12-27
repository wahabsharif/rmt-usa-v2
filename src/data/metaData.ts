// metaData.ts
import { Metadata } from "next";

interface MetaDataProps {
  pageTitle?: string;
  description?: string;
  keywords?: string;
  authors?: { name: string }[];
  imageUrl?: string;
}

export const generateMetadata = ({
  pageTitle,
  description = "Welcome to RMT USA, your reliable resource for cost-effective, time-efficient R&D services.",
  keywords = "RMT USA, professional services, industry solutions, business services, R&D services, healthcare innovation, medical technology, cost-effective R&D, time-efficient R&D, creative minds, physicians, medical device manufacturers, healthcare researchers, market-ready products, healthcare advancement, biomedical engineering, healthcare technology, innovation, research and development, strategic solutions, cutting-edge technology, collaboration, adaptability, technological solutions, global services, technical staff, Pakistan R&D, biomedical engineers, healthcare accessibility, medical device research, trusted partner, healthcare transformation, healthcare sector, product development, accelerated process, medical devices, product commercialization, R&D facility, medical research, healthcare solutions, advanced technology, healthcare improvement, creative solutions, healthcare innovation services, biomedical solutions, research-driven solutions, healthcare experts, technology development, innovation in healthcare, medical device development, healthcare engineering, research excellence, cutting-edge research, healthcare product development, customized solutions, medical technologies, innovative solutions, health tech innovation, medical equipment, healthcare product design, product prototyping, R&D consulting, healthcare development, market research, healthcare startups, product research, market innovation, healthcare design, medical device solutions, quality healthcare, efficient R&D, product design and development, advanced research, global healthcare solutions, healthcare collaboration, healthcare technology solutions, biomedical device innovation, strategic R&D, product innovation, healthcare advancement services, product testing, medical innovation, healthcare manufacturing, medical technology solutions, business R&D services, innovative product solutions, healthcare R&D, healthcare services innovation, product market fit, technology commercialization, healthcare R&D facility, healthcare product innovation, international healthcare solutions, tech-driven healthcare solutions, healthcare process improvement, product success, healthcare experts solutions, biomedical research, medical devices innovation, healthcare industry solutions",
  authors = [{ name: "RMT USA Team" }],
  imageUrl = "/images/rmt-usa-og-image.png",
}: MetaDataProps): Metadata => ({
  title: pageTitle ? `${pageTitle} - RMT USA` : "RMT USA",
  description,
  keywords,
  authors: authors.map((author) => ({ name: author.name })),
  openGraph: {
    title: pageTitle ? `${pageTitle} - RMT USA` : "RMT USA",
    description,
    url: "https://rmt-usa.com",
    siteName: "RMT USA",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: pageTitle || "RMT USA Web Image",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
});
