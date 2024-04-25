import Background from "@/components/Background";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Contact = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#contact",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      "#detail",
      { opacity: 0, y: -100 },
      { y: 0, opacity: 1, duration: 1, delay: 1, stagger: 0.2 }
    );
  }, []);
  return (
    <div className="z-10 flex items-end w-full h-screen py-10 overflow-hidden select-none bg-opacity-80 backdrop-blur-[100px] bg-neutral-900 ">
      <div className="w-full h-3/4">
        <div className="flex items-center justify-center w-full h-full px-28 max-lg:px-10">
          <div id="contact" className="w-full h-full xl:w-3/4 lg:w-5/6">
            <h1 className="text-5xl font-bold text-neutral-100">CONTACT</h1>
            <hr className="w-full h-[1px] mt-7 bg-white rounded-full" />
            <div className="flex flex-row gap-5 max-md:flex-col mt-7">
              <div id="detail" className="w-1/2 max-md:w-full ">
                <div className="flex items-end justify-between md:max-w-96">
                  <h2 className="text-2xl max-sm:text-xl text-neutral-100">
                    EMAIL :
                  </h2>
                  <p className="text-xl max-sm:text-base text-neutral-100 ">
                    <a href="mailto:jirapatton@outlook.com">
                      Jirapatton@outlook.com
                    </a>
                  </p>
                </div>
              </div>
              <div id="detail" className="w-1/2 max-md:w-full ">
                <div className="flex items-end justify-between md:max-w-96">
                  <h2 className="text-2xl max-sm:text-xl text-neutral-100">
                    TEL :{" "}
                  </h2>
                  <p className="text-xl text-right max-sm:text-base text-neutral-100 ">
                    <a href="tel:062-252-3924">062-252-3924</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
