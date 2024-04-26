import React, { useState } from "react";
import { workList } from "@/lib/work";
import Background from "@/components/Background";
import { useGSAP } from "@gsap/react";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const [work, setWork] = useState(workList[0]);
  const [image, setImage] = useState();
  const navigate = useNavigate();

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
    gsap.fromTo(
      "#mainwork",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
      }
    );
    gsap.fromTo(
      "#workList",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
      }
    );
  }, []);
  useGSAP(() => {
    gsap.to("#image", {
      opacity: 1,
      duration: 1,
    });
  }, [image]);

  const mouseOutHandle = (work) => {
    if (window.innerWidth < 768) return;
    let id = work.title.split(" ").join("");
    gsap.to(`#${id}`, {
      translateX: -36,
      duration: 0.1,
    });
    setImage();
  };
  const ExitPage = (work) => {
    // gsap.to("#mainwork", {
    //   y: -100,
    //   opacity: 0,
    //   stagger: 0.2,
    //   duration: 1,
    // });
    // gsap.to("#image", {
    //   opacity: 0,
    //   duration: 1,
    // });
    // gsap
    //   .to("#workList", {
    //     y: -100,
    //     opacity: 0,
    //     stagger: 0.2,
    //     duration: 1,
    //   })
    //   .then(() => {
    //     navigate(`/work/${work}`);
    //   });
  };

  return (
    <div className="z-30 flex items-end w-full h-screen py-10 overflow-hidden select-none bg-opacity-80 backdrop-blur-[100px] bg-neutral-900 ">
      <div className="w-full h-3/4">
        <div className="flex items-center justify-center w-full h-full lg:flex-row px-28 max-lg:px-10">
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
          <div id="mainwork" className="w-full h-full md:w-1/2">
            <h1 className="text-5xl font-bold text-neutral-100">WORK</h1>
            <hr className="w-full h-[1px] mt-7 bg-white rounded-full" />
            <div className="grid h-full grid-cols-1 gap-1 pb-20 mt-4 overflow-y-auto md:gap-4 no-scrollbar ">
              {workList.map((work, index) => (
                <div className="">
                  <div
                    id="workList"
                    key={index}
                    className="py-2 rounded-lg cursor-pointer md:py-3 "
                    onMouseOver={() => mouseOverhandle(work)}
                    onMouseLeave={() => mouseOutHandle(work)}
                    onClick={() => ExitPage(work.title)}
                  >
                    <div
                      id={work.title.split(" ").join("")}
                      className="flex items-center translate-x-0 md:-translate-x-9 "
                    >
                      <FaArrowRight className="mr-3 text-2xl text-white max-md:hidden" />
                      <div className="flex items-end justify-between w-full ">
                        <div className="font-medium xl:text-2xl lg:text-xl text-neutral-100">
                          <h1> {work.title}</h1>
                          {work.frameWork.map((frame, index) => (
                            <span className="px-1 text-xs ">{frame} </span>
                          ))}
                        </div>
                        <div className="text-right max-w-1/2 text-neutral-400">
                          {work.category}
                        </div>
                      </div>
                    </div>
                    <hr className="w-full h-[1px] mt-2  bg-white rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
