/* eslint-disable react/no-unknown-property */
import { ScrollControls } from "@react-three/drei";
// import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <ScrollControls pages={26} damping={0.25} style={{ overflow: "auto" }}>
                <Overlay />
                {/* <Office /> */}
            </ScrollControls>
        </>
    );
};
