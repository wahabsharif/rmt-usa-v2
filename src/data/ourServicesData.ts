interface Accordion {
  title: string;

  description: string;
  image: string;
}
interface ServiceSub {
  id: number;
  title: string;

  description: string;
  accordion?: Accordion[];
}
interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  serviceSub: ServiceSub[];
}

export const ourServicesData: Service[] = [
  // Product Design & Engineering
  {
    id: 1,
    slug: "product-design-and-engineering",
    title: "Product Design & Engineering",
    description:
      "We provide a standardized design development approach to our clients where we adhere to strict design control protocols. We offer a complete design development solution for medical devices which also includes 2D, 3D and even PCB Designing. Our clients remain part of the entire designing process, working hand-in-hand to get best possible design output.",
    image: "/images/services/product-design-and-engineering.webp",
    serviceSub: [
      // Design & Fabrication
      {
        id: 1,
        title: "Design & Fabrication",
        description:
          "We provide a standardized design development approach to our clients where we adhere to strict design control protocols. We offer a complete design development solution for medical devices which also includes 2D, 3D and even PCB Designing. Our clients remain part of the entire designing process, working hand-in-hand to get best possible design output.",
        accordion: [
          {
            title: "2D & 3D Designing",
            image: "/images/services/2d-and-3d-design.webp",
            description:
              "Our team provides comprehensive 2D and 3D computer-aided design and modeling solutions, tailored to meet your specific project requirements and adhering to industry best practices.",
          },
          {
            title: "Design Verification & Validation",
            image: "/images/services/design-verification-and-validation.webp",
            description:
              "Our team utilizes advanced tools and methodologies to meticulously examine your designs, identifying and addressing any potential issues, errors, or discrepancies.",
          },
          {
            title: "Additive Manufacturing",
            image: "/images/services/additive-manufacturing.webp",
            description:
              "We specialize in a range of advanced techniques, including; Fused Deposition Modeling (FDM), Resin Printing, PCB Printing",
          },
          {
            title: "Subtractive Manufacturing",
            image: "/images/services/subtractive-manufacturing.webp",
            description:
              "RMT provides comprehensive subtractive manufacturing services, including CNC machining, laser cutting, milling, casting, and molding, to meet your precise engineering needs.",
          },
        ],
      },

      // Embedded System Development
      {
        id: 2,
        title: "Embedded System Development",
        description:
          "In today’s rapidly evolving healthcare landscape, innovation is key, and embedded system development plays a pivotal role in the creation of cutting-edge medical devices. At Revive Medical Technologies, we are at the forefront of this technological revolution, harnessing the power of embedded systems to develop innovative, life-saving solutions that make a real difference in the healthcare industry",
        accordion: [
          {
            title: "Embedded Firmware Design",
            image: "/images/services/embedded-firmware-design.webp",
            description:
              "Our experienced firmware development team specializes in creating reliable and efficient embedded firmware solutions. We excel in developing firmware for microcontrollers, microprocessors, and specialized embedded systems.",
          },
          {
            title: "Electronics Design",
            image: "/images/services/thumbnail-1.jpg",
            description:
              "Our skilled electronics engineers provide comprehensive design services, from initial concept to functional prototypes. We utilize state-of-the-art technologies and a thorough understanding of industry standards",
          },
          {
            title: "PCB Manufacturing",
            image: "/images/services/s.webp",
            description:
              "We specialize in the production of high-quality printed circuit boards (PCBs). Equipped with advanced machinery like the Carvera, we offer fast turnaround times, exceptional precision, and customization options for prototypes and small to large batch production.",
          },
          {
            title: "PCB Designing",
            image: "/images/services/width_800.webp",
            description:
              "We specialize in providing top-notch PCB design solutions tailored to meet your unique requirements. Our team of experienced engineers is committed to delivering high-quality, reliable, and efficient PCB layouts for a wide range of applications.",
          },
        ],
      },

      // Biomaterial & Drug Synthesis
      {
        id: 3,
        title: "Biomaterial & Drug Synthesis",
        description:
          "Our Biomaterials and Drug Synthesis division is dedicated to harnessing the potential of biomaterials for a myriad of healthcare applications. Whether it's related to customized coatings and surface modifications of medical devices or the refinement of targeted drug delivery mechanisms, we stand at the forefront of innovation. Through a meticulous blend of scientific expertise and technological prowess, we strive to elevate medical treatments to unprecedented levels of efficacy and safety.",
        accordion: [
          {
            title: "Pharmaceutical Formulations & Coatings",
            image: "/images/services/s (1).webp",
            description:
              "Our Pharmaceutical Formulations division integrates pharmaceutical sciences, chemistry, and biotechnology to provide tailored pharmaceutical formulations. We specialize in the development of advanced coatings engineered to optimize biocompatibility, device functionality, and performance across various therapeutic areas, such as oncology, cardiology, neurology, and infectious diseases.",
          },
          {
            title: "Drug Development & delivery systems",
            image: "/images/services/s (2).webp",
            description:
              "At RMT, we leverage cutting-edge techniques and computational approaches, to conduct rigorous research to identify and optimize novel therapeutic molecules. Our team specialize in designing and optimizing advanced delivery platforms such as microspheres, liposomes and nanoparticles to enhance the efficacy and safety of pharmaceutical products.",
          },
          {
            title: "Testing Services",
            image: "/images/services/width_571.webp",
            description:
              "Our Testing Services division is committed to ensuring the safety, efficacy, and quality of medical products through rigorous testing protocols. Our comprehensive suite of testing services includes: Quality Testing Sterilization Validation Shelf-life Testing Microbiological Testing",
          },
        ],
      },

      // Software Development
      {
        id: 4,
        title: "Software Development",
        description:
          "Innovative software solutions are the driving force behind the enhancement of patient care, process optimization, and industry transformation in the ever-evolving healthcare landscape. At Revive Medical Technologies Inc., we are pioneers in developing cutting-edge healthcare software solutions that span critical areas.",
        accordion: [
          {
            title: "AI/ML",
            image: "/images/services/s (3).webp",
            description:
              "We leverage the power of Artificial Intelligence and Machine Learning to create intelligent medical solutions. Our team can design and develop custom algorithms for tasks like medical image analysis, diagnostics, and personalized treatment planning. We develop both, generative AI and traditional AI based solutions, followed by statistical analysis and data science.",
          },
          {
            title: "DevOps",
            image: "/images/services/s (4).webp",
            description:
              "Our experts ensure continuous integration, delivery, and optimized deployment of web applications, enabling rapid development and updates. By leveraging automated testing, monitoring, and efficient collaboration tools, we ensure high-quality code and seamless integration across development and operations. Our approach enhances scalability, reduces time-to-market while maintaining reliability",
          },
          {
            title: "Customized Application Development",
            image: "/images/services/width_800 (1).webp",
            description:
              "Our skilled developers bring medical software vision to life. We specialize in building secure, scalable, and user-friendly applications that meet the specific needs of the healthcare industry whether it be Web Application, Desktop Application or Mobile Application.",
          },
          {
            title: "SQA",
            image: "/images/services/s (5).webp",
            description:
              "We guarantee the quality and reliability of your medical software through comprehensive Software Quality Assurance (SQA) services. Our SQA team meticulously tests applications to ensure they function flawlessly and meet regulatory standards. We specialize in STLC of both, Software-as-Medical-Device (SaMD) and Software-in-Medical-Device (SiMD). From static testing to system-level testing and cybersecurity testing, we offer end-to-end SQA.",
          },
        ],
      },
    ],
  },
];
