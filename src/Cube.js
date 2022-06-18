import { useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/three";
import { useControls } from './useControls'
export default function Cube(props) {
  
  const controls = useControls()

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
