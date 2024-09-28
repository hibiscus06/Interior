import React from "react";
import img from "../../assets/bedroom2.jpeg";
import co from "../../assets/co.png";
import { Link } from "react-router-dom";

const Premium = () => {
  return (
    <>
      <p className="text-[3.5rem] text-gray-700 text-center font-serif my-[2rem]">
        Premium services by the best
      </p>

      <div className="flex flex-row justify-evenly items-center m-[3rem]">
        <div>
          <div className="flex flex-col gap-y-5 justify-evenly items-center">
            <div className="bg-orange-700 text-white rounded-lg text-[2.5rem] p-[1rem]">
              <li>Architecture and Planning</li>
              <li>Interior Designing</li>
              <li>Interior Execution</li>
            </div>
            <div className="bg-orange-700 text-white rounded-lg text-[2.5rem] py-[1rem] px-[2rem] w-[33rem]">
              <li>Product Designing</li>
              <li>Furniture Designing</li>
              <li>General Contracting</li>
            </div>
          </div>
        </div>
        <Link to="/projects">
          <div className="w-[25rem] h-[30rem] perspective-1000 cursor-pointer group">
            {/* Card Container CheckOut*/}
            <div className="relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side - Image */}
              <div
                className="absolute inset-0 [transform:rotateY(180deg)] rounded-lg overflow-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={img}
                  alt="Front Side"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Back Side - Text with Background Image */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-gray-700 border-2 rounded-lg shadow-md"
                style={{
                  backfaceVisibility: "hidden",
                  backgroundImage: `url(${co})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.8,
                }}
              >
                {/* Semi-transparent background behind the text */}
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-lg"
                  style={{ zIndex: 1 }}
                ></div>

                {/* Text with z-index to keep it on top */}
                <p className="text-[3rem] text-center font-semibold text-white z-10">
                  Check out our projects!
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Premium;
