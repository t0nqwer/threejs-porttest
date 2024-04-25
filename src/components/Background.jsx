import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useAppState } from "../zustand/AppState";

const Background = ({ color1, color2, color3, type }) => {
  const { currentPath } = useAppState();
  useGSAP(() => {
    if (currentPath === "about") {
      const tl = gsap.timeline();
      const width = window.innerWidth;
      tl.to("#bgdiv", { x: 0, duration: 2, ease: "power2.inOut" });
      gsap.fromTo(
        "#light1",
        {
          opacity: 0.4,
          duration: 10,
          yoyo: true,
          repeat: -1,
        },
        {
          opacity: 0.7,
          duration: 10,
          scale: 1.5,
          yoyo: true,
          repeat: -1,
        }
      );
      gsap.fromTo(
        "#light3",
        {
          opacity: 0.4,
          duration: 10,
          yoyo: true,
          repeat: -1,
        },
        {
          opacity: 0.7,
          duration: 10,
          scale: 1.5,
          delay: 1,
          yoyo: true,
          repeat: -1,
        }
      );
      gsap.fromTo(
        "#light2",
        {
          opacity: 0.8,
          duration: 10,
          yoyo: true,
          repeat: -1,
        },
        {
          opacity: 0.4,
          duration: 10,
          scale: 2,
          delay: 1,
          yoyo: true,
          repeat: -1,
        }
      );
    }
    if (currentPath === "work") {
      const tl = gsap.timeline();
      const width = window.innerWidth;
      tl.to("#bgdiv", { x: -(width * 1), duration: 2, ease: "power2.inOut" });
    }
    if (currentPath === "contact") {
      const tl = gsap.timeline();
      const width = window.innerWidth;
      tl.to("#bgdiv", { x: -(width * 2), duration: 2, ease: "power2.inOut" });
    }
  }, [currentPath]);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden ">
      <div id="bgdiv" className="relative flex w-full h-full bg-neutral-800 ">
        <div id="bgdiv1" className="relative w-full h-full shrink-0 ">
          <div
            id="light1"
            className={` w-[20%] h-[30%] rounded-full ${color1}  top-[10%] left-[10%] absolute`}
          />
          <div
            id="light3"
            className={` w-[10%] h-[12%] rounded-full ${color2} top-[5%] left-[60%] absolute `}
          />
          <div
            id="light2"
            className={` w-[10%] h-[20%] rounded-full ${color3} top-[80%] left-[70%] absolute `}
          ></div>
        </div>
        <div
          id="bgdiv2"
          className="relative w-full h-full overflow-hidden shrink-0 "
        >
          <svg id="svgBackground" scale={0.5} className="scale-75 ">
            <path width={20} fill={"#7D7C7C"} />
          </svg>
        </div>
        <div
          id="bgdiv3"
          className="relative w-full h-full overflow-hidden shrink-0 "
        >
          <svg id="svgBackground" scale={0.5} className="scale-75 ">
            <path width={20} fill={"#fff"} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Background;
