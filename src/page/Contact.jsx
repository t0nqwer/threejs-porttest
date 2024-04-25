import Background from "@/components/Background";
import React from "react";

const Contact = () => {
  return (
    <>
      <Background color1="#cc0000" type={2} />
      <div className="z-10 flex items-end w-full h-screen py-10 overflow-hidden select-none bg-opacity-80 backdrop-blur-[100px] bg-neutral-900 ">
        <div className="w-full h-3/4">
          <div className="flex items-center justify-center w-full h-full px-28 max-lg:px-10">
            <div className="w-full h-full md:w-1/2">
              <h1 className="text-5xl font-bold text-neutral-100">CONTACT</h1>
              <hr className="w-full h-[1px] mt-7 bg-white rounded-full" />
              <div className="grid h-full grid-cols-1 gap-4 pb-20 mt-4 overflow-y-auto no-scrollbar ">
                <div className="flex flex-col items-start justify-center w-full h-24 px-4 rounded-lg text-neutral-100 bg-neutral-800">
                  <h1 className="text-lg font-bold">Email</h1>
                  <p className="text-sm">
                    <a
                      href="mailto:jirapatton@outlook.com"
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      jirapatton@outlook.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
