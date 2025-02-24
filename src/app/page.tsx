"use client";
import { Environment, OrbitControls, Html,Text } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { ModelViewer } from '@/container/3dmodel_widget/3dmodel_view'
import { Cube } from '@/components/shapes/cube'
import FileUpload from '@/components/inputs_elements/file_upload';
import { any } from 'three/tsl';
import ImportList, { ILayer,IFileObject } from '@/container/importListWidget/importList';
import ShapeList from '@/container/shapes_widget/shapes_list';
import SideBar from '@/components/layouts/sideBar';
import Dashboard from '@/pages/dashboard/dashboard';



export default function Home() {
  const defaultFile= "/Cooler.glb";  
  const [layers,setLayers] = useState<ILayer[]>([])
  const [fileurl, setFileUrl] = useState<IFileObject>({
    name : "Cooler.glb",
    url : defaultFile
  })  
  const [cubeCount,setCubeCount] = useState(0);

  useEffect(()=>{
    
  },[])

  const handleShapeOnSelect = (name : string)=>{
    if(name == undefined || name == null)
      return;

    var idx = layers.findIndex(x=> x.name == name)
    if(idx == -1){
      setLayers([...layers,{name : name, type : "shape"}])
    }    
    else{
      var lLayers = getLayers();
      lLayers.splice(idx,1);
      setLayers(lLayers);
      setCubeCount(0);
    }  
  }

  const handleFileChange = (lFileurl: string | null,fileName : string) => {
    setFileUrl({name : fileName, url: lFileurl})
    console.log(lFileurl)    
  }

  const handleRemoveLayer = (idx : number)=>{
    let lLayers = getLayers();
    lLayers.splice(idx,1);
    setLayers(lLayers);
  }

  const getLayers = () : ILayer[] =>{
    var lLayers : ILayer[] = JSON.parse(JSON.stringify(layers));
    return lLayers;
  }

  const handleCubeClicked = ()=>{
    setCubeCount(cubeCount+1)
  }

  return (
    <div className='h-[100vh] w-[100vw]'>  
      <SideBar/>    
      <Dashboard/>
    </div>

  );
}
