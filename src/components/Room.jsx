import { useRef, useState, useLayoutEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from "gsap";
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three'
import { useWindowSize } from "@uidotdev/usehooks";


export const Room = () => {
    const { width, height } = useWindowSize();
    const { camera } = useThree()
    const { scene } = useGLTF("/models/Finale Version 16.glb")
    const roomRef = useRef();
    const firstMoveTimeline = useRef();
    const secondMoveTimeline = useRef();
    const thirdMoveTimeline = useRef();
    const rectLightRef = useRef();

    function setModel(room) {
        room.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    //console.log(groupchild.material);
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }

            // console.log(child);

            if (child.name === "Aquarium") {
                // console.log(child);
                child.children[0].material = new THREE.MeshPhysicalMaterial();
                child.children[0].material.roughness = 0;
                child.children[0].material.color.set(0x549dd2);
                child.children[0].material.ior = 3;
                child.children[0].material.transmission = 1;
                child.children[0].material.opacity = 1;
                child.children[0].material.depthWrite = false;
                child.children[0].material.depthTest = false;
            }

            if (child.name === "Computer") {
                /*  child.children[1].material = new THREE.MeshBasicMaterial({
                     map: this.resources.items.screen,
                 }); */
            }

            if (child.name === "Mini_Floor") {
                child.position.x = -0.289521;
                child.position.z = 8.83572;
            }

            if (
                child.name === "Mailbox" ||
                child.name === "Lamp" ||
                child.name === "FloorFirst" ||
                child.name === "FloorSecond" ||
                child.name === "FloorThird" ||
                child.name === "Dirt" ||
                child.name === "Flower1" ||
                child.name === "Flower2"
            ) {
                child.scale.set(0, 0, 0);
            }

            //child.scale.set(0, 0, 0);
            if (child.name === "Cube") {
                // child.scale.set(1, 1, 1);
                child.position.set(0, -1, 0);
                child.rotation.y = Math.PI / 4;
            }

            //this.roomChildren[child.name.toLowerCase()] = child;
        });

        //this.roomChildren["rectLight"] = rectLight;

        roomRef.current.scale.set(0.11, 0.11, 0.11);
    }

    useLayoutEffect(() => {
        let mm = gsap.matchMedia();

        setModel(roomRef.current)

        // desktop setup code here...
        mm.add("(min-width: 969px)", () => {
            camera.position.set(0, 6.5, 10);
            //this.rectLight.width = 0.5;
            //this.rectLight.height = 0.7;
            roomRef.current.scale.set(0.11, 0.11, 0.11);
            roomRef.current.position.set(0, 0, 0);

            // First section -----------------------------------------
            firstMoveTimeline.current = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".first-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                    markers: true,
                    invalidateOnRefresh: true,
                },
            });
            firstMoveTimeline.current.fromTo(
                roomRef.current.position,
                { x: 0, y: 0, z: 0 },
                {
                    x: () => {
                        return width * 0.0014;
                    },
                }
            );

            // Second section -----------------------------------------
            secondMoveTimeline.current = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".second-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            })
                .to(
                    roomRef.current.position,
                    {
                        x: () => {
                            return 1;
                        },
                        z: () => {
                            return height * 0.0032;
                        },
                    },
                    "same"
                )
                .to(
                    roomRef.current.scale,
                    {
                        x: 0.4,
                        y: 0.4,
                        z: 0.4,
                    },
                    "same"
                )
                .to(
                    rectLightRef.current,
                    {
                        width: 0.5 * 4,
                        height: 0.7 * 4,
                    },
                    "same"
                );

            // Third section -----------------------------------------
            thirdMoveTimeline.current = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".third-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            }).to(camera.position, {
                y: 1.5,
                x: -4.1,
            });
        });

        // mobile setup code here...
        mm.add("(max-width: 968px)", () => {
            camera.position.set(0, 6.5, 10);
            //this.rectLight.width = 0.3;
            //this.rectLight.height = 0.4;
            roomRef.current.scale.set(0.07, 0.07, 0.07);
            roomRef.current.position.set(0, 0, 0);

        });

        return () => {
            mm.revert();
        };
    }, [])

    return (
        <group castShadow={true} receiveShadow={true}>
            <rectAreaLight
                color={0xffffff}
                intensity={1}
                width={0.5}
                height={0.7}
                position={[7.68244, 7, 0.5]}
                rotation-x={-Math.PI / 2}
                rotation-z={Math.PI / 4}
                ref={rectLightRef}
            />
            <primitive object={scene} ref={roomRef} castShadow={true} receiveShadow={true} />
        </group>
    )
}
