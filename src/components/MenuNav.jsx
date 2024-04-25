import React from "react";
import { useAppState } from "@/zustand/AppState";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const MenuNav = () => {
  const navigate = useNavigate();
  const { isMenuOpen, setIsMenuOpen } = useAppState();
  const tl = gsap.timeline();
  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(".menudiv", {
        opacity: 1,
        duration: 0.5,
      });
      gsap.fromTo(
        "#menuli",
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0.5,
          duration: 0.1,
          stagger: 0.1,
        }
      );
    }
  }, [isMenuOpen]);

  const exitnavigation = (route) => {
    setIsMenuOpen(false);
    navigate(`/${route}`);
  };

  const liClass =
    "p-2 text-5xl  opacity-0  max-sm:text-3xl  cursor-pointer tracking-widest link hover:tracking-[0.2em] transition-all duration-300 ease-in-out ";
  return (
    <>
      <div className="absolute top-0 left-0 z-20 w-full h-full opacity-0 backdrop-blur-xl menudiv "></div>
      <div className="fixed top-0 left-0 z-30 w-full h-full">
        <div className="flex items-center w-3/5 h-full mx-auto">
          <ul
            id="menu"
            className="flex flex-col justify-center w-full h-full space-y-8 text-white select-none"
          >
            <li
              className="overflow-hidden w-fit h-fit"
              onClick={() => exitnavigation("")}
            >
              <div id="menuli" className={`${liClass} HOME`}>
                <span className="mr-3 text-xl max-sm:text-base">01</span>
                HOME
              </div>
            </li>
            <li
              className="overflow-hidden w-fit h-fit"
              onClick={() => exitnavigation("about")}
            >
              <div id="menuli" className={`${liClass} HOME`}>
                <span className="mr-3 text-xl max-sm:text-base">02</span>
                ABOUT
              </div>
            </li>
            <li
              className="overflow-hidden w-fit h-fit"
              onClick={() => exitnavigation("work")}
            >
              <div id="menuli" className={`${liClass} HOME`}>
                <span className="mr-3 text-xl max-sm:text-base">03</span>
                WORK
              </div>
            </li>
            <li
              className="overflow-hidden w-fit h-fit"
              onClick={() => exitnavigation("contact")}
            >
              <div id="menuli" className={`${liClass} HOME`}>
                <span className="mr-3 text-xl max-sm:text-base">04</span>
                CONTACT
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuNav;
