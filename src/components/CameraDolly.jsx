import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CameraDolly = () => {
    const vec = new THREE.Vector3()

    useFrame((state) => {
        const step = 0.1
        const x = 0
        const y = 6.5
        const z = 10

        state.camera.position.lerp(vec.set(x, y, z), step)
        state.camera.lookAt(0, 0.725, 0)
        state.camera.updateProjectionMatrix()
    })

    return null
}

export default CameraDolly