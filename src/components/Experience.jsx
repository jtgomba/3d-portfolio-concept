import { Room } from "./Room";
import {
    OrthographicCamera
} from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePreload } from "../hooks/usePreload";

export const Experience = () => {
    const theme = usePreload((state) => state.theme)
    const ctx = useRef()
    const sunLightRef = useRef()
    const ambientRef = useRef()

    useLayoutEffect(() => {
        ctx.current = gsap.context((self) => {
            if (theme === "dark-theme") {
                gsap.to(sunLightRef.current.color, {
                    r: 0.17254901960784313,
                    g: 0.23137254901960785,
                    b: 0.6862745098039216,
                });
                gsap.to(ambientRef.current.color, {
                    r: 0.17254901960784313,
                    g: 0.23137254901960785,
                    b: 0.6862745098039216,
                });
                gsap.to(sunLightRef.current, {
                    intensity: 0.78,
                });
                gsap.to(ambientRef.current, {
                    intensity: 0.78,
                });
            } else {
                gsap.to(sunLightRef.current.color, {
                    r: 255 / 255,
                    g: 255 / 255,
                    b: 255 / 255,
                });
                gsap.to(ambientRef.current.color, {
                    r: 255 / 255,
                    g: 255 / 255,
                    b: 255 / 255,
                });
                gsap.to(sunLightRef.current, {
                    intensity: 3,
                });
                gsap.to(ambientRef.current, {
                    intensity: 1,
                });
            }

        }); // <- Scope!

        return () => {
            ctx.current.revert()
        };
    }, [theme])

    return (
        <>
            <directionalLight
                color="#ffffff"
                intensity={2}
                castShadow={true}
                position={[-1.5, 7, 3]}
                shadow-mapSize={[2048, 2048]}
                shadow-normalBias={0.05}
                ref={sunLightRef}
            >
                <OrthographicCamera

                    manual
                    far={20}
                    onUpdate={(c) => c.updateProjectionMatrix()}
                >
                </OrthographicCamera>
            </directionalLight>
            <ambientLight color="#ffffff" intensity={1} ref={ambientRef}
            />
            <Room />
        </>
    );
};
