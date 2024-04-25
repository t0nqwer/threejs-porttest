import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

import Landingpage from "./Landingpage";
import Overlay from "../components/Overlay";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
        setIsLargeDesktop(false);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        if (window.innerHeight < 500) {
          setIsMobile(false);
          setIsTablet(false);
          setIsDesktop(false);
          setIsLargeDesktop(true);
        } else {
          setIsMobile(false);
          setIsTablet(true);
          setIsDesktop(false);
          setIsLargeDesktop(false);
        }
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
        setIsLargeDesktop(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(false);
        setIsLargeDesktop(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { progress } = useProgress();
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full">
      {progress < 100 && <Loading progress={progress} />}
      {/* <Canvas
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 1,
          far: 20,
          position: [
            0,
            0,
            isLargeDesktop ? 8 : isDesktop ? 10 : isTablet ? 12 : 14,
          ],
        }}
      > */}
      <Landingpage />
      {/* </Canvas> */}
    </div>
  );
};

export default Home;
