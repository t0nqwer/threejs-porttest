import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Noise = () => {
  useGSAP(() => {
    gsap.to("#noise", {
      x: "-50%",
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "none",
    });
  }, []);
  return (
    <div
      id="noise"
      className="absolute top-0 left-0 z-10  w-[200%] h-full bgover opacity-20 scale-110 pointer-events-none "
    ></div>
  );
};

export default Noise;
