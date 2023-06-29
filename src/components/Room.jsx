import { useRef, useLayoutEffect, Suspense } from 'react'
import { useThree } from '@react-three/fiber'
import gsap from "gsap";
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three'
import { Circle } from './Circle';
import { Model } from './Model';

export const Room = () => {
    const { camera } = useThree()
    const { scene } = useGLTF("/models/Finale Version 16.glb")

    const roomRef = useRef();
    const firstMoveTimeline = useRef();
    const secondMoveTimeline = useRef();
    const thirdMoveTimeline = useRef();
    const rectLightRef = useRef();

    const circle1 = useRef()
    const circle2 = useRef()
    const circle3 = useRef()

    const firstCircle = useRef()
    const secondCircle = useRef()
    const thirdCircle = useRef()

    const first = useRef();
    const second = useRef();
    const third = useRef();
    const fourth = useRef();
    const fifth = useRef();
    const sixth = useRef();
    const seventh = useRef();
    const eighth = useRef();
    const ninth = useRef();

    useLayoutEffect(() => {
        let mm = gsap.matchMedia();

        //setModel(roomRef.current)
        // desktop setup code here...
        mm.add("(min-width: 969px)", () => {
            camera.position.set(0, 6.5, 10);
            camera.updateProjectionMatrix()
            rectLightRef.current.width = 0.5;
            rectLightRef.current.height = 0.7;
            roomRef.current.scale.set(0.11, 0.11, 0.11);
            roomRef.current.position.set(-0.002, 0, 0);

            // First section -----------------------------------------
            firstMoveTimeline.current = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".first-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                    // markers: true,
                    invalidateOnRefresh: true,
                },
            });
            firstMoveTimeline.current.fromTo(
                roomRef.current.position,
                { x: 0, y: 0, z: 0 },
                {
                    x: window.innerWidth * 0.0014
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
                            return window.innerHeight * 0.0032;
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
            })
                .to(camera.position,
                    {
                        y: 1.5,
                        x: -4.1,
                    }
                );
        });

        // mobile setup code here...
        mm.add("(max-width: 968px)", () => {
            camera.position.set(0, 6.5, 10);
            rectLightRef.current.width = 0.3;
            rectLightRef.current.height = 0.4;
            roomRef.current.scale.set(0.07, 0.07, 0.07);
            roomRef.current.position.set(0, 0, 0);

            // First section -----------------------------------------
            firstMoveTimeline.current = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".first-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                    // invalidateOnRefresh: true,
                },
            }).to(roomRef.current.scale, {
                x: 0.1,
                y: 0.1,
                z: 0.1,
            });

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
                    roomRef.current.scale,
                    {
                        x: 0.25,
                        y: 0.25,
                        z: 0.25,
                    },
                    "same"
                )
                .to(
                    rectLightRef.current,
                    {
                        width: 0.3 * 3.4,
                        height: 0.4 * 3.4,
                    },
                    "same"
                )
                .to(
                    roomRef.current.position,
                    {
                        x: 1.5,
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
            }).to(roomRef.current.position, {
                z: -4.5,
            });
        });

        mm.add("all", () => {
            // All animations
            // First section -----------------------------------------
            firstCircle.current = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".first-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                },
            }).to(circle1.current.scale, {
                x: 3,
                y: 3,
                z: 3,
            });

            // Second section -----------------------------------------
            secondCircle.current = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".second-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                },
            })
                .to(
                    circle2.current.scale,
                    {
                        x: 3,
                        y: 3,
                        z: 3,
                    },
                    "same"
                )
                .to(
                    roomRef.current.position,
                    {
                        y: 0.7,
                    },
                    "same"
                );

            // Third section -----------------------------------------
            thirdCircle.current = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".third-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                },
            }).to(circle3.current.scale, {
                x: 3,
                y: 3,
                z: 3,
            });

            // Mini Platform Animations
            const secondPartTimeline = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".third-move",
                    start: "center center",
                },
            });

            roomRef.current.children.forEach((child) => {
                if (child.name === "Mini_Floor") {
                    first.current = gsap.to(child.position, {
                        x: -5.44055,
                        z: 13.6135,
                        duration: 0.3,
                    });
                }
                if (child.name === "Mailbox") {
                    second.current = gsap.to(child.scale, {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.3,
                    });
                }
                if (child.name === "Lamp") {
                    third.current = gsap.to(child.scale, {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2)",
                        duration: 0.3,
                    });
                }
                if (child.name === "FloorFirst") {
                    fourth.current = gsap.to(child.scale, {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2)",
                        duration: 0.3,
                    });
                }
                if (child.name === "FloorSecond") {
                    fifth.current = gsap.to(child.scale, {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.3,
                    });
                }
                if (child.name === "FloorThird") {
                    sixth.current = gsap.to(child.scale, {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2)",
                        duration: 0.3,
                    });
                }
                if (child.name === "Dirt") {
                    seventh.current = gsap.to(child.scale, {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2)",
                        duration: 0.3,
                    });
                }
                if (child.name === "Flower1") {
                    eighth.current = gsap.to(child.scale, {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2)",
                        duration: 0.3,
                    });
                }
                if (child.name === "Flower2") {
                    ninth.current = gsap.to(child.scale, {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2)",
                        duration: 0.3,
                    });
                }
            });
            secondPartTimeline.add(first.current);
            secondPartTimeline.add(second.current);
            secondPartTimeline.add(third.current);
            secondPartTimeline.add(fourth.current, "-=0.2");
            secondPartTimeline.add(fifth.current, "-=0.2");
            secondPartTimeline.add(sixth.current, "-=0.2");
            secondPartTimeline.add(seventh.current, "-=0.2");
            secondPartTimeline.add(eighth.current);
            secondPartTimeline.add(ninth.current, "-=0.1");
        })

        return () => {
            mm.revert();
        };
    }, [])

    return (
        <>
            {/* <primitive object={scene} ref={roomRef} castShadow={true} receiveShadow={true} /> */}
            <Suspense fallback={null}>
                <Model subRef={roomRef} rectRef={rectLightRef} />
            </Suspense>
            <mesh
                receiveShadow={true}
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, -0.3, 0]}
            >
                <planeGeometry args={[100, 100]}
                />
                <meshStandardMaterial
                    color={0xffe6a2}
                    side={THREE.BackSide}
                />
            </mesh>
            <Circle mat={0xe5a1aa}
                position={[0, -0.29, 0]}
                scale={[0, 0, 0]}
                passRef={circle1}
            />
            <Circle mat={0x8395cd}
                position={[2, -0.28, 0]}
                scale={[0, 0, 0]}
                passRef={circle2}

            />
            <Circle mat={0x7ad0ac}
                position={[2, -0.27, 0]}
                scale={[0, 0, 0]}
                passRef={circle3}
            />
        </>
    )
}
