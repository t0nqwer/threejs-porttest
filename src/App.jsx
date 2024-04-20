import { div } from "three/examples/jsm/nodes/Nodes.js";
import Landingpage from "./page/Landingpage";
import Overlay from "./components/Overlay";

function App() {
  return (
    <div className="relative w-full h-full">
      <Overlay />
      <Landingpage />
    </div>
  );
}

export default App;
