
export default function Plane({ args}) {
    
    return (
     
        <mesh  position={[-10,-50,0]}>
          <sphereGeometry args={args} />
          <meshBasicMaterial color="#ffb385" />
        </mesh>
    )}