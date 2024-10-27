import React from "react";
import { useParams } from "react-router";
import data from "../../data/data";
import Navbar from "../Navbar";
import Footer from "../Footer";

const DesignsCategory = () => {
  const { category } = useParams(); // Get category from URL parameters

  // Filter the data to find the matching category
  const categoryData = data.find((el) => el.name === category);

  return (
    <>
      <Navbar />

      <div className="container mx-auto p-4">
        <h1 className="text-[3rem] font-serif mb-4 text-orange-800 text-center">
          {category.charAt(0).toUpperCase() + category.slice(1)} Designs
        </h1>

        {categoryData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categoryData.img.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${category} design ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No designs found for this category.</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default DesignsCategory;
