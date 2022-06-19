import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Spin({ children }) {
    const ref = useRef();
    useFrame(() => {
      ref.current.rotation.x += 0.001;
      ref.current.rotation.y += 0.001;
    });
    return <group ref={ref}>{children}</group>;
  } 