import { ThreeDElement } from "./ThreeDElement";
import { Overlay } from "./Overlay";

//if I were to use scroll controls to work out the amount of pages I could do document.scrollHeight(or get a reference to the page and use that) / window.innerHeight
export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <Overlay />
            <ThreeDElement />
        </>
    );
};
