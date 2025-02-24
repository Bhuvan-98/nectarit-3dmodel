import React, { useEffect, useState } from "react";
import { Cube } from "@/components/shapes/cube"
import { ILayer } from "../importListWidget/importList";
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Html } from '@react-three/drei';
import './styles.css'

interface IShapesListProps {
  onSelectChange: (name: string) => void;
}

export interface IShape {
  name: string;
  icon: React.JSX.Element
  displayName: String;
}

export default function ShapeList(props: IShapesListProps) {
  const [shapes, setShapes] = useState<IShape[]>([])

  useEffect(() => {
    initShapes();
  }, [])

  const initShapes = () => {
    let lShapes: IShape[] = []
    lShapes.push({
      name: "cube",
      displayName: "Cube",
      icon: <></>
    })

    setShapes(lShapes)
  }

  const handleOnClick = (name: string) => {
    console.log("Clicked shape", name);
    props.onSelectChange(name);
  }

  return (
    <div className="flex">
      {
        shapes.map((shape, index) => {
          return <span key={index} className="shape-item">
            <h1 className="title">Shapes</h1>
            <span onClick={() => { handleOnClick(shape.name) }}>
              <Canvas style={{ width: '100px', height: '100px' }} >
                <Environment preset='studio' />
                <OrbitControls />

                <Cube scale={5} rotation="off" onClick={() => { }} />
              </Canvas>
              <span>{shape.name}</span>
            </span>
          </span>
        })
      }
    </div>

  );
}
