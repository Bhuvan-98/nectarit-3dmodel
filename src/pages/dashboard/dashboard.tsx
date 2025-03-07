"use client";
import { Environment, OrbitControls,Text } from '@react-three/drei';
import { Canvas} from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import { ModelViewer } from '@/container/3dmodel_widget/3dmodel_view'
import { Cube } from '@/components/shapes/cube'
import ImportList, { ILayer, IFileObject } from '@/container/importListWidget/importList';
import ShapeList from '@/container/shapes_widget/shapes_list';



export default function Dashboard() {
  const defaultFile = "/Cooler.glb";
  const [layers, setLayers] = useState<ILayer[]>([])
  const [fileurl, setFileUrl] = useState<IFileObject>({
    name: "Cooler.glb",
    url: defaultFile
  })
  const [cubeCount, setCubeCount] = useState(0);

  useEffect(() => {

  }, [])

  const handleShapeOnSelect = (name: string) => {
    if (name == undefined || name == null)
      return;

    const idx = layers.findIndex(x => x.name == name)
    if (idx == -1) {
      setLayers([...layers, { name: name, type: "shape" }])
    }
    else {
      const lLayers = getLayers();
      lLayers.splice(idx, 1);
      setLayers(lLayers);
      setCubeCount(0);
    }
  }

  const handleFileChange = (lFileurl: string | null, fileName: string) => {
    setFileUrl({ name: fileName, url: lFileurl })
    console.log(lFileurl)
  }

  const handleRemoveLayer = (idx: number) => {
    const lLayers = getLayers();
    lLayers.splice(idx, 1);
    setLayers(lLayers);
  }

  const getLayers = (): ILayer[] => {
    const lLayers: ILayer[] = JSON.parse(JSON.stringify(layers));
    return lLayers;
  }

  const handleCubeClicked = () => {
    setCubeCount(cubeCount + 1)
  }

  return (
    <div className='h-[100vh] w-[calc(100%-290px)] left-[311px] absolute'>
      <div className='flex'>
        <ImportList shapes={layers} file={fileurl} onchangeAction={handleFileChange} onRemoveLayer={handleRemoveLayer} />
        <ShapeList onSelectChange={handleShapeOnSelect} />
      </div>
      {fileurl && (<Canvas>

        <Environment preset='studio' />
        <OrbitControls />
        <ModelViewer fileUrl={fileurl.url} />
        {layers.length > 0 && <Cube rotation='off' scale={0.2} position={[1.4, 1.4, -0.2]} onClick={handleCubeClicked} />}
        <Text
          position={[0, 2, 0]}
          fontSize={0.2}
          color="Black"
        >{cubeCount}%</Text>
      </Canvas>)}

    </div>

  );
}
