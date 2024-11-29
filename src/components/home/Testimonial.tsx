"use client";
import React from "react";
import Slider from "react-slick";
import { testimonialData, Testimonial } from "@/data/testimonialData";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="flex justify-center items-center bg-white p-6 h-52 w-96 shadow-lg">
      <div className="flex-shrink-0 mr-6">
        <Image
          src={testimonial.imageUrl}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full object-cover"
          width={96}
          height={96}
        />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <p className="text-gray-600 text-lg italic mb-4 overflow-hidden">
          <FaQuoteLeft className="inline-block mr-2 text-yellow-500" />
          {testimonial.description}
        </p>
        <div>
          <h3 className="text-xl font-semibold">{testimonial.name}</h3>
          <p className="text-gray-500">{testimonial.designation}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Slide every 3 seconds
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true, // Centers the active slide
    centerPadding: "0", // Ensures cards fit the screen
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-thDarkBlue flex justify-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-semibold text-white text-center mb-8">
          See what our clients have to say about us
        </h2>
        <Slider {...settings} className="flex justify-center">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="flex justify-center">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
