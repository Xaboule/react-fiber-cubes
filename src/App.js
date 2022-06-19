import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon"
import Cube from "./Cube";
// import Plane from "./Floor";
import Spin from "./Spin";
import { Ground } from "./Ground";
import "./App.css";



export default function App() {
  return (
    <Canvas linear>
      <ambientLight />
     
      <Physics gravity={[0, 0, 0]}> 
      <pointLight position={[10, 10, 15]} />
     {/* <Spin> */}
        <Cube position={[1.5, 0.1, 3]} />
        <Cube position={[1, -1, 1]} />
        <Cube position={[1, 1, 2]} />
        {/* </Spin> */}
      <OrbitControls />
      <Stars/>
      <Ground/>
      </Physics>
    </Canvas>
  );
}
