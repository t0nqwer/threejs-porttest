import { div } from "three/examples/jsm/nodes/Nodes.js";
import Landingpage from "./page/Landingpage";
import Overlay from "./components/Overlay";
import { useProgress } from "@react-three/drei";
import Loading from "./components/Loading";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./page/About";
import Work from "./page/Work";
import Home from "./page/Home";
import { useEffect, useState } from "react";
import CursorPointer from "./components/Cursor";
import { Menu } from "lucide-react";
import MenuNav from "./components/MenuNav";
import { useAppState } from "./zustand/AppState";
import Contact from "./page/Contact";
import Background from "./components/Background";
import Noise from "./components/Noise";

function App() {
  const { progress } = useProgress();
  const { isMenuOpen, setIsMenuOpen, currentPath } = useAppState();
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // const [size, setSize] = useState(32);
  // useEffect(() => {
  //   const handleMouseMovement = (e) => {
  //     setX(e.clientX);
  //     setY(e.clientY);
  //   };
  //   document.addEventListener("mousemove", handleMouseMovement);
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMovement);
  //   };
  // }, [x, y]);

  return (
    <BrowserRouter>
      <div className="relative w-full h-full overflow-hidden">
        {progress === 100 && <Overlay />}
        {isMenuOpen && <MenuNav />}
        <Noise />
        {currentPath !== "" && (
          <Background
            color1="bg-default"
            color2="bg-default"
            color3="bg-orange-500"
            type={1}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
