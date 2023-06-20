/* eslint-disable react/no-unknown-property */
import { ScrollControls } from "@react-three/drei";
// import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <ScrollControls damping={0.25}>
                <Overlay />
                {/* <Office /> */}
            </ScrollControls>
        </>
    );
};
