import { Carousel, Typography, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import img1 from "../../assets/bedroom.jpeg";
import img2 from "../../assets/bedroom1.jpeg";
import office from "../../assets/office/172.png";
import space from "../../assets/designs/161.png";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      img: img1,
      title: "Residential Design",
      description:
        "Transforming homes into stylish, comfortable spaces that reflect your personality",
    },
    {
      img: office,
      title: "Commercial Design",
      description:
        "Designing productive, inviting office and retail environments",
    },
    {
      img: space,
      title: "Space Planning",
      description:
        "Maximizing the potential of any space for optimal flow and function.",
    },
    {
      img: img2,
      title: "Custom Furnishings",
      description:
        "Sourcing and designing furniture and décor that perfectly suit your space.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="bg-gradient-to-r from-orange-700 to-orange-100 pb-[2.5rem] font-serif">
        <div className="text-center py-[2rem]">
          <p className="text-[4rem] text-gray-700 font-serif">What we do?</p>
          <p className="text-[1.7rem] text-gray-800">
            At Aura Projects, we specialize in creating custom interior designs
            that enhance both beauty and functionality.We tailor each project to
            your unique needs, ensuring a space that’s not only beautiful but
            also livable.
          </p>
        </div>
        <div className="relative w-[120vh] h-[75vh] mx-auto overflow-hidden rounded-xl -z-0">
          <Carousel
            activeIndex={activeIndex}
            className="relative h-full"
            navigation={false}
          >
            {slides.map((slide, index) => (
              <div className="relative h-full w-full" key={index}>
                <img
                  src={slide.img}
                  alt={`image ${index + 1}`}
                  className="h-[75vh] w-full object-cover" // Decrease image size
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-gray-900/75">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-4xl md:text-6xl lg:text-6xl"
                    >
                      {slide.title}
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80 text-[2rem]"
                    >
                      {slide.description}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

          {/* Custom Arrows */}
          {/* <IconButton
            variant="text"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-gray-800 hover:bg-gray-900"
            onClick={prevSlide}
          >
            <ChevronLeftIcon className="w-8 h-8" />
          </IconButton>
          <IconButton
            variant="text"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-gray-800 hover:bg-gray-900"
            onClick={nextSlide}
          >
            <ChevronRightIcon className="w-8 h-8" />
          </IconButton> */}
        </div>
      </div>
    </>
  );
};

export default Slider;
