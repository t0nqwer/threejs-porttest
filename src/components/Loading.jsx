import { Html, useProgress } from "@react-three/drei";

const Loading = () => {
  return (
    <Html center>
      <div className=" absolute z-[1000]  w-screen h-screen   bg-white text-white">
        Loading ...
      </div>
    </Html>
  );
};

export default Loading;
