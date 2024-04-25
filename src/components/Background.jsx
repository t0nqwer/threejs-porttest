import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Background = ({ color1, color2, color3, type }) => {
  useGSAP(() => {
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
    gsap.to("#svgBackground", {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "none",
      pointerEvents: "none",
      transformOrigin: "30% 50%",
    });
  }, []);
  if (type === 1) {
    return (
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden ">
        <div className="relative w-full h-full bg-neutral-900">
          <div
            id="light1"
            className={` w-[20%] h-[30%] rounded-full bg-[${color1}] top-[10%] left-[10%] absolute`}
          />
          <div
            id="light3"
            className={` w-[10%] h-[12%] rounded-full bg-[${color2}] top-[5%] left-[60%] absolute `}
          />
          <div
            id="light2"
            className={` w-[10%] h-[20%] rounded-full bg-[${color3}] top-[80%] left-[70%] absolute `}
          ></div>
        </div>
      </div>
    );
  }
  if (type === 2) {
    return (
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden ">
        <div className="relative w-full h-full bg-neutral-900">
          <svg id="svgBackground" scale={0.5} className="scale-75 ">
            <path width={20} fill={color1} />
          </svg>
        </div>
      </div>
    );
  }
};

export default Background;
