import { useRef, useLayoutEffect, Suspense, useState } from 'react'
import { useThree } from '@react-three/fiber'
import gsap from "gsap";
import * as THREE from 'three'
import { Circle } from './Circle';
import { Model } from './Model';
import { usePreload } from "../hooks/usePreload"

export const Room = () => {
    const { camera, scene } = useThree();

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

    const preload = usePreload((state) => state.preload)
    const secondPreload = usePreload((state) => state.secondPreload)
    const setPreload = usePreload((state) => state.setPreload)
    const setSecondPreload = usePreload((state) => state.setSecondPreload)

    const preloaderTimeline = useRef();
    const cubeRef = useRef();
    const secondPreloaderTimeline = useRef();

    const ctxRef = useRef();

    useLayoutEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("all", () => {
            preloaderTimeline.current = new gsap.timeline();
            preloaderTimeline.current.set(".animatedis", { y: 0, yPercent: 100 });
            //preloaderTimeline.current.set(".intro-text", { y: 0, yPercent: 100 });
            preloaderTimeline.current.to(".preloader", {
                opacity: 0,
                delay: 1,
                onComplete: () => {
                    document.querySelector(".preloader").classList.add("hidden");
                },
            });
        })
        mm.add("(min-width: 969px)", () => {
            preloaderTimeline.current
                .to(cubeRef.current.scale, {
                    x: 1.4,
                    y: 1.4,
                    z: 1.4,
                    ease: "back.out(2.5)",
                    duration: 0.7,
                })
                .to(roomRef.current.position, {
                    x: -1,
                    ease: "power1.out",
                    duration: 0.7,
                });
        })
        mm.add("(max-width: 968px)", () => {
            preloaderTimeline.current
                .to(cubeRef.current.scale, {
                    x: 1.4,
                    y: 1.4,
                    z: 1.4,
                    ease: "back.out(2.5)",
                    duration: 0.7,
                })
                .to(roomRef.current.position, {
                    x: -1,
                    ease: "power1.out",
                    duration: 0.7,
                });
        })
        mm.add("all", () => {
            preloaderTimeline.current
                .to(".intro-text .animatedis", {
                    yPercent: 0,
                    stagger: 0.05,
                    ease: "back.out(1.7)",
                })
                .to(
                    ".arrow-svg-wrapper",
                    {
                        opacity: 1,
                    },
                    "same"
                )
                .to(
                    ".toggle-bar",
                    {
                        opacity: 1,
                        //onComplete: resolve,
                        onComplete: () => {
                            setPreload()
                        }
                    },
                    "same"
                );
        })

        return () => {
            mm.revert()
        }
    }, [])

    useLayoutEffect(() => {
        if (preload === true) {
            ctxRef.current = gsap.context((self) => {
                secondPreloaderTimeline.current = new gsap.timeline();
                secondPreloaderTimeline.current
                    .to(
                        ".intro-text .animatedis",
                        {
                            yPercent: 100,
                            stagger: 0.05,
                            ease: "back.in(1.7)",
                        },
                        "fadeout"
                    )
                    .to(
                        ".arrow-svg-wrapper",
                        {
                            opacity: 0,
                        },
                        "fadeout"
                    )
                    .to(
                        roomRef.current.position,
                        {
                            x: 0,
                            y: 0,
                            z: 0,
                            ease: "power1.out",
                        },
                        "same"
                    )
                    .to(
                        cubeRef.current.rotation,
                        {
                            y: 2 * Math.PI + Math.PI / 4,
                        },
                        "same"
                    )
                    .to(
                        cubeRef.current.scale,
                        {
                            x: 10,
                            y: 10,
                            z: 10,
                        },
                        "same"
                    )
                    .to(
                        camera.position,
                        {
                            y: 6.5,
                        },
                        "same"
                    )
                    .to(
                        cubeRef.current.position,
                        {
                            x: 0.638711,
                            y: 8.5618,
                            z: 1.3243,
                        },
                        "same"
                    )
                    .set(scene.getObjectByName("Body").scale, {
                        x: 1,
                        y: 1,
                        z: 1,
                    })
                    .to(
                        cubeRef.current.scale,
                        {
                            x: 0,
                            y: 0,
                            z: 0,
                            duration: 1,
                        },
                        "introtext"
                    )
                    .to(
                        ".hero-main-title .animatedis",
                        {
                            yPercent: 0,
                            stagger: 0.07,
                            ease: "back.out(1.7)",
                        },
                        "introtext"
                    )
                    .to(
                        ".hero-main-description .animatedis",
                        {
                            yPercent: 0,
                            stagger: 0.07,
                            ease: "back.out(1.7)",
                        },
                        "introtext"
                    )
                    .to(
                        ".first-sub .animatedis",
                        {
                            yPercent: 0,
                            stagger: 0.07,
                            ease: "back.out(1.7)",
                        },
                        "introtext"
                    )
                    .to(
                        ".second-sub .animatedis",
                        {
                            yPercent: 0,
                            stagger: 0.07,
                            ease: "back.out(1.7)",
                        },
                        "introtext"
                    )
                    .to(
                        scene.getObjectByName("Aquarium").scale,
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2.2)",
                            duration: 0.5,
                        },
                        ">-0.5"
                    )
                    .to(
                        scene.getObjectByName("Clock").scale,
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2.2)",
                            duration: 0.5,
                        },
                        ">-0.4"
                    )
                    .to(
                        scene.getObjectByName("Shelves").scale,
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2.2)",
                            duration: 0.5,
                        },
                        ">-0.3"
                    )
                    .to(
                        scene.getObjectByName("Floor_Items").scale,
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2.2)",
                            duration: 0.5,
                        },
                        ">-0.2"
                    )
                    .to(
                        scene.getObjectByName("Desks").scale,
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2.2)",
                            duration: 0.5,
                        },
                        ">-0.1"
                    )
                    .to(
                        scene.getObjectByName("Table_Stuff").scale,
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2.2)",
                            duration: 0.5,
                        },
                        ">-0.1"
                    )
                    .to(scene.getObjectByName("Computer").scale, {
                        x: 1,
                        y: 1,
                        z: 1,
                        ease: "back.out(2.2)",
                        duration: 0.5,
                    })
                    .set(scene.getObjectByName("Mini_Floor").scale, {
                        x: 1,
                        y: 1,
                        z: 1,
                    })
                    .to(
                        scene.getObjectByName("Chair").scale,
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2.2)",
                            duration: 0.5,
                        },
                        "chair"
                    )
                    .to(
                        scene.getObjectByName("fish").scale,
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: "back.out(2.2)",
                            duration: 0.5,
                        },
                        "chair"
                    )
                    .to(
                        scene.getObjectByName("Chair").rotation,
                        {
                            y: 4 * Math.PI + Math.PI / 4,
                            ease: "power2.out",
                            duration: 1,
                        },
                        "chair"
                    )
                    .to(".arrow-svg-wrapper", {
                        opacity: 1,
                        onComplete: setSecondPreload(),
                    });
            })
        }

        return () => {
            if (ctxRef.current) {
                ctxRef.current.revert()
            }
        };
    }, [preload])

    useLayoutEffect(() => {
        let mm = gsap.matchMedia();

        if (secondPreload === true) {
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
        }
        return () => {
            mm.revert();
        };
    }, [secondPreload])

    return (
        <>
            <Model subRef={roomRef} rectRef={rectLightRef} cubeRef={cubeRef} />
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
