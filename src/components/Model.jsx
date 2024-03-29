/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import RectLight from "./rectLight"
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model({ subRef, rectRef, cubeRef }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Finale Version 16.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    subRef.current.children.forEach((child) => {
      child.scale.set(0, 0, 0);
    })
  }, [])

  return (
    <group
      ref={group}
      dispose={null}>
      <group name="Scene" ref={subRef} scale={[0.11, 0.11, 0.11]} rotation={[0, -.02, 0]}>
        <group
          name="Cube"
          position={[0, -1, 0]}
          rotation={[0, Math.PI / 4, 0]}
          userData={{ name: "Cube" }}
          ref={cubeRef}
        >
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.Wall}
          />
          <mesh
            name="Cube_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials["Wall Two"]}
          />
        </group>
        <group
          name="Computer"
          position={[-8, 6.7, -1]}
          rotation={[-Math.PI, 0.8, -Math.PI]}
          userData={{ name: "Computer" }}>
          <mesh
            name="Cube021"
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials.Computer}
          />
          <mesh
            name="Cube021_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials.Screen}
          />
        </group>
        <group
          name="Shelves"
          position={[-10.2, 12.1, 0.3]}
          rotation={[-Math.PI, 0.8, -Math.PI]}
          userData={{ name: "Shelves" }}>
          <mesh
            name="Cylinder010"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cylinder010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_1.geometry}
            material={materials.lamps}
          />
          <mesh
            name="Cylinder010_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_2.geometry}
            material={materials.Book}
          />
          <mesh
            name="Cylinder010_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_3.geometry}
            material={materials.Pages}
          />
          <mesh
            name="Cylinder010_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_4.geometry}
            material={materials.book7}
          />
          <mesh
            name="Cylinder010_5"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_5.geometry}
            material={materials.Book2}
          />
          <mesh
            name="Cylinder010_6"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_6.geometry}
            material={materials["Table Top.002"]}
          />
          <mesh
            name="Cylinder010_7"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_7.geometry}
            material={materials["pen 3"]}
          />
          <mesh
            name="Cylinder010_8"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_8.geometry}
            material={materials["Table Leg.002"]}
          />
          <mesh
            name="Cylinder010_9"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_9.geometry}
            material={materials.Profile}
          />
          <mesh
            name="Cylinder010_10"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_10.geometry}
            material={materials["profile pic"]}
          />
        </group>
        <group
          name="Mini_Floor"
          position={[-0.289521, -0.8, 8.83572]}
          rotation={[-Math.PI, 0.8, -Math.PI]}
          userData={{ name: "Mini Floor" }}>
          <mesh
            name="Cube105"
            castShadow
            receiveShadow
            geometry={nodes.Cube105.geometry}
            material={materials.Wall}
          />
          <mesh
            name="Cube105_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube105_1.geometry}
            material={materials["Wall Two"]}
          />
        </group>
        <group
          name="Table_Stuff"
          position={[-7.6, 5, -0.7]}
          rotation={[-Math.PI, 0.8, -Math.PI]}
          userData={{ name: "Table Stuff" }}>
          <mesh
            name="Cube114"
            castShadow
            receiveShadow
            geometry={nodes.Cube114.geometry}
            material={materials.Mini}
          />
          <mesh
            name="Cube114_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_1.geometry}
            material={materials.Pot}
          />
          <mesh
            name="Cube114_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_2.geometry}
            material={materials.Dirt}
          />
          <mesh
            name="Cube114_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_3.geometry}
            material={materials["Leaf.002"]}
          />
          <mesh
            name="Cube114_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_4.geometry}
            material={materials.Leaf}
          />
          <mesh
            name="Cube114_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_5.geometry}
            material={materials.Key}
          />
          <mesh
            name="Cube114_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_6.geometry}
            material={materials["Mini.001"]}
          />
          <mesh
            name="Cube114_7"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_7.geometry}
            material={materials.pen2}
          />
          <mesh
            name="Cube114_8"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_8.geometry}
            material={materials.pen1}
          />
          <mesh
            name="Cube114_9"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_9.geometry}
            material={materials["pen 3"]}
          />
          <mesh
            name="Cube114_10"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_10.geometry}
            material={materials.Book}
          />
          <mesh
            name="Cube114_11"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_11.geometry}
            material={materials.Pages}
          />
          <mesh
            name="Cube114_12"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_12.geometry}
            material={materials.Trackpad}
          />
          <mesh
            name="Cube114_13"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_13.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cube114_14"
            castShadow
            receiveShadow
            geometry={nodes.Cube114_14.geometry}
            material={materials.drink}
          />
        </group>
        <mesh
          name="fish"
          castShadow
          receiveShadow
          geometry={nodes.fish.geometry}
          material={materials.Fish}
          position={[10.4, 5.2, 2]}
          rotation={[-Math.PI, 0.7, -Math.PI]}
          userData={{ name: "fish" }}
        />
        <group
          name="Desks"
          position={[-5.6, 2.6, -0.8]}
          rotation={[-Math.PI, 0.8, -Math.PI]}
          userData={{ name: "Desks" }}>
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials["Table Top.002"]}
          />
          <mesh
            name="Cylinder012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials["Table Leg.002"]}
          />
          <mesh
            name="Cylinder012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_2.geometry}
            material={materials["Table Leg Black.002"]}
          />
        </group>
        <group
          name="Clock"
          position={[10.6, 14.9, -0.4]}
          rotation={[-Math.PI / 2, 0, 2.3]}
          userData={{ name: "Clock" }}>
          <mesh
            name="Cylinder017"
            geometry={nodes.Cylinder017.geometry}
            material={materials["Table Top.002"]}
          />
          <mesh
            name="Cylinder017_1"
            geometry={nodes.Cylinder017_1.geometry}
            material={materials["Table Leg.002"]}
          />
        </group>
        <group
          name="Lamp"
          position={[-7, -0.5, 10.2]}
          rotation={[-Math.PI, 0.8, -Math.PI]}
          userData={{ name: "Lamp" }}
          scale={[0, 0, 0]}

        >
          <mesh
            name="Plane010"
            castShadow
            receiveShadow
            geometry={nodes.Plane010.geometry}
            material={materials.fdsa}
          />
          <mesh
            name="Plane010_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane010_1.geometry}
            material={materials.lamp}
          />
        </group>
        <group
          name="Mailbox"
          position={[-2.8, -0.7, 14.7]}
          rotation={[Math.PI / 2, 0, -2.3]}
          userData={{ name: "Mailbox" }}
          scale={[0, 0, 0]}
        >
          <mesh
            name="Cylinder018"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018.geometry}
            material={materials.Key}
          />
          <mesh
            name="Cylinder018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_1.geometry}
            material={materials.book7}
          />
          <mesh
            name="Cylinder018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_2.geometry}
            material={materials.Mini}
          />
        </group>
        <mesh
          name="Dirt"
          castShadow
          receiveShadow
          geometry={nodes.Dirt.geometry}
          material={materials.Dirt}
          position={[-9.1, -0.5, 11.8]}
          rotation={[-Math.PI, 0.8, -Math.PI]}
          userData={{ name: "Dirt" }}
          scale={[0, 0, 0]}

        />
        <mesh
          name="FloorThird"
          castShadow
          receiveShadow
          geometry={nodes.FloorThird.geometry}
          material={materials["seas.003"]}
          position={[-7.3, -0.5, 15.2]}
          rotation={[-Math.PI, -0.7, -Math.PI]}
          userData={{ name: "FloorThird" }}
          scale={[0, 0, 0]}

        />
        <mesh
          name="FloorSecond"
          castShadow
          receiveShadow
          geometry={nodes.FloorSecond.geometry}
          material={materials.Fish}
          position={[-6.6, -0.5, 13.4]}
          rotation={[-Math.PI, -0.7, -Math.PI]}
          userData={{ name: "FloorSecond" }}
          scale={[0, 0, 0]}

        />
        <mesh
          name="FloorFirst"
          castShadow
          receiveShadow
          geometry={nodes.FloorFirst.geometry}
          material={materials["seas.004"]}
          position={[-4.9, -0.5, 12.8]}
          rotation={[-Math.PI, -0.7, -Math.PI]}
          userData={{ name: "FloorFirst" }}
          scale={[0, 0, 0]}

        />
        <group
          name="Flower1"
          position={[-9, -0.7, 11.6]}
          rotation={[2.5, -1.1, 1.9]}
          userData={{ name: "Flower1" }}
          scale={[0, 0, 0]}

        >
          <mesh
            name="Circle015"
            castShadow
            receiveShadow
            geometry={nodes.Circle015.geometry}
            material={materials.Book2}
          />
          <mesh
            name="Circle015_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle015_1.geometry}
            material={materials.book7}
          />
          <mesh
            name="Circle015_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle015_2.geometry}
            material={materials.Fish}
          />
        </group>
        <group
          name="Flower2"
          position={[-9.4, -0.6, 11.9]}
          rotation={[0.4, -0.6, -0.4]}
          userData={{ name: "Flower2" }}
          scale={[0, 0, 0]}

        >
          <mesh
            name="Circle016"
            castShadow
            receiveShadow
            geometry={nodes.Circle016.geometry}
            material={materials.Book2}
          />
          <mesh
            name="Circle016_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle016_1.geometry}
            material={materials.book7}
          />
          <mesh
            name="Circle016_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle016_2.geometry}
            material={materials.Fish}
          />
        </group>
        <group
          name="Floor_Items"
          position={[-2.9, -0.2, 1.6]}
          rotation={[-Math.PI, 0.8, -Math.PI]}
          userData={{ name: "Floor Items" }}>
          <mesh
            name="Cube132"
            castShadow
            receiveShadow
            geometry={nodes.Cube132.geometry}
            material={materials["Table Leg.002"]}
          />
          <mesh
            name="Cube132_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube132_1.geometry}
            material={materials["Trash Lid"]}
          />
          <mesh
            name="Cube132_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube132_2.geometry}
            material={materials["seas.003"]}
          />
          <mesh
            name="Cube132_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube132_3.geometry}
            material={materials["Table Top.002"]}
          />
        </group>
        <mesh
          name="Chair"
          castShadow
          receiveShadow
          geometry={nodes.Chair.geometry}
          material={materials["pen 3"]}
          position={[-4.2, 2.7, 2.8]}
          rotation={[0, 1.4, 0]}
          userData={{ name: "Chair" }}
        />
        <group
          name="Aquarium"
          position={[7.7, 1.6, 0.8]}
          rotation={[-Math.PI, 0.8, -Math.PI]}
          userData={{ name: "Aquarium" }}>
          <mesh
            name="Cube136"
            castShadow
            receiveShadow
            geometry={nodes.Cube136.geometry}

          //material={materials["water.001"]}
          >
            <meshPhysicalMaterial
              roughness={0}
              color={0x549dd2}
              ior={1}
              transmission={1}
              opacity={1}
              depthWrite={false}
              depthTest={false}
            />
          </mesh>
          <mesh
            name="Cube136_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_1.geometry}
            material={materials.tanke}
          />
          <mesh
            name="Cube136_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_2.geometry}
            material={materials.Rock}
          />
          <mesh
            name="Cube136_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_3.geometry}
            material={materials.seas}
          />
          <mesh
            name="Cube136_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_4.geometry}
            material={materials["seas.002"]}
          />
          <mesh
            name="Cube136_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_5.geometry}
            material={materials["seas.001"]}
          />
          <mesh
            name="Cube136_6"
            castShadow
            receiveShadow
            geometry={nodes.Cube136_6.geometry}
            material={materials.seaweed}
          />
        </group>
        <group
          name="Body"
          position={[-2.1, 10.8, -8.2]}
          rotation={[-Math.PI, 0.8, Math.PI / 2]}
          userData={{ name: "Body" }}>
          <mesh
            name="Plane014"
            castShadow
            receiveShadow
            geometry={nodes.Plane014.geometry}
            material={materials.Window}
          />
          <mesh
            name="Plane014_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_1.geometry}
            material={materials.Wall}
          />
          <mesh
            name="Plane014_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_2.geometry}
            material={materials["Wall Two"]}
          />
        </group>
        {/* <rectAreaLight
          color={0xffffff}
          intensity={1}
          width={0.5}
          height={0.7}
          position={[7.68244, 7, 0.5]}
          rotation-x={-Math.PI / 2}
          rotation-z={Math.PI / 4}
          ref={rectRef}
        /> */}
        <RectLight rectRef={rectRef} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Finale Version 16.glb");
