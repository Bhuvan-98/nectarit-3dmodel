"use client";
import { Environment, OrbitControls, Html } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { ModelViewer } from '@/container/3dmodel_widget/3dmodel_view'
import { Cube } from '@/components/shapes/cube'
import FileUpload from '@/components/inputs_elements/file_upload';
import { any } from 'three/tsl';



export default function Home() {
  const [fileurl, setFileUrl] = useState<string | null>(null)



  const handleFileChange = (lFileurl: string | null) => {
    setFileUrl(lFileurl)

  }

  return (
    <div className='h-[100vh] w-[100vw]'>
      <FileUpload onchangeAction={handleFileChange} />

      {fileurl && (<Canvas>

        <Environment preset='studio' />
        <OrbitControls />
        <ModelViewer fileUrl={fileurl} />
        <Cube />


      </Canvas>)}

    </div>

  );
}
