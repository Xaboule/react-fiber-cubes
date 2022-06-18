import { useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

import "./App.css";

function Spin({ children }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.001;
  });
  return <group ref={ref}>{children}</group>;
}

export default function App() {
  return (
    <Canvas linear>
      <ambientLight />
      <pointLight position={[10, 10, 15]} />
      <Spin>
        <Cube position={[1.5, 0.1, 3]} />
        <Cube position={[1, -1, 1]} />
        <Cube position={[-1, 1, 2]} />
      </Spin>
      <OrbitControls />
    </Canvas>
  );
}
