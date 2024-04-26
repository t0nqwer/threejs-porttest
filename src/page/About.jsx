import Background from "@/components/Background";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  useGSAP(() => {
    gsap.to("#about", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    });
    gsap.to("#para", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
      stagger: 0.2,
    });
    gsap.fromTo(
      "#line",
      { width: 0 },
      { width: "100%", duration: 0.5, delay: 0.5 }
    );
    gsap.fromTo(
      "#profileimg",
      {
        y: -100,

        opacity: 0,
      },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
    );
  }, []);
  return (
    <div className="z-20 flex flex-row-reverse w-full h-screen bg-opacity-50 select-none max-md:overflow-y-scroll max-md:p-10 max-sm:p-5 max-md:block backdrop-blur-3xl bg-neutral-900">
      <div id="rightabout" className="w-1/3 h-3/4 max-md:w-full max-md:mt-24 ">
        <div className="w-full h-full text-white ">
          <img
            id="profileimg"
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full rounded-bl-[40px] object-cover max-md:rounded-[40px] object-center "
          />
        </div>
      </div>
      <div
        id="leftabout"
        className="xl:h-3/4 xl:pl-[240px] xl:pt-[240px] xl:pr-[24px]  w-full md:pl-[120px] md:pt-[120px] lg:pr-[12px]"
      >
        <div className="text-white max-md:mt-5">
          <div className="overflow-hidden w-fit h-fit ">
            <h1
              id="about"
              className="text-5xl text-white opacity-0 -translate-y-14 "
            >
              ABOUT
            </h1>
          </div>
          <hr id="line" className="w-full mt-5" />
          <div className="overflow-hidden w-fit h-fit">
            <p
              id="para"
              className="w-3/4 mt-5 -translate-y-20 opacity-0 max-md:text-center max-md:w-full "
            >
              Greetings, I’m Jirapat Teja, known as Ton. I'm From Thailand, I
              thrive in the realm of front-end web development. Beyond coding,
              my heart beats for music, design, and the broader spectrum of art.
            </p>
          </div>
          <div className="overflow-hidden w-fit h-fit">
            <p
              id="para"
              className="w-3/4 mt-5 -translate-y-24 opacity-0 max-md:text-center max-md:w-full"
            >
              My coding journey commenced with a resolute ambition: to fortify
              my family's business against the hurdles of Covid-19. This impetus
              led me down the path of Full Stack Web Development, immersing
              myself in HTML, CSS, JavaScript, ReactJs, NextJs, TailwindCss,
              G-sap, Three.js, MongoDB, SQL, and Node.js.
            </p>
          </div>
          <div className="overflow-hidden w-fit h-fit">
            <p
              id="para"
              className="w-3/4 mt-5 -translate-y-24 opacity-0 max-md:text-center max-md:w-full"
            >
              Today, I stand at the intersection of passion and expertise, eager
              to deploy my refined skills in a dynamic web development
              landscape. My forte lies in crafting immersive digital
              experiences, and I’m always curious to learn more when it comes to
              new technologies and creative coding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
