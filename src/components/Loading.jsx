import { Html, useProgress } from "@react-three/drei";
import { Progress } from "./ui/progress";

const Loading = ({ progress }) => {
  return (
    <div className=" absolute z-[1000] flex justify-center items-center  w-screen h-screen   bg-black text-white">
      <Progress value={progress} className={"h-1  w-44"} />
    </div>
  );
};

export default Loading;
