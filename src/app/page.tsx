"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

const ModelViewer: React.FC = () => {
  const { scene } = useGLTF("/Cooler.gltf"); // Load GLTF model
  const [labelValue, setLabelValue] = useState<number>(0);
  const cubeRef = useRef<Mesh | null>(null);

  // Cube rotation animation
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.02;
    }
  });

  return (
    <Canvas className="w-full h-screen bg-gradient-to-b from-gray-800 to-black">
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 2]} intensity={1.2} />
      
      {/* GLTF Model */}
      <primitive object={scene} scale={1.8} position={[0, -1, 0]} />

      {/* Floating Label */}
      <Text
        position={[0, 2, 0]}
        fontSize={0.5}
        color="yellow"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="black"
      >
        {labelValue}%
      </Text>

      {/* Interactive Rotating Cube */}
      <mesh
        ref={cubeRef}
        position={[0, 2.5, 0]}
        onClick={() => setLabelValue((prev) => prev + 10)}
        scale={[1.2, 1.2, 1.2]}
        castShadow
      >
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="orange" roughness={0.4} metalness={0.7} />
      </mesh>
      
      <OrbitControls enableZoom={true} enablePan={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-center">
      <h1 className="text-yellow-400 text-3xl font-bold mb-4 animate-pulse">Interactive 3D Model Viewer</h1>
      <p className="text-gray-300 text-lg mb-4">Click the cube to increase the value!</p>
      <ModelViewer />
    </div>
  );
};

export default Home;
