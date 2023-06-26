import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import Page from "./components/Page";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.body.classList.add('light-theme')
  }, [])

  return (
    /*     <Canvas
          camera={{
            fov: 64,
            position: [2.3, 1.5, 2.3],
          }}
        >
          <Experience />
        </Canvas> */
    <Page />
  );
}

export default App;