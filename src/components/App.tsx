import { Canvas, useThree } from "@react-three/fiber"
import { MainScene } from "@/components"
import { VRButton } from "@react-three/xr"
import { Stats } from "@react-three/drei"

function cameraPosition() {
  const camera = useThree(state => state.camera)
  return camera.coordinateSystem
}

export const App = () => {

  return (
    <>
      <VRButton />
      <Canvas
        gl={{ logarithmicDepthBuffer: true, alpha: true }}
        className="canvas"
        shadows
        camera={{ position: [2.5, 1.8, 0.9], fov: 40, isCamera: true }}
      >
        <Stats />
        <axesHelper args={[100]} />
        <gridHelper args={[100, 10]} />
        <MainScene />
      </Canvas >
    </>
  )
}