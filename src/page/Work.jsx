import React, { useState } from "react";
import { workList } from "@/lib/work";
import Background from "@/components/Background";
import { useGSAP } from "@gsap/react";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";

const Work = () => {
  const [work, setWork] = useState(workList[0]);
  const [image, setImage] = useState();

  const mouseOverhandle = (work) => {
    console.log(work.image);
    const id = work.title.split(" ").join("");
    gsap.to(`#${id}`, {
      translateX: 0,
      duration: 0.1,
    });
    setImage(work.image);
  };
  useGSAP(() => {
    gsap.to("#image", {
      opacity: 1,
      duration: 1,
    });
  }, [image]);

  const mouseOutHandle = (work) => {
    let id = work.title.split(" ").join("");
    gsap.to(`#${id}`, {
      translateX: -36,
      duration: 0.1,
    });
    setImage();
  };

  return (
    <>
      <Background color1="#cc0000" type={2} />
      <div className="z-10 flex items-end w-full h-screen py-10 overflow-hidden select-none bg-opacity-80 backdrop-blur-[100px] bg-neutral-900 ">
        <div className="w-full h-3/4">
          <div className="flex items-center justify-center w-full h-full px-28 max-lg:px-10">
            <div className="hidden w-1/2 pr-10 md:block ">
              {image && (
                <img
                  id="image"
                  src={image}
                  alt="work"
                  className="rounded-lg opacity-0 "
                />
              )}
            </div>
            <div className="w-full h-full md:w-1/2">
              <h1 className="text-5xl font-bold text-neutral-100">WORK</h1>
              <hr className="w-full h-[1px] mt-7 bg-white rounded-full" />
              <div className="grid h-full grid-cols-1 gap-4 pb-20 mt-4 overflow-y-auto no-scrollbar ">
                {workList.map((work, index) => (
                  <>
                    <div
                      key={index}
                      className="py-3 rounded-lg cursor-pointer "
                      onMouseOver={() => mouseOverhandle(work)}
                      onMouseLeave={() => mouseOutHandle(work)}
                    >
                      <div
                        id={work.title.split(" ").join("")}
                        className="flex items-center -translate-x-9 "
                      >
                        <FaArrowRight className="mr-3 text-2xl text-white" />
                        <h1 className="text-2xl font-medium text-neutral-100">
                          {work.title}
                        </h1>
                      </div>
                    </div>
                    <hr className="w-full h-[1px]  bg-white rounded-full" />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
