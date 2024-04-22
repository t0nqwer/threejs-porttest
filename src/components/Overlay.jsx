import React from "react";
import { Link } from "react-router-dom";

const Overlay = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full select-none p-14 max-lg:p-10 max-sm:p-5">
      <div className="flex justify-between text-white ">
        <h1 className="z-10 p-2 text-2xl font-light">Web Developer</h1>
        <div className="z-10 flex items-center justify-center p-2 menu_container">
          <div className=" fourdot__container">
            <div className={` fourdot after:bg-white before:bg-white`}></div>
            <div className={` fourdot after:bg-white before:bg-white`}></div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between text-white max-sm:justify-center ">
        <div className="z-10 flex items-center gap-5 max-lg:gap-3 w-fit shrink-0">
          <img
            src="/JTLOGO-01.svg"
            alt="logo"
            className="w-20 h-20 max-lg:w-16 max-lg:h-16 invert"
          />
          <hr className="bg-white border-r border-white h-14 " />
          <div>
            <h1 className="text-xl font-bold tracking-wider text-white max-lg:text-lg ">
              Jirapat Teja
            </h1>
            <p className="text-white max-lg:text-sm ">Portfolio</p>
          </div>
        </div>
        <div className="z-10 hidden w-fit md:block">
          <div className="flex items-center gap-14">
            <Link to="/about" className="link">
              <h1 className="text-white">About Me</h1>
            </Link>
            <Link to="/work" className=" link">
              <h1 className="text-white">My Work</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
