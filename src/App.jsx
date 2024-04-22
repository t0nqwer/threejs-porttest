import { div } from "three/examples/jsm/nodes/Nodes.js";
import Landingpage from "./page/Landingpage";
import Overlay from "./components/Overlay";
import { useProgress } from "@react-three/drei";
import Loading from "./components/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Work from "./page/Work";
import Home from "./page/Home";
function App() {
  const { progress } = useProgress();

  return (
    <BrowserRouter>
      <div className="relative w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
