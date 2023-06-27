import { Room } from "./Room";
import { Floor } from "./Floor";

//if I were to use scroll controls to work out the amount of pages I could do document.scrollHeight(or get a reference to the page and use that) / window.innerHeight
export const Experience = () => {
    return (
        <>
            <directionalLight
                color="#ffffff"
                intensity={3}
                castShadow={true}
                shadow-mapSize={[2048, 2048]}
                shadow-normalBias={0.05}
                shadow-camera-far={20}
                position={[-1.5, 7, 3]}
            >
            </directionalLight>
            <ambientLight color="#ffffff" intensity={1} />
            <Room />
            <Floor />
        </>
    );
};
