import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { Experience } from "./components/Experience";
import Page from "./components/Page";
import * as THREE from 'three'

const orthographicCamera = new THREE.OrthographicCamera(
  (-(window.innerWidth / window.innerHeight) * 5) / 2,
  ((window.innerWidth / window.innerHeight) * 5) / 2,
  5 / 2,
  -5 / 2,
  -50,
  50
);
orthographicCamera.position.y = 5.65;
orthographicCamera.position.z = 10;
orthographicCamera.rotation.x = -Math.PI / 6;
orthographicCamera.zoom = 145

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
          camera={orthographicCamera}
        >
          <Experience />
        </Canvas>
      </span>
      <Page />
    </>
  );
}

export default App;