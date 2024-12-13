interface AccordionItem {
  title: string;
  content: string;
}

// Define the interface for each service
interface Service {
  id: string;
  title: string;
  description: string;
  bgImage: string;
  accordion: AccordionItem[]; // Each service has an array of accordion items
}

export const ourServicesData: Service[] = [
  {
    id: "product-design",
    title: "Product Design & Engineering",
    description:
      "We provide a standardized design development approach to our clients where we adhere to strict design control protocols. We offer a complete design development solution for medical devices which also includes 2D, 3D and even PCB Designing. Our clients remain part of the entire designing process, working hand-in-hand to get best possible design output.",
    bgImage: "/images/services/product-design.jpg",
    accordion: [
      {
        title: "2D & 3D Designing",
        content:
          "Our team provides comprehensive 2D and 3D computer-aided design and modeling solutions, tailored to meet your specific project requirements and adhering to industry best practices.",
      },
      {
        title: "Design Verification & Validation",
        content:
          "Our team utilizes advanced tools and methodologies to meticulously examine your designs, identifying and addressing any potential issues, errors, or discrepancies.",
      },
      {
        title: "Additive Manufacturing",
        content:
          "We specialize in a range of advanced techniques, including; Fused Deposition Modeling (FDM), Resin Printing, PCB Printing",
      },
      {
        title: "Subtractive Manufacturing",
        content:
          "RMT provides comprehensive subtractive manufacturing services, including CNC machining, laser cutting, milling, casting, and molding, to meet your precise engineering needs.",
      },
    ],
  },
  {
    id: "quality-testing",
    title: "Quality Testing",
    description:
      "Rigorous quality testing is paramount in ensuring the safety and efficacy of biomaterials, medical devices, and software solutions. At Revive Medical Technologies Inc., we are committed to providing comprehensive quality testing services that adhere to the highest industry standards. Our state-of-the-art facilities and experienced team utilize advanced testing methodologies to evaluate the performance, biocompatibility, and reliability of your products, ensuring they meet regulatory requirements and deliver optimal outcomes for patients.",

    bgImage: "/images/services/services2.webp",
    accordion: [
      {
        title: "Quality Plan",
        content:
          "A quality plan usually covers the processes and quality elements which are applicable over the specific case. It further includes internal and external requirements may not be necessary for the specific case but are included to ensure acceptability from external elements like end-user, local market norms, local regulatory bodies, etc. Quality Plan is also dependent upon how well the QMS documentation can support it.",
      },
      {
        title: "Bench Testing",
        content:
          "Testing of products-under development in a simulated environment with aid of specialized equipment, tools and software, opens avenues for evaluating different performance and safety attributes which can be expressed qualitatively and quantitatively. We offer specialized bench testing solutions focused on testing our client’s under-development products.",
      },
      {
        title: "Simulation",
        content:
          "It is the imitation of the operation of a real-world process or system over time. Simulations require the use of models; the model represents the key characteristics or behaviors of the selected system or process, whereas the simulation represents the evolution of the model over time. We provide advanced computation modelling (e.g., Finite Element Analysis) to simulate working conditions to predict behavior of an under-development product.",
      },
      {
        title: "Visual Inspection",
        content:
          "We offer services for Visual Inspection which is a globally employed quality inspection technique. Our team of highly skilled and experienced scientists and engineers’ using high quality visual inspection technology like high-magnification digital microscopes can visually detect the smallest defects or irregularities in a product which may have an impact on the product’s performance or safety.",
      },
      {
        title: "Dimensional Analysis",
        content:
          "Here at Revive Medical Technologies, our team of highly skilled engineers & developers offer services for dimensional analysis of our client’s products using high precision calibrated dimensional inspection equipment and tools.",
      },
      {
        title: "Defect Analysis",
        content:
          "This is defined as the study of properties, characteristics and impact of product-based defects. We provide services for Defect Analysis where our experienced team will conduct in-depth assessment of product defects, its origin and its impact over the product’s performance and safety.",
      },
      {
        title: "Packaging Integrity Testing",
        content:
          "We at Revive Medical Technologies offer services for conducting packing integrity testing for our client’s product where we identify packaging problems which may have an impact on the product and its sterility. We offer to conduct microbial challenge testing, dye penetration testing and seal integrity testing for evaluating packaging integrity of our client’s products.",
      },
      {
        title:
          "Physicochemical testing of Biomaterials & Drug Delivery Systems",
        content:
          "Physicochemical testing of biomaterials and drug delivery systems involves a series of analytical and experimental techniques to assess and characterize the physical and chemical properties of these materials. These tests are crucial for ensuring the quality, safety, and effectiveness of biomaterials and drug delivery systems.",
      },
    ],
  },

  {
    id: "regulatory-affairs",
    title: "Regulatory Affairs & Quality Management",
    description:
      "In today’s rapidly evolving healthcare landscape, innovation is key, and embedded system development plays a pivotal role in the creation of cutting-edge medical devices. At Revive Medical Technologies, we are at the forefront of this technological revolution, harnessing the power of embedded systems to develop innovative, life-saving solutions that make a real difference in the healthcare industry",

    bgImage: "/images/services/software-development.jpg",
    accordion: [
      {
        title: "Technical File Preparation",
        content:
          "At Revive Medical Technologies, we specialize in preparing comprehensive technical files for CE and FDA approval, catering to medical devices across all risk classifications. Our approach integrates seamlessly with ISO 13485 quality management systems, streamlining the approval process & enhancing product quality.",
      },
      {
        title: "Clinical Evaluation Report (CER)",
        content:
          "Our team of clinical experts provide comprehensive data analysis, evaluating clinical evidence to demonstrate device safety and performance. Our transparent and well-documented methodology facilitates easy validation by regulatory bodies. We continuously monitor and update the CER as new data emerges.",
      },
      {
        title: "Biological Evaluation Reports (BER)",
        content:
          "Our team of seasoned professionals, including biocompatibility experts and regulatory specialists, conducts a rigorous evaluation of the biological safety of the medical device. This involves a thorough examination of materials, potential risks, and their impact on human health",
      },
      {
        title: "Implementation of Quality Management System",
        content:
          "Our expert team provides holistic guidance through the entire implementation process, tailoring it to your specific needs for seamless integration and enhanced efficiency. We create detailed documentation and process maps, crucial for audits and transparency. ",
      },
    ],
  },
  {
    id: "manufacturing-consultancy",
    title: "Manufacturing Consultancy",
    description:
      "We offer advanced solutions for establishing stent and PTCA balloon catheter production and testing lines, Our services include comprehensive installation and training, technical support for plant commissioning, and regulatory compliance assistance for both products and facilities. Additionally, we manufacture selected machines in-house, enhancing automation and ensuring superior results.",

    bgImage: "/images/services/product-design1.webp",
    accordion: [
      {
        title: "Installation & Training",
        content:
          "We ensure that your stent and PTCA balloon catheter production and testing lines are set up efficiently and correctly. Our expert team conducts thorough on-site training, equipping your staff with the knowledge and skills needed to operate and maintain the advanced automated systems. This hands-on training ensures smooth operations and empowers your team to maximize the capabilities of the new technology.",
      },
      {
        title: "Technical support in commissioning and Validation",
        content:
          "Our technical support services ensure seamless commissioning and operation of your production line, encompassing Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ). We provide expert guidance and support throughout the entire process to verify the functioning of all systems and equipment.",
      },
      {
        title: "HR Training",
        content:
          "Our HR training services are designed to equip your human resources team with the skills and knowledge needed to support advanced manufacturing and production operations. Trained in Germany, our expert trainers provide comprehensive programs that cover industry-specific best practices, compliance requirements, and effective personnel management strategies.",
      },
    ],
  },

  // {
  //   id: "software-development",
  //   title: "Software Development",
  //   description:
  //     "Innovative software solutions are the driving force behind the enhancement of patient care, process optimization, and industry transformation in the ever-evolving healthcare landscape. At Revive Medical Technologies Inc., we are pioneers in developing cutting-edge healthcare software solutions that span critical areas.",

  //   bgImage: "/images/services/services1.jpg",
  //   accordion: [
  //     {
  //       title: "AI/ML",
  //       content:
  //         "We leverage the power of Artificial Intelligence and Machine Learning to create intelligent medical solutions. Our team can design and develop custom algorithms for tasks like medical image analysis, diagnostics, and personalized treatment planning. We develop both, generative AI and traditional AI based solutions, followed by statistical analysis and data science.",
  //     },
  //     {
  //       title: "DevOps",
  //       content:
  //         "Our experts ensure continuous integration, delivery, and optimized deployment of web applications, enabling rapid development and updates. By leveraging automated testing, monitoring, and efficient collaboration tools, we ensure high-quality code and seamless integration across development and operations. Our approach enhances scalability, reduces time-to-market while maintaining reliability",
  //     },
  //     {
  //       title: "Customized Application Development",
  //       content:
  //         "Our skilled developers bring medical software vision to life. We specialize in building secure, scalable, and user-friendly applications that meet the specific needs of the healthcare industry whether it be Web Application, Desktop Application or Mobile Application.",
  //     },
  //     {
  //       title: "SQA",
  //       content:
  //         "We guarantee the quality and reliability of your medical software through comprehensive Software Quality Assurance (SQA) services. Our SQA team meticulously tests applications to ensure they function flawlessly and meet regulatory standards. We specialize in STLC of both, Software-as-Medical-Device (SaMD) and Software-in-Medical-Device (SiMD). From static testing to system-level testing and cybersecurity testing, we offer end-to-end SQA.",
  //     },
  //   ],
  // },
];
