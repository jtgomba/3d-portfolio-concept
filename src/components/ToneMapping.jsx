import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three'

export default function ToneMapping() {
    const { gl, scene } = useThree(({ gl, scene }) => ({ gl, scene }));
    useEffect(() => {
        gl.toneMapping = THREE.CineonToneMapping;
        gl.toneMappingExposure = 1.75;
        scene.traverse((object) => {
            if (object.material) {
                object.material.needsUpdate = true;
            }
        });
    }, [gl, scene]);
    return <></>;
}
