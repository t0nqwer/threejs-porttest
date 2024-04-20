import { Canvas } from "@react-three/fiber";
import React from "react";
import Computers from "../components/Landingpage/Computers";
import {
  Environment,
  Float,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";

const Landingpage = () => {
  return (
    <>
      <Canvas
        className="w-full h-full "
        camera={{
          fov: 45,
          near: 1,
          far: 20,
          position: [0, 0, 8],
        }}
      >
        {/* <Environment preset="warehouse" /> */}
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          decay={0}
          position={[10, 20, 10]}
          angle={0.15}
          penumbra={1}
          intensity={0.7}
          castShadow
          shadow-mapSize={1024}
        />
        {/* <OrbitControls /> */}
        <color args={["#000"]} attach="background" />
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[0, 0]}
          azimuth={[-0.5, 0.5]}
          config={{ mass: 1, tension: 400 }}
          snap={{ mass: 2, tension: 400 }}
        >
          <Float rotationIntensity={0.3}>
            <group position={[-0.3, 0, 0]}>
              <Computers />
              <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1.965, 0]}
              >
                <planeGeometry args={[50, 50]} />
                <MeshReflectorMaterial
                  blur={[300, 30]}
                  resolution={2048}
                  mixBlur={1}
                  mixStrength={300}
                  roughness={1}
                  depthScale={1.2}
                  minDepthThreshold={0.4}
                  maxDepthThreshold={1.4}
                  color="#202020"
                  metalness={0.8}
                />
              </mesh>
            </group>
          </Float>
          <EffectComposer>
            <Bloom
              luminanceThreshold={0}
              mipmapBlur
              luminanceSmoothing={0.0}
              intensity={3}
            />
            <DepthOfField
              target={[0, 0, 18]}
              focalLength={0.5}
              bokehScale={10}
              height={700}
            />
          </EffectComposer>
        </PresentationControls>
      </Canvas>
    </>
  );
};

export default Landingpage;
