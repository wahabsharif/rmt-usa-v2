import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import { ourPartnersData } from "@/data/ourPartnersData";

const firstRow = ourPartnersData.slice(0, ourPartnersData.length / 2);
const secondRow = ourPartnersData.slice(ourPartnersData.length / 2);

const PartnerCard = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
  link: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-center justify-center">
        <Image
          className="w-16 h-16 md:w-24 md:h-24 object-contain"
          width={1000}
          height={1000}
          alt={alt}
          src={src}
        />
      </div>
    </figure>
  );
};

export function PartnersMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <h2 className="text-center py-4 text-5xl text-thDarkBlue font-semibold">
        Our Strategic Partners
      </h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((partner) => (
          <PartnerCard key={partner.alt} {...partner} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((partner) => (
          <PartnerCard key={partner.alt} {...partner} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
