import React from 'react'
import { useGLTF} from '@react-three/drei'


export function ModelViewer({ fileUrl }: { fileUrl: string | null }) {
    if (!fileUrl) return <p>No model uploaded</p>;
  
    const { scene } = useGLTF(fileUrl);
  
    return <primitive object={scene} scale={1.5} />;    
  }
