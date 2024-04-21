import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
import * as THREE from "three";

export default function SpinningBox({ scale, ...props }) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useCursor(hovered);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame(
  //   (state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta)
  // );
  const video = document.createElement("video");
  video.src = "/gameedit.mp4";
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.width = 1290;
  video.height = 1040;
  video.className = "z-50 w-full h-full";
  video.play();
  const videotexture = new THREE.VideoTexture(video);
  videotexture.minFilter = THREE.LinearFilter;
  videotexture.magFilter = THREE.LinearFilter;
  const videoMaterial = new THREE.MeshBasicMaterial({
    map: videotexture,
    side: THREE.FrontSide,
  });
  videoMaterial.needsUpdate = true;
  return (
    <mesh {...props} ref={ref} scale={0.04} material={videoMaterial}>
      <planeGeometry args={[50, 50]} />
    </mesh>
  );
}
