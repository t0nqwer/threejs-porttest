import * as THREE from "three";
import { useMemo, useContext, createContext, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Merged,
  RenderTexture,
  PerspectiveCamera,
  Text,
  Html,
} from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SpinningBox from "./SpinningBox";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/computers_1-transformed.glb");
  return (
    <group {...props} dispose={null} position={[0, -2, 0]}>
      <Screen2Text
        // invert
        frame="Object_212"
        panel="Object_213"
        x={-5}
        y={5}
        text="Web Developer"
        position={[-2.73, 0.63, -0.52]}
        rotation={[0, 1.09, 0]}
      />
      <Screen4Text
        invert
        frame="Object_209"
        panel="Object_210"
        x={-5}
        y={5}
        text="Portfolio"
        position={[-1.43, 2.496, -1.8]}
        rotation={[0, 1.002, 0]}
      />
      <ScreenText
        frame="Object_221"
        panel="Object_222"
        x={-3}
        y={5}
        text="Jirapat teja"
        position={[-3.417, 3.056, 1.303]}
        rotation={[0, 1.222, 0]}
      />
      <Screen5Text
        position={[0.27, 1.529, -2.613]}
        frame="Object_206"
        panel="Object_207"
        x={-2}
        y={1.2}
        text="Jirapat teja"
      />
      <Screen8Text
        invert
        frame="Object_218"
        panel="Object_219"
        x={-4.9}
        y={1}
        text="React.Js Next.Js Node.Js Express.Js MongoDB MySQL TypeScript"
        position={[3.11, 2.145, -0.18]}
        rotation={[0, -0.793, 0]}
        scale={0.81}
        fontSize={0.5}
      />
      <Screen7Text
        invert
        frame="Object_215"
        panel="Object_216"
        x={-4.9}
        y={1}
        text="React.Js Next.Js Node.Js Express.Js MongoDB MySQL TypeScript"
        position={[1.845, 0.377, -1.771]}
        rotation={[0, -Math.PI / 9, 0]}
        scale={0.81}
        fontSize={0.5}
      />
      <Screen3Text
        frame="Object_224"
        panel="Object_225"
        position={[-3.899, 4.287, -2.642]}
        rotation={[0, 0.539, 0]}
        x={-4.9}
        y={1}
        scale={0.81}
        text="React.Js Next.Js Node.Js Express.Js MongoDB MySQL TypeScript"
        fontSize={0.5}
      />
      <Screen6Text
        frame="Object_227"
        panel="Object_228"
        position={[0.955, 4.282, -4.203]}
        rotation={[0.003, -0.647, 0.003]}
      />
      <Screen9Text
        invert
        frame="Object_230"
        panel="Object_231"
        x={-4.9}
        y={1}
        text="React.Js Next.Js Node.Js Express.Js MongoDB MySQL TypeScript"
        position={[4.683, 4.29, -1.558]}
        rotation={[0, -Math.PI / 3, 0]}
        scale={0.81}
        fontSize={0.5}
      />

      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Texture}
          position={[0.165, 0.794, -1.972]}
          rotation={[-0.544, 0.929, -1.119]}
          scale={0.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Texture}
          position={[-2.793, 0.27, 1.816]}
          rotation={[-1.44, 1.219, 1.432]}
          scale={0.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Texture}
          position={[-5.603, 4.615, -0.027]}
          rotation={[-1.955, 0.163, 1.202]}
          scale={0.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Texture}
          position={[2.621, 1.985, -2.473]}
          rotation={[-0.419, -0.704, -1.851]}
          scale={0.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Texture}
          position={[4.598, 3.459, 1.19]}
          rotation={[-1.236, -0.719, 0.48]}
          scale={0.5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Texture}
          position={[0.63, 0, -3]}
          rotation={[0, 0.17, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.Texture}
          position={[-2.36, 0.32, -2.018]}
          rotation={[0, 0.534, -Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.Texture}
          position={[-2.424, 0.938, -2.247]}
          rotation={[0, 0.136, Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.Texture}
          position={[-3.528, 0, 0.586]}
          rotation={[Math.PI, -1.085, Math.PI]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_36.geometry}
          material={materials.Texture}
          position={[-3.528, 1.528, 0.586]}
          rotation={[0, 0.911, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_40.geometry}
          material={materials.Texture}
          position={[3.423, 0, 0.005]}
          rotation={[-Math.PI, 1.127, -Math.PI]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.Texture}
          position={[4.086, 2.183, 2.41]}
          rotation={[0, -1.548, 1.571]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.Texture}
          position={[4.314, 1.565, 2.343]}
          rotation={[0, -1.149, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.Texture}
          position={[-3.79, 0, 1.656]}
          rotation={[Math.PI, -1.393, 0]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_60.geometry}
          material={materials.Texture}
          position={[-3.79, 1.528, 1.656]}
          rotation={[0, 1.218, -Math.PI]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_62.geometry}
          material={materials.Texture}
          position={[-3.693, 0, 2.585]}
          rotation={[0, -1.568, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_64.geometry}
          material={materials.Texture}
          position={[-5.36, 2.183, 0.811]}
          rotation={[0, 0.772, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_68.geometry}
          material={materials.Texture}
          position={[-5.564, 1.565, 0.69]}
          rotation={[0, 1.171, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_72.geometry}
          material={materials.Texture}
          position={[-5.474, 2.794, 0.745]}
          rotation={[Math.PI, -1.155, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_76.geometry}
          material={materials.Texture}
          position={[-5.289, 3.412, 0.894]}
          rotation={[Math.PI, -0.757, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_80.geometry}
          material={materials.Texture}
          position={[-5.283, 0, -2.328]}
          rotation={[0, 0.755, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_84.geometry}
          material={materials.Texture}
          position={[-5.486, 0, -1.385]}
          rotation={[Math.PI, -0.985, Math.PI]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_88.geometry}
          material={materials.Texture}
          position={[-3.012, 0, -3.79]}
          rotation={[0, 0.597, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_92.geometry}
          material={materials.Texture}
          position={[-2.082, 0, -4.324]}
          rotation={[Math.PI, -0.597, Math.PI]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_94.geometry}
          material={materials.Texture}
          position={[-1.016, 0, -4.489]}
          rotation={[0, 0.308, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_98.geometry}
          material={materials.Texture}
          position={[-5.315, 1.833, -1.412]}
          rotation={[0, 1.062, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_100.geometry}
          material={materials.Texture}
          position={[-4.181, 1.833, -3.064]}
          rotation={[-Math.PI, -0.465, -Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_102.geometry}
          material={materials.Texture}
          position={[-1.758, 1.833, -3.605]}
          rotation={[0, -1.165, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_104.geometry}
          material={materials.Texture}
          position={[-0.254, 1.833, -5.542]}
          rotation={[0, 1.553, 1.571]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_108.geometry}
          material={materials.Texture}
          position={[-5.283, 2.143, -2.328]}
          rotation={[Math.PI, -0.755, Math.PI]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_112.geometry}
          material={materials.Texture}
          position={[-5.486, 2.143, -1.385]}
          rotation={[0, 0.985, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_116.geometry}
          material={materials.Texture}
          position={[-3.012, 2.143, -3.79]}
          rotation={[Math.PI, -0.597, Math.PI]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_120.geometry}
          material={materials.Texture}
          position={[-2.082, 2.143, -4.324]}
          rotation={[0, 0.597, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_122.geometry}
          material={materials.Texture}
          position={[-1.016, 2.143, -4.489]}
          rotation={[Math.PI, -0.308, Math.PI]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_126.geometry}
          material={materials.Texture}
          position={[-5.315, 3.976, -1.412]}
          rotation={[0, 1.062, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_128.geometry}
          material={materials.Texture}
          position={[-4.181, 3.976, -3.064]}
          rotation={[-Math.PI, -0.465, -Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_130.geometry}
          material={materials.Texture}
          position={[-1.173, 3.976, -4.449]}
          rotation={[0, 0.168, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_132.geometry}
          material={materials.Texture}
          position={[-0.941, 3.976, -4.664]}
          rotation={[Math.PI, 0.018, -Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_140.geometry}
          material={materials.Texture}
          position={[5.531, 2.183, 0.174]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_144.geometry}
          material={materials.Texture}
          position={[5.736, 1.565, 0.053]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_148.geometry}
          material={materials.Texture}
          position={[5.646, 2.794, 0.107]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_152.geometry}
          material={materials.Texture}
          position={[5.461, 3.412, 0.256]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_156.geometry}
          material={materials.Texture}
          position={[4.856, 0, -2.541]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_160.geometry}
          material={materials.Texture}
          position={[5.059, 0, -1.597]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_164.geometry}
          material={materials.Texture}
          position={[2.585, 0, -4.002]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_168.geometry}
          material={materials.Texture}
          position={[1.655, 0, -4.536]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_170.geometry}
          material={materials.Texture}
          position={[0.59, 0, -4.701]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_172.geometry}
          material={materials.Texture}
          position={[4.888, 1.833, -1.624]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_174.geometry}
          material={materials.Texture}
          position={[3.754, 1.833, -3.277]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_176.geometry}
          material={materials.Texture}
          position={[1.332, 1.833, -3.817]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_180.geometry}
          material={materials.Texture}
          position={[4.856, 2.143, -2.541]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_184.geometry}
          material={materials.Texture}
          position={[5.059, 2.143, -1.597]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_188.geometry}
          material={materials.Texture}
          position={[2.585, 2.143, -4.002]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_192.geometry}
          material={materials.Texture}
          position={[1.655, 2.143, -4.536]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_194.geometry}
          material={materials.Texture}
          position={[0.59, 2.143, -4.701]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_196.geometry}
          material={materials.Texture}
          position={[4.888, 3.976, -1.624]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_198.geometry}
          material={materials.Texture}
          position={[3.754, 3.976, -3.277]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_200.geometry}
          material={materials.Texture}
          position={[0.746, 3.976, -4.662]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Texture}
          position={[-0.186, 0, -2.962]}
          rotation={[0, -0.064, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.Texture}
          position={[-2.288, 1.56, -2.263]}
          rotation={[0, -0.012, -Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.Texture}
          position={[-2.195, 2.188, -1.867]}
          rotation={[0, 0.512, Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.Texture}
          position={[-2.896, 0.3, -1.466]}
          rotation={[Math.PI, -1.347, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_42.geometry}
          material={materials.Texture}
          position={[3.224, 0, -0.804]}
          rotation={[0, -1.324, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_44.geometry}
          material={materials.Texture}
          position={[3.53, 1.834, 0.44]}
          rotation={[-Math.PI, 1.324, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.Texture}
          position={[4.255, 0.943, 2.219]}
          rotation={[0, -1.002, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.Texture}
          position={[3.87, 0.315, 2.35]}
          rotation={[0, -1.526, -1.571]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_66.geometry}
          material={materials.Texture}
          position={[-5.614, 0.943, 0.817]}
          rotation={[0, 1.318, 1.571]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_70.geometry}
          material={materials.Texture}
          position={[-5.257, 0.315, 1.01]}
          rotation={[0, 0.795, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_74.geometry}
          material={materials.Texture}
          position={[-5.39, 4.034, 0.986]}
          rotation={[Math.PI, -0.609, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_78.geometry}
          material={materials.Texture}
          position={[-5.696, 4.662, 0.718]}
          rotation={[Math.PI, -1.133, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_82.geometry}
          material={materials.Texture}
          position={[-5.952, 0, -0.641]}
          rotation={[0, 0.953, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_86.geometry}
          material={materials.Texture}
          position={[-4.476, 0, -2.749]}
          rotation={[Math.PI, -0.568, Math.PI]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_90.geometry}
          material={materials.Texture}
          position={[-3.716, 0, -2.886]}
          rotation={[0, 0.644, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_96.geometry}
          material={materials.Texture}
          position={[-0.084, 0, -5.026]}
          rotation={[Math.PI, -0.039, Math.PI]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_106.geometry}
          material={materials.Texture}
          position={[-4.194, 1.836, -2.768]}
          rotation={[Math.PI, -0.655, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_110.geometry}
          material={materials.Texture}
          position={[-5.952, 2.143, -0.641]}
          rotation={[Math.PI, -0.953, Math.PI]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_114.geometry}
          material={materials.Texture}
          position={[-4.476, 2.143, -2.749]}
          rotation={[0, 0.568, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_118.geometry}
          material={materials.Texture}
          position={[-3.727, 2.143, -3.1]}
          rotation={[Math.PI, -0.644, Math.PI]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_124.geometry}
          material={materials.Texture}
          position={[-0.084, 2.143, -5.026]}
          rotation={[0, 0.039, 0]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_134.geometry}
          material={materials.Texture}
          position={[-4.194, 3.979, -2.768]}
          rotation={[Math.PI, -0.655, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_142.geometry}
          material={materials.Texture}
          position={[5.786, 0.943, 0.18]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_146.geometry}
          material={materials.Texture}
          position={[5.428, 0.315, 0.373]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_150.geometry}
          material={materials.Texture}
          position={[5.562, 4.034, 0.348]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_154.geometry}
          material={materials.Texture}
          position={[5.868, 4.662, 0.081]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_158.geometry}
          material={materials.Texture}
          position={[5.525, 0, -0.854]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_162.geometry}
          material={materials.Texture}
          position={[4.05, 0, -2.962]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_166.geometry}
          material={materials.Texture}
          position={[3.289, 0, -3.098]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_178.geometry}
          material={materials.Texture}
          position={[3.767, 1.836, -2.98]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_182.geometry}
          material={materials.Texture}
          position={[5.525, 2.143, -0.854]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_186.geometry}
          material={materials.Texture}
          position={[4.05, 2.143, -2.962]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_190.geometry}
          material={materials.Texture}
          position={[3.3, 2.143, -3.312]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_202.geometry}
          material={materials.Texture}
          position={[3.767, 3.979, -2.98]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.Texture}
          position={[0.353, 2.352, -3.336]}
          rotation={[-0.255, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.Texture}
          position={[0.183, 2.801, -2.854]}
          rotation={[0.093, 0.146, -0.014]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_38.geometry}
          material={materials.Texture}
          position={[1.895, 0, -1.944]}
          rotation={[0, -0.436, 0]}
          scale={[1.5, 1, 1.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.Texture}
          position={[1.862, 1.61, -1.807]}
          rotation={[0, -Math.PI / 3, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.Texture}
          position={[3.954, 2.491, 1.607]}
          rotation={[0, -Math.PI / 3, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_136.geometry}
          material={materials.Texture}
          position={[-1.095, 4.291, -4.434]}
          rotation={[0, 0.357, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_138.geometry}
          material={materials.Texture}
          position={[-5.246, 4.291, -1.466]}
          rotation={[0, 1.246, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_204.geometry}
          material={materials.Texture}
          position={[3.198, 4.291, -3.092]}
          rotation={[-Math.PI, 0.563, 0]}
          scale={-1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.led}
          position={[-0.408, 1.095, -2.212]}
          scale={0.009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.led}
          position={[0.588, 1.323, -2.222]}
          scale={0.009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials.led}
          position={[1.772, 1.909, -1.165]}
          scale={0.009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003.geometry}
          material={materials.led}
          position={[2.438, 1.096, -0.786]}
          scale={0.009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={materials.led}
          position={[4.868, 3.799, -0.097]}
          scale={0.009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005.geometry}
          material={materials.led}
          position={[1.93, 3.795, -3.69]}
          scale={0.009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006.geometry}
          material={materials.led}
          position={[-2.346, 3.799, -3.479]}
          scale={0.009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007.geometry}
          material={materials.led}
          position={[-4.706, 4.589, -1.812]}
          scale={0.009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008.geometry}
          material={materials.led}
          position={[-3.032, 2.853, 1.195]}
          scale={0.009}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009.geometry}
          material={materials.led}
          position={[-1.206, 1.731, -1.489]}
          scale={0.009}
        />
      </group>
    </group>
  );
}

function Screen({ frame, panel, children, ...props }) {
  const { nodes, materials } = useGLTF("/computers_1-transformed.glb");
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[frame].geometry}
        material={materials.Texture}
      />
      <mesh geometry={nodes[panel].geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}
function ScreenText({ fontSize, text, invert, x = 0, y = 1.2, ...props }) {
  const textRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      textRef.current.position,
      {
        x: 13,
      },
      {
        x: -2.7,
        delay: 1,
        duration: 8,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);
  return (
    <Screen {...props}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 15]}
      />
      <color attach="background" args={[invert ? "black" : "#35c19f"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text
        font="/Inter-Medium.woff"
        position={[0, 5, 0]}
        ref={textRef}
        fontSize={fontSize ? fontSize : 2}
        letterSpacing={0.1}
        color={!invert ? "black" : "#35c19f"}
      >
        Jirapat Teja &nbsp; Jirapat Teja
      </Text>
    </Screen>
  );
}

function Screen2Text({ fontSize, text, invert, x = 0, y = 1.2, ...props }) {
  const textRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      textRef.current.position,
      {
        x: 12,
      },
      {
        x: -7.35,
        delay: 1,
        duration: 8,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);
  return (
    <Screen {...props}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 15]}
      />
      <color attach="background" args={[invert ? "black" : "#35c19f"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text
        font="/Inter-Medium.woff"
        position={[x, 5.2, 0]}
        ref={textRef}
        fontSize={fontSize ? fontSize : 2}
        letterSpacing={0.1}
        color={!invert ? "black" : "#35c19f"}
      >
        Web Developer &nbsp; Web Developer
      </Text>
    </Screen>
  );
}
function Screen3Text({ fontSize, text, invert, x = 0, y = 1.2, ...props }) {
  const textRef = useRef();

  return (
    <Screen {...props}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, -0.2, 10]}
      />
      <color attach="background" args={["black"]} />
      <ambientLight intensity={Math.PI / 2} />
      <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
      <pointLight decay={0} position={[-10, -10, -10]} />
      <SpinningBox position={[0, 0.5, 0]} scale={0.5} />
    </Screen>
  );
}
function Screen4Text({ fontSize, text, invert, x = 0, y = 1.2, ...props }) {
  const textRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      textRef.current.position,
      {
        x: 10,
      },
      {
        x: -2.15,
        delay: 1,
        duration: 6,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);
  return (
    <Screen {...props}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 15]}
      />
      <color attach="background" args={[invert ? "black" : "#35c19f"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text
        font="/Inter-Medium.woff"
        position={[x, 5.2, 0]}
        ref={textRef}
        fontSize={fontSize ? fontSize : 2}
        letterSpacing={0.1}
        color={!invert ? "black" : "#35c19f"}
      >
        Portfolio &nbsp; Portfolio
      </Text>
    </Screen>
  );
}
function Screen5Text({ text, invert, x, y, ...props }) {
  const textRef = useRef();
  const textRef2 = useRef();

  useGSAP(() => {
    gsap.fromTo(
      textRef.current.position,
      {
        x: 0.5,
      },
      {
        x: -6.43,
        delay: 1,
        duration: 5,
        repeat: -1,
        ease: "none",
      }
    );
    gsap.fromTo(
      textRef2.current.position,
      {
        x: -6.43,
      },
      {
        x: -1.09,
        delay: 1,
        duration: 5.5,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);

  return (
    <Screen {...props}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 15]}
      />
      <color attach="background" args={["orange"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text
        font="/Inter-Medium.woff"
        position={[5, 1.6, 0]}
        ref={textRef}
        fontSize={1}
        letterSpacing={0.1}
        color={"black"}
      >
        {text}
        &nbsp;
        {text}
      </Text>
      <Text
        font="/Inter-Medium.woff"
        position={[-3, 0.5, 0]}
        ref={textRef2}
        fontSize={1}
        letterSpacing={0.1}
        color={!invert ? "black" : "#35c19f"}
      >
        {"Portfolio"}
        &nbsp;
        {"Portfolio"}
      </Text>
    </Screen>
  );
}
function Screen6Text({ fontSize, text, invert, x = 0, y = 1.2, ...props }) {
  const textRef = useRef();
  const textRef2 = useRef();

  useGSAP(() => {
    gsap.fromTo(
      textRef.current.position,
      { x: 8.5 },
      {
        x: -1.88,
        delay: 1,
        duration: 8,
        repeat: -1,
        ease: "none",
      }
    );
    gsap.fromTo(
      textRef2.current.position,
      { x: 15 },
      {
        x: -4.39,
        delay: 1,
        duration: 8,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);
  return (
    <Screen {...props}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 15]}
      />
      <color attach="background" args={[invert ? "black" : "#35c19f"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />

      <Text
        font="/Inter-Medium.woff"
        position={[0, 1, 0]}
        ref={textRef}
        fontSize={0.8}
        letterSpacing={0.1}
        color={!invert ? "black" : "#35c19f"}
      >
        Front-End Developer &nbsp; Front-End Developer
      </Text>
      <Text
        font="/Inter-Medium.woff"
        position={[0, -0.1, 0]}
        ref={textRef2}
        fontSize={1.5}
        letterSpacing={0.1}
        color={!invert ? "black" : "#35c19f"}
      >
        Front-End Developer &nbsp; Front-End Developer
      </Text>
    </Screen>
  );
}
function Screen7Text({ fontSize, text, invert, x = 0, y = 1.2, ...props }) {
  const textRef = useRef();
  const textRef2 = useRef();

  useGSAP(() => {
    gsap.fromTo(
      textRef.current.position,
      {
        x: -12,
      },
      {
        x: 10.2,
        delay: 1,
        duration: 18,
        repeat: -1,
        ease: "none",
      }
    );
    gsap.fromTo(
      textRef2.current.position,
      {
        x: 6.6,
      },
      {
        x: -4.3,
        delay: 1,
        duration: 8,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);
  return (
    <Screen {...props}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 15]}
      />
      <color attach="background" args={["black"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text
        font="/Inter-Medium.woff"
        position={[3.11, 1.8, 0]}
        ref={textRef}
        fontSize={fontSize ? fontSize : 2}
        letterSpacing={0.1}
        color={"#35c19f"}
      >
        React.Js Next.Js TypeScript JavaScript HTML CSS tailwindcss three.Js
        gsap React.Js Next.Js
      </Text>
      <Text
        font="/Inter-Medium.woff"
        position={[0, 0.8, 0]}
        ref={textRef2}
        fontSize={0.5}
        letterSpacing={0.1}
        color={"#35c19f"}
      >
        Node.Js Express.Js MongoDB MySQL Node.Js Express.Js
      </Text>
    </Screen>
  );
}
function Screen8Text({ fontSize, text, invert, x = 0, y = 1.2, ...props }) {
  const textRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      textRef.current.position,
      {
        x: 19.5,
      },
      {
        x: -26.1,
        delay: 1,
        duration: 18,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);
  return (
    <Screen {...props}>
      <PerspectiveCamera
        makeDefault
        manual
        aspect={1 / 1}
        position={[0, 0, 15]}
      />
      <color attach="background" args={["#35c19f"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text
        font="/Inter-Medium.woff"
        position={[3.11, 1.2, 0]}
        ref={textRef}
        fontSize={1}
        letterSpacing={0.1}
        color={"black"}
      >
        I develop web applications, intuitive user interfaces, and robust
        backend APIs.&nbsp;I develop
      </Text>
    </Screen>
  );
}
function Screen9Text({ frame, panel, children, ...props }) {
  const { nodes, materials } = useGLTF("/computers_1-transformed.glb");
  const textRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      textRef.current.position,
      {
        x: 13,
      },
      {
        x: -2.7,
        delay: 1,
        duration: 8,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[frame].geometry}
        material={materials.Texture}
      />
      <mesh geometry={nodes[panel].geometry} scale={1}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            <PerspectiveCamera
              makeDefault
              manual
              aspect={1 / 1}
              position={[0, 0, 15]}
            />
            <color attach="background" args={["black"]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} />
            <Text
              font="/Inter-Medium.woff"
              ref={textRef}
              position={[0, 1, 0]}
              fontSize={2}
              letterSpacing={0.1}
              color={"#35c19f"}
            >
              Jirapat Teja &nbsp; Jirapat Teja
            </Text>
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  );
}

useGLTF.preload("/computers_1-transformed.glb");
