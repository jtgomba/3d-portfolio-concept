import { Room } from "./Room";
import {
    OrthographicCamera
} from "@react-three/drei";

export const Experience = () => {

    return (
        <>
            <directionalLight
                color="#ffffff"
                intensity={3}
                castShadow={true}
                position={[-1.5, 7, 3]}
                shadow-mapSize={[2048, 2048]}
                shadow-normalBias={0.05}>
                {/*  <orthographicCamera attach="shadow-camera"
                    args={[
                        (-(width / height) * 5) / 2,
                        ((width / height) * 5) / 2,
                        5 / 2,
                        - 5 / 2,
                        -20,
                        20]} /> */}
                <OrthographicCamera

                    manual
                    far={20}
                    onUpdate={(c) => c.updateProjectionMatrix()}
                >
                </OrthographicCamera>
            </directionalLight>
            <ambientLight color="#ffffff" intensity={1} />
            <Room />
        </>
    );
};
