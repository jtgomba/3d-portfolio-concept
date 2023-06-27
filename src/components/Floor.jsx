import * as THREE from 'three'
import { useRef, useState, useLayoutEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from "gsap";
import { useGLTF } from '@react-three/drei';
import { useWindowSize } from "@uidotdev/usehooks";
import { Circle } from './Circle';

export const Floor = () => {
    return (
        <>
            <mesh
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, -0.3, 0]}
                receiveShadow={true}
            >
                <planeGeometry args={[100, 100]}
                />
                <meshStandardMaterial
                    color={0xffe6a2}
                    side={THREE.BackSide}
                />
            </mesh>
            <Circle mat={0xe5a1aa}
                position={[0, -0.29, 0]}
                scale={[0, 0, 0]}
            />
            <Circle mat={0x8395cd}
                position={[2, -0.28, 0]}
                scale={[0, 0, 0]}
            />
            <Circle mat={0x7ad0ac}
                position={[2, -0.27, 0]}
                scale={[0, 0, 0]}
            />
        </>
    )
}


