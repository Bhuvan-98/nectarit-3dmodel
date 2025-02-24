import React, { useEffect, useRef, useState } from 'react'
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

export type IShapeProps = {
    scale?: number;
    position?: [number, number, number];
    rotation: 'on' | 'off',
    onClick: () => void;
};

export function Cube(props: IShapeProps) {

    const meshRef = useRef<Mesh>(null);
    const [hovered, setHover] = useState(false);
    useEffect(() => {
    }, [meshRef])

    useFrame((delta: any) => {
        if (props.rotation == "on" && meshRef.current) {
            meshRef.current.rotation.x += delta;
        }
    });

    return (
        <mesh
            position={props.position || [0, 1.5, 0]}
            ref={meshRef}
            scale={props.scale ?? 1}
            onClick={() => { props.onClick() }}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? '#d75640' : '#104cc8'} />
        </mesh>
    );
}