// components/NextSeo.tsx
import { NextSeo as NextSeoLib } from "next-seo";

interface NextSeoProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    url: string;
    title: string;
    description: string;
    images?: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter?: {
    handle: string;
    site: string;
    cardType: string;
  };
}

const NextSeo = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
}: NextSeoProps) => {
  return (
    <NextSeoLib
      title={title}
      description={description}
      canonical={canonical}
      openGraph={openGraph}
      twitter={twitter}
    />
  );
};

export default NextSeo;
