import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import img2 from "../../assets/designs/2.png";
import img31 from "../../assets/designs/31.png";
import img32 from "../../assets/designs/32.png";
import img41 from "../../assets/designs/41.png";
import img42 from "../../assets/designs/42.png";
import img52 from "../../assets/designs/52.png";
import img51 from "../../assets/designs/51.png";
import img61 from "../../assets/designs/61.png";
import img71 from "../../assets/designs/71.png";
import img81 from "../../assets/designs/81.png";
import img82 from "../../assets/designs/82.png";
import img83 from "../../assets/designs/83.png";
import img92 from "../../assets/designs/92.png";
import img91 from "../../assets/designs/91.png";
import img101 from "../../assets/designs/101.png";
import img102 from "../../assets/designs/102.png";
import img111 from "../../assets/designs/111.png";
import img112 from "../../assets/designs/112.png";
import img113 from "../../assets/designs/113.png";
import img121 from "../../assets/designs/121.png";
import img122 from "../../assets/designs/122.png";
import img131 from "../../assets/designs/131.png";
import img132 from "../../assets/designs/132.png";
import img133 from "../../assets/designs/133.png";
import img134 from "../../assets/designs/134.png";
import img141 from "../../assets/designs/141.png";
import img142 from "../../assets/designs/142.png";
import img143 from "../../assets/designs/143.png";
import img144 from "../../assets/designs/144.png";
import img151 from "../../assets/designs/151.png";
import img161 from "../../assets/designs/161.png";
import img171 from "../../assets/designs/171.png";
import img172 from "../../assets/designs/172.png";
import img173 from "../../assets/designs/173.png";
import img174 from "../../assets/designs/174.png";
import { Carousel } from "@material-tailwind/react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Designs = () => {
  const [dropDown, setDropDown] = useState("false");
  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  let arr = [
    {
      name: "LIVING ROOM AESTHETIC SIMPLE DESIGN",
      img: [img2],
    },
    {
      name: "BEDROOM DESIGN AND EXECUTION",
      img: [img31, img32],
    },
    {
      name: "GYPSUM FALSE CIELING WITH COB LIGHT AND STRIP LIGHTS",
      img: [img41, img42],
    },
    {
      name: "POP FALSE CIELING DESIGNS",
      img: [img52, img51],
    },
    {
      name: "FALSE CIELING WITH COB LIGHTS AND STRIPS",
      img: [img61],
    },
    {
      name: "LIVING ROOM DESIGN WITH LOUVERS,LOFTS,AND LED PANEL",
      img: [img71],
    },
    {
      name: "ROOM DESIGN WITH MINIMAL LIGHTING",
      img: [img81, img82, img83],
    },
    {
      name: "WALL DECORATION DESIGNS",
      img: [img91, img92],
    },
    {
      name: "L-SHAPED MODULAR KITCHEN DESIGN AND EXECUTION",
      img: [img101, img102],
    },
    {
      name: "L-SHAPED MODULAR KITCHENn DESIGN AND EXECUTION WITH LIGHTS",
      img: [img111, img112, img113],
    },
    {
      name: "WARDROBE WITH PROPER LIGHTS",
      img: [img121, img122],
    },
    {
      name: "MAIN GATE ENTRANCE DESIGNS AND EXECUTION",
      img: [img131, img132, img133, img134],
    },
    {
      name: "POOJA ROOM WITH ALL LIGHTS AND CNC CUT DESIGN",
      img: [img141, img142, img143, img144],
    },
    {
      name: "STAIRCASE DESIGN WITH GLASS RAILING AND WALLPAPER",
      img: [img151],
    },
    {
      name: "TERRACE DESIGNS WITH ALL PLANTS AND LIGHTS FOR NIGHT",
      img: [img161],
    },
    {
      name: "Some Office interior designs",
      img: [img171, img172, img173, img174],
    },
  ];

  // Calculate the total number of pages
  const totalPages = Math.ceil(arr.length / itemsPerPage);

  // Get the items for the current page
  const currentItems = arr.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage < totalPages ? prevPage + 1 : prevPage;
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
      return newPage;
    });
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage > 1 ? prevPage - 1 : prevPage;
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
      return newPage;
    });
  };

  return (
    <>
      <Navbar />
      <div className="border-2 m-[4rem] rounded-md bg-gray-100">
        <div className="text-center my-8">
          <p className="text-[3rem] md:text-[4rem] lg:text-[6rem] font-serif text-orange-800 animate__animated animate__fadeInLeft">
            Interior Designs
          </p>
          <p className="text-gray-700 font-serif text-[1rem] md:text-[1.8rem] lg:text-[2.0rem]">
            Get inspired to build your space.
          </p>
          <div className="relative inline-block mt-[0.5rem]">
            {/* Button */}
            <button
              onClick={toggleDropdown}
              className="border-2 bg-orange-800 text-white font-serif rounded-lg text-[1.7rem] p-[0.3rem] flex items-center justify-between"
            >
              Designs
              <i className="fa-solid fa-caret-down fa-lg text-white p-[0.2rem]"></i>
            </button>

            {/* Dropdown options */}
            {dropDown && (
              <ul className="absolute bg-white text-gray-800 border-2 border-orange-800 rounded-lg mt-[0.5rem] shadow-lg z-10">
                <Link to="design/dining">
                  <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">
                    Dining
                  </li>
                </Link>
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">
                  Living Room
                </li>
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">
                  Ceiling
                </li>
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">
                  Bedroom
                </li>
                <li className="px-4 py-2 hover:bg-orange-200 cursor-pointer">
                  Kitchen
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center px-4 py-4">
          {currentItems.map((project, index) => (
            <div
              key={index}
              className="my-8 w-full max-w-[800px] bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <p className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 p-4">
                {project.name}
              </p>
              <Carousel
                activeIndex={0}
                className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]"
                navigation={false}
              >
                {project.img.map((image, idx) => (
                  <div className="relative h-full w-full" key={idx}>
                    <img
                      src={image}
                      alt={`image ${idx + 1}`}
                      className="h-full w-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          ))}

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-2 rounded-full text-white ${
                currentPage === 1
                  ? "bg-gray-400"
                  : "bg-orange-600 hover:bg-orange-700"
              }`}
            >
              <i className="fa-solid fa-arrow-left fa-xl text-white"></i>
            </button>
            <span className="px-4 py-2">{`${currentPage} / ${totalPages}`}</span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 mx-2 rounded-full text-white ${
                currentPage === totalPages
                  ? "bg-gray-400"
                  : "bg-orange-600 hover:bg-orange-700"
              }`}
            >
              <i className="fa-solid fa-arrow-right fa-xl text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Designs;
