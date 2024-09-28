import React, { useEffect } from "react";
import img from "../../assets/people.png";
import "animate.css";

const Welcome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly items-center mx-[5rem] my-[2rem] mb-[4rem] md:mx-[5rem] ">
        {/* image */}
        <div className="flex justify-start">
          <img src={img} className="rounded-lg size-[80%]" />
        </div>
        {/* message */}
        <div className="w-3/4 relative z-10">
          <p className="text-[3.6rem] -z-0 text-gray-800 font-serif animate__animated animate__slideInDown xl:text-[3rem]">
            Welcome to Your Dream Space
          </p>
          <p className="text-[1.5rem] font-serif text-orange-800 text-center">
            Transforming visions into beautifully crafted realities.
          </p>

          <p className="text-[1.2rem] font-serif text-gray-800">
            We take pleasure in introducing ourselves as Interior company having
            specialization in the execution of large scale Interior of
            commercial complexes, offices, farm houses, residential, banks,
            Hospitals, hotels, guest houses etc. Further we always keep in mind
            that home or office is not only a place to live and work, but it is
            also an expression of status, style &achievement it is therefore, we
            are equipped with professionally qualified team of Masons,
            carpenters, painters &workers having specialization in their
            respective fields. To meet the challenges of modern trend in the
            field of Interior. We are fully equipped with the latest technology.
            Our endeavor always to turn your dream into reality. We always have
            a firm commitment for diverse abilities & functional discharge of
            responsibilities.
          </p>
        </div>
        <div className="overflow-hidden w-[18%] absolute right-0">
          <div className="clipRhombus h-[40rem] w-[40rem]">" " </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
