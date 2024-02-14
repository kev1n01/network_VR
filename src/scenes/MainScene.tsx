import { Environment, OrbitControls, Stars } from "@react-three/drei"
import { XR, Controllers, Hands } from '@react-three/xr'

export const MainScene = () => {
  return (
    <>
      <XR >
        <Controllers />
        <OrbitControls />
        <Environment preset="apartment" />
        <ambientLight />
        <Hands />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="#7699d4" />
        </mesh>
        <Stars radius={10} depth={30} count={5000} factor={4} saturation={0} fade speed={1} />
      </XR>
    </>
  )
}