import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 p-[2rem] flex flex-row justify-evenly gap-x-[2rem]">
        <img src={logo} />
        <div>
          <p className="text-white text-[1.5rem]">
            At Aura Projects, we turn your spaces into captivating environments
            that blend functionality with aesthetic appeal. Our expert designers
            are dedicated to crafting interiors that reflect your personality
            and lifestyle, creating a unique aura in every room.
          </p>
          <div className="flex flex-row items-center justify-end gap-x-[2rem]">
            <div className="flex items-center justify-end gap-x-[2rem]">
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
              <p className="text-white text-[1.2rem] hover:text-orange-400">
                +919891237296
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
