import React from "react";
import { useProgress } from "@react-three/drei";

import Landingpage from "./Landingpage";
import Overlay from "../components/Overlay";
import Loading from "../components/Loading";

const Home = () => {
  const { progress } = useProgress();

  return (
    <div className="relative w-full h-full">
      {progress < 100 && <Loading progress={progress} />}
      <Overlay />
      <Landingpage />
    </div>
  );
};

export default Home;
