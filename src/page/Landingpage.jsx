import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import Computers from "../components/Landingpage/Computers";
import {
  Environment,
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Sparkles,
} from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";
import Loading from "../components/Loading";

const Landingpage = () => {
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
  console.log(isMobile, isTablet, isDesktop, isLargeDesktop);
  return (
    <>
      <Canvas
        className="w-full h-full "
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
                  isLargeDesktop ? 18 : isDesktop ? 25 : isTablet ? 28 : 31,
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
