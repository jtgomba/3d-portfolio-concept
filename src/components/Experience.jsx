import { Room } from "./Room";
import { useWindowSize } from "@uidotdev/usehooks";


export const Experience = () => {
    const { width, height } = useWindowSize();

    return (
        <>
            <directionalLight
                color="#ffffff"
                intensity={3}
                castShadow={true}
                position={[-1.5, 7, 3]}
                shadow-mapSize={[2048, 2048]}
                shadow-normalBias={0.05}>
                <orthographicCamera attach="shadow-camera"
                    args={[
                        (-(width / height) * 5) / 2,
                        ((width / height) * 5) / 2,
                        5 / 2,
                        - 5 / 2,
                        -20,
                        20]} />
            </directionalLight>
            <ambientLight color="#ffffff" intensity={1} />
            <Room />
        </>
    );
};
