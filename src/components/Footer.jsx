import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 p-[2rem] flex flex-row justify-between items-end gap-x-[2rem]  position-fixed left-0 bottom-0">
        <img className=" w-[10%]" src={logo} />
        <div className="flex flex-row items-center align-bottom justify-center gap-x-[2rem]">
          <a href="https://www.instagram.com/aura_interiors6?igsh=Ynd4MmR4bnFoYm0=">
            <i className="fa-brands fa-instagram fa-2xl text-white hover:text-orange-400"></i>
          </a>
          <a href="https://www.facebook.com/share/o2S1iySYYPg3GxZi/?mibextid=qi2Omg">
            <i className="fa-brands fa-facebook fa-2xl text-white hover:text-orange-400"></i>
          </a>
          <a href="mailto:aurainterior310@gmail.com">
            <i className="fa-solid fa-envelope fa-2xl text-white hover:text-orange-400"></i>
          </a>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center gap-y-[1rem]">
            <div>
              <p className="text-white text-[1.2rem] hover:text-orange-400">
                +919891237296
              </p>
              <p className="text-white text-[1.2rem] hover:text-orange-400">
                +919319068347
              </p>
              <p className="text-white text-center text-[1.2rem] hover:text-orange-400">
                aurainterior310@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1vh]">
        <p className="text-gray-700 font-bold px-[2rem]">@Registered</p>
      </div>
    </>
  );
};

export default Footer;
