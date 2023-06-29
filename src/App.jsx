import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import {
  OrthographicCamera
} from "@react-three/drei";
import CameraDolly from "./components/CameraDolly";
import { Experience } from "./components/Experience";
import Page from "./components/Page";
import * as THREE from 'three'

function App() {

  useEffect(() => {
    document.body.classList.add('light-theme')
  }, [])

  return (
    <>
      <span className="experience">
        <Canvas shadows={true}
          linear={true}
          legacy={true}
          gl={{
            toneMapping: THREE.CineonToneMapping,
            toneMappingExposure: 1.75,
          }}
        >
          <Experience />
          <OrthographicCamera
            makeDefault
            manual
            // position={[-Math.PI / 6, 5.65, 10]}
            position={[0, 6.5, 10]}
            left={(-(window.innerWidth / window.innerHeight) * 5) / 2}
            right={((window.innerWidth / window.innerHeight) * 5) / 2}
            top={5 / 2}
            bottom={-5 / 2}
            near={-50}
            far={50}
            onUpdate={(c) => c.updateProjectionMatrix()}
          >
          </OrthographicCamera>
          {/* <gridHelper args={[10, 10, `white`, `gray`]} /> */}
          <CameraDolly />
        </Canvas>
      </span>
      <Page />
    </>
  );
}

export default App;