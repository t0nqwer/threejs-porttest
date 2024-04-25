import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useState, useRef } from "react";
import Computers from "../components/Landingpage/Computers";
import {
  Float,
  Html,
  MeshReflectorMaterial,
  PresentationControls,
  Sparkles,
} from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();
  const [size, setSize] = useState("");
  const [loadedSize, setLoadedSize] = useState("");
  useEffect(() => {
    if (window.innerWidth < 768) {
      setLoadedSize("isMobile");
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      if (window.innerHeight < 500) {
        setLoadedSize("isLargeDesktop");
      } else {
        setLoadedSize("isTablet");
      }
    } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
      setLoadedSize("isDesktop");
    } else {
      setLoadedSize("isLargeDesktop");
    }
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize("isMobile");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        if (window.innerHeight < 500) {
          setSize("isLargeDesktop");
        } else {
          setSize("isTablet");
        }
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
        setSize("isDesktop");
      } else {
        setSize("isLargeDesktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (size !== loadedSize) {
      const html = document.getElementById("html");
      html.classList.remove("hidden");
      html.classList.add("flex");
    }
  }, [size]);

  return (
    <>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 1,
          far: 20,
          position: [
            0,
            0,
            size === "isLargeDesktop"
              ? 8
              : size === "isDesktop"
              ? 8
              : size === "isTablet"
              ? 12
              : 14,
          ],
        }}
      >
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
        <Html
          center

          // className="items-center justify-center hidden w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md"
        >
          <div
            id={"html"}
            className="items-center justify-center hidden w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md"
          >
            <div className="flex flex-col items-center justify-center ">
              <p className="text-white ">
                Your screen Size change Please Reload the page
              </p>
              <button
                className="p-2 mt-5 bg-white bg-opacity-50 rounded-md hover:bg-opacity-85 "
                onClick={() => window.location.reload()}
              >
                Reload
              </button>
            </div>
          </div>
        </Html>

        <Suspense fallback={null}>
          <color args={["#000"]} attach="background" />
          <Sparkles
            count={300}
            scale={[8, 5, 8]}
            size={0.5}
            speed={1}
            noise={20}
            color={`#35c19f`}
          />
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
                target={[
                  0,
                  0,
                  size === "isLargeDesktop"
                    ? 18
                    : size === "isDesktop"
                    ? 20
                    : size === "isTablet"
                    ? 28
                    : 31,
                ]}
                focalLength={0.5}
                bokehScale={10}
                height={700}
              />
            </EffectComposer>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </>
  );
};

export default Landingpage;
