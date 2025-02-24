import React from 'react';
import { useGLTF } from '@react-three/drei';

export function ModelViewer({ fileUrl }: { fileUrl: string | null }) {
  const { scene } = useGLTF(fileUrl || '/Cooler.glb'); // Provide a fallback URL

  if (!fileUrl) return <p>No model uploaded</p>;

  return <primitive object={scene} scale={1.5} />;
}

