import React from "react";

const Overlay = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full select-none p-14">
      <div className="flex justify-between text-white ">
        <h1 className="z-50 p-2 text-2xl font-light">Web Developer</h1>
        <div className="z-50 flex items-center justify-center p-2 menu_container">
          <div className=" fourdot__container">
            <div className={` fourdot after:bg-white before:bg-white`}></div>
            <div className={` fourdot after:bg-white before:bg-white`}></div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between text-white ">
        <div className="z-50 flex items-center gap-5 w-fit shrink-0">
          <img src="/JTLOGO-01.svg" alt="logo" className="w-20 h-20 invert" />
          <hr className="bg-white border-r border-white h-14 " />
          <div>
            <h1 className="text-xl font-bold tracking-wider text-white ">
              Jirapat Teja
            </h1>
            <p className="text-white ">Portfolio</p>
          </div>
        </div>
        <div className="z-50 w-fit">
          <p className="hidden text-right md:block w-96">
            Hi, I'm Jirapat Teja, a web developer based in Bangkok, Thailand. I
            develop web applications, intuitive user interfaces, and robust
            backend APIs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
