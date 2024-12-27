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
  description = "Welcome to RMT USA, your reliable resource for professional services.",
  keywords = "RMT USA, professional services, industry solutions, business services",
  authors = [{ name: "RMT USA Team" }],
  imageUrl = "https://rmt-usa.com/default-image.jpg",
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
