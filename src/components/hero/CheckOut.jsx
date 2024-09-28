import React from "react";

const CheckOut = () => {
  return (
    <div className="w-64 h-80 perspective-1000">
      <div className="relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] group hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 bg-white flex items-center justify-center backface-hidden border-2 border-gray-300 rounded-lg shadow-md group-hover:rotateY-0">
          <p className="text-lg font-semibold">CheckOut</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden">
          <img
            src={img}
            alt="Back Side"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
