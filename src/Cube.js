import  App from './App'

export default function Cube(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color={"orange"} />
    </mesh>
  );
}
