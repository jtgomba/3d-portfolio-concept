import * as THREE from 'three';

export function Circle(props) {
    return (
        <mesh {...props}
            receiveShadow={true}
            rotation={[-Math.PI / 2, 0, 0]}
            ref={props.passRef}
        >
            <circleGeometry args={[5, 64]} />
            <meshStandardMaterial
                color={props.mat}
            />
        </mesh>
    );
}
