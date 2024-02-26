import { Environment, useGLTF } from "@react-three/drei";

export const HandLeft = (props: any) => {
  const model = useGLTF('/room_3d.gltf')

  return (
    <group {...props} >
      <primitive object={model.scene} />
      <Environment preset="city" />
    </group>
  )
}



