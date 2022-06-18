import { useState, useEffect } from 'react';
import { useSpring, a } from '@react-spring/three';
import { useControls } from './useControls';
import { useFrame } from '@react-three/fiber';
export default function Cube(props) {
  const controls = useControls();
  const { position } = props;
  const [cubePos, setCubePos] = useState(position);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { scale, color } = useSpring({
    scale: hovered ? 1.5 : 1,
    color: active ? `#66ffff` : `#ffff66`,
  });
  const delay = 4;
  useFrame(() => {
    if (controls.current.forward) {
      setCubePos([cubePos[0], cubePos[1], cubePos[2] + 0.1]);
    } else if (controls.current.backward) {
      setCubePos([cubePos[0], cubePos[1], cubePos[2] - 0.1]);
    }
  });
  useEffect(() => {
    setTimeout(() => setActive(false), delay * 1000);
  }, []);
  // clears timeout before running the new effect
  return (
    <a.mesh
      position={cubePos}
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
