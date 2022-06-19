import * as THREE from "three"
import { useTexture } from "@react-three/drei"
import { usePlane } from "@react-three/cannon"
import grass from "./grass.jpg"

export const Ground = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0],position:[0,-50,0], ...props }))
  const texture = useTexture(grass)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return (
    <mesh ref={ref} receiveShadow >
      <sphereGeometry args={[50, 50, 50]} />
      <meshStandardMaterial map={texture} map-repeat={[80, 28]} color="green" />
    </mesh>
  )
}