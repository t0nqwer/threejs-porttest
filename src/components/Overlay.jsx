import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppState } from "@/zustand/AppState";
import { useLocation } from "react-router-dom";

const Overlay = () => {
  let location = useLocation();
  console.log(location.pathname);

  const { isMenuOpen, setIsMenuOpen } = useAppState();
  const tl = gsap.timeline();

  const navigate = useNavigate();
  useGSAP(() => {
    const path = location.pathname.slice(1);
    if (isMenuOpen && path === "") {
      gsap.to("#webdiv", {
        y: -10,
        display: "hidden",
        opacity: 0,
        duration: 0.5,
      });
      gsap.to("#Logodiv", {
        y: -10,
        opacity: 0,
        duration: 0.5,
      });
      gsap.to("#aboutdiv", {
        y: -10,
        opacity: 0,
        duration: 0.5,
      });
      gsap.to("#workdiv", {
        y: -10,
        opacity: 0,
        duration: 0.5,
      });
      gsap.to("#logotop", {
        y: 0,
        opacity: 1,
        display: "flex",
        duration: 0.5,
        delay: 0.5,
      });
    }
    if (!isMenuOpen && path === "") {
      gsap.to("#logotop", {
        y: -10,
        opacity: 0,
        display: "hidden",
        duration: 0.5,
      });
      gsap.to("#webdiv", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      });
      gsap.to("#Logodiv", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.7,
      });
      gsap.to("#aboutdiv", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.9,
      });
      gsap.to("#workdiv", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1.1,
      });
    }
    if (path === "about" || path === "work") {
      gsap.to("#webdiv", {
        y: -10,
        display: "hidden",
        opacity: 0,
        duration: 0.5,
      });
      gsap.to("#Logodiv", {
        y: -10,
        opacity: 0,
        duration: 0.5,
      });
      gsap.to("#aboutdiv", {
        y: -10,
        opacity: 0,
        duration: 0.5,
      });
      gsap.to("#workdiv", {
        y: -10,
        opacity: 0,
        duration: 0.5,
      });
      gsap.to("#logotop", {
        y: 0,
        opacity: 1,
        display: "flex",
        duration: 0.5,
        delay: 0.5,
      });
    }
  }, [isMenuOpen, location.pathname]);
  useGSAP(() => {
    gsap.to("#menuicondiv", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.7,
    });
  }, []);
  const exitAnimation = (navigatename) => {
    navigate(`/${navigatename}`);
  };
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full select-none p-14 max-lg:p-10 max-sm:p-5">
      <div className="flex justify-between text-white ">
        <h1
          id="webdiv"
          className="z-40 p-2 text-2xl font-light translate-y-5 opacity-0 topdiv"
        >
          Web Developer
        </h1>
        <div
          id="logotop"
          className="absolute z-40 items-center gap-2 p-2 text-2xl font-light translate-y-5 opacity-0 top-14 left-14 w-fit topdiv"
        >
          <img
            src="/JTLOGO-01.svg"
            alt="logo"
            className="w-12 h-12 max-lg:w-16 max-lg:h-16 invert"
          />

          <div>
            <h1 className="text-sm font-bold tracking-wider text-white ">
              Jirapat Teja
            </h1>
            <p className="text-sm text-white ">Portfolio</p>
          </div>
        </div>
        <div
          id="menuicondiv"
          className="z-40 flex items-center justify-center p-2 translate-y-5 opacity-0 topdiv menu_container"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className=" fourdot__container">
            <div className={` fourdot after:bg-white before:bg-white`}></div>
            <div className={` fourdot after:bg-white before:bg-white`}></div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between text-white max-sm:justify-center ">
        <div
          id="Logodiv"
          className="z-40 flex items-center gap-5 translate-y-5 opacity-0 max-lg:gap-3 w-fit shrink-0"
        >
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
        <div className="z-40 hidden w-fit md:block">
          <div className="flex items-center gap-14">
            <div
              id="aboutdiv"
              to="/about"
              className="translate-y-5 opacity-0 link"
              onClick={() => exitAnimation("about")}
            >
              <h1 className="text-white">About Me</h1>
            </div>
            <div
              id="workdiv"
              to="/work"
              className="translate-y-5 opacity-0 link"
              onClick={() => exitAnimation("work")}
            >
              <h1 className="text-white">My Work</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
