import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "animate.css";
import { Carousel } from "@material-tailwind/react";
import img11 from "../../assets/projects/1/img1.jpeg";
import img12 from "../../assets/projects/1/img2.jpeg";
import img13 from "../../assets/projects/1/img3.jpeg";
import img21 from "../../assets/projects/2/img1.jpeg";
import img22 from "../../assets/projects/2/img2.jpeg";
import img23 from "../../assets/projects/2/img3.jpeg";
import img31 from "../../assets/projects/3/img1.jpeg";
import img32 from "../../assets/projects/3/img2.jpeg";
import img41 from "../../assets/projects/4/img1.jpeg";
import img42 from "../../assets/projects/4/img2.jpeg";
import img51 from "../../assets/projects/5/img1.jpeg";
import img52 from "../../assets/projects/5/img2.jpeg";
import img61 from "../../assets/projects/6/img1.jpeg";
import img62 from "../../assets/projects/6/img2.jpeg";
import img63 from "../../assets/projects/6/img3.jpeg";
import img71 from "../../assets/projects/7/img1.jpeg";
import img72 from "../../assets/projects/7/img2.jpeg";
import img73 from "../../assets/projects/7/img3.jpeg";
import img81 from "../../assets/projects/8/img1.jpeg";
import img82 from "../../assets/projects/8/img2.jpeg";
import img91 from "../../assets/projects/9/img1.jpeg";
import img92 from "../../assets/projects/9/img2.jpeg";
import img101 from "../../assets/projects/10/img1.jpeg";
import img102 from "../../assets/projects/10/img2.jpeg";
import img111 from "../../assets/projects/11/img1.jpeg";
import img112 from "../../assets/projects/11/img2.jpeg";
import img121 from "../../assets/projects/12/img1.jpeg";
import img122 from "../../assets/projects/12/img2.jpeg";
import img131 from "../../assets/projects/13/img1.jpeg";
import img132 from "../../assets/projects/13/img2.jpeg";
import img141 from "../../assets/projects/14/img1.jpeg";
import img142 from "../../assets/projects/14/img2.jpeg";
import img151 from "../../assets/projects/15/img1.png";
import img152 from "../../assets/projects/15/img2.png";
import img153 from "../../assets/projects/15/img3.png";
import Footer from "../Footer";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  let arr = [
    {
      name: "GAUR CITY, GREATER NOIDA",
      img: [img11, img12, img13],
    },
    {
      name: "SUPERTECH ECO VILLAGE III,GREATER NOIDA",
      img: [img21, img22, img23],
    },
    {
      name: "French Appartment Greater Noida Sector 16-B",
      img: [img31, img32],
    },
    {
      name: "French appartment greater Noida Sector 16B",
      img: [img41, img42],
    },
    {
      name: "PARAMOUNT EMOTIONS, NOIDA EXTENSION SECTOR-1,GREATER NOIDA",
      img: [img51, img52],
    },
    {
      name: "PARAMOUNT EMOTIONS, NOIDA EXTENSION SECTOR-1,GREATER NOIDA",
      img: [img61, img62, img63],
    },
    {
      name: "NIRALA GREENSHIRE, GREATER NOIDA SECTOR-2",
      img: [img71, img72, img73],
    },
    {
      name: "NIRALA GREENSHIRE, GREATER NOIDA SECTOR-2",
      img: [img81, img82],
    },
    {
      name: "ARIHANT ARDEN SECTOR-1, GREATER NOIDA",
      img: [img91, img92],
    },
    {
      name: "ARIHANT ARDEN SECTOR-1, GREATER NOIDA",
      img: [img101, img102],
    },
    {
      name: "GAUR SAUNDARYAM ITEDA ,GREATER NOIDA",
      img: [img111, img112],
    },
    {
      name: "GAUR SAUNDARYAM ITEDA ,GREATER NOIDA",
      img: [img121, img122],
    },
    {
      name: "LA RESIDENTIA, Noida Extension Sector-1",
      img: [img131, img132],
    },
    {
      name: "LA RESIDENTIA, Noida Extension Sector-1",
      img: [img141, img142],
    },
    {
      name: "Rohilla and company Vishal chambers, Maharaja Agrasen Marg Noida sector- 18",
      img: [img151, img152, img153],
    },
  ];

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
          <p className="text-[3rem] md:text-[4rem] lg:text-[6rem] font-serif text-orange-800 animate__animated animate__slideInDown">
            Dream spaces
          </p>
          <p className="text-gray-700 font-serif text-[1rem] md:text-[1.5rem] lg:text-[1.8rem]">
            Step into your dream world
          </p>
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
                activeIndex={activeIndex}
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

export default Projects;
