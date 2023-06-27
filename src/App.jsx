import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  OrthographicCamera
} from "@react-three/drei";

import CameraDolly from "./components/CameraDolly";
import { Experience } from "./components/Experience";
import Page from "./components/Page";
import * as THREE from 'three'

function App() {
  const { width, height } = useWindowSize();

  useEffect(() => {
    document.body.classList.add('light-theme')
  }, [])

  return (
    <>
      <span className="experience">
        <Canvas shadows={{ shadowMap: THREE.PCFSoftShadowMap }}
          gl={{
            outputEncoding: THREE.sRGBEncoding,
            toneMapping: THREE.CineonToneMapping,
            toneMappingExposure: 1.75,
            physicallyCorrectLights: true,
          }}
        >
          <Experience />
          <OrthographicCamera
            makeDefault
            manual
            position={[-Math.PI / 6, 5.65, 10]}
            left={(-(width / height) * 5) / 2}
            right={((width / height) * 5) / 2}
            top={5 / 2}
            bottom={- 5 / 2}
            near={-50}
            far={50}
            onUpdate={(c) => c.updateProjectionMatrix()}
          >
          </OrthographicCamera>
          <CameraDolly />
        </Canvas>
      </span>
      <Page />
    </>
  );
}

export default App;