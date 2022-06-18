import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";

import "./App.css";

function Cube(props) {
  
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { scale, color } = useSpring({
    scale: hovered ? 1.5 : 1,
    color: active ? `#66ffff` : `#ffff66`,
  });
  const delay = 4;
  useEffect(
    () => {
      setTimeout(() => setActive(false), delay * 1000)},
    );
      // clears timeout before running the new effect
  return (
    <a.mesh
      {...props}
      scale={scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxBufferGeometry />
      <a.meshStandardMaterial color={color} />
    </a.mesh>
  );
}

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
