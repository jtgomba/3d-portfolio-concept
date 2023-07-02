import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useRef } from "react";
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

const RectLight = ({ rectRef }) => {
    //useHelper(rectRef, RectAreaLightHelper, 'red');

    // const { intensity, width, height, color } = useControls({
    //     intensity: { value: 2, min: 0, max: 20 },
    //     width: { value: 0.5, min: 0, max: 10 },
    //     height: { value: 0.7, min: 0, max: 10 },
    //     color: 0xffffff
    // });

    return (
        // <rectAreaLight ref={rectRef} args={[color, intensity, width, height]} position={[7.68244, 7, 0.5]} width={0.5}
        //     height={0.7} rotation-x={-Math.PI / 2} rotation-z={Math.PI / 4} />
        <rectAreaLight ref={rectRef}
            color={0xffffff}
            intensity={2}
            position={[7.68244, 7, 0.5]}
            width={0.5}
            height={0.7}
            rotation-x={-Math.PI / 2}
            rotation-z={Math.PI / 4} />
    )
}

export default RectLight