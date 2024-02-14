import { Float, Text3D, } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { VRButton } from "@react-three/xr"
import { Environment, OrbitControls, Stars } from "@react-three/drei"
import { XR, Controllers } from '@react-three/xr'
import { Suspense, useState } from "react"
import { Geometry } from "."

interface NetworkTraffic {
  id: number;
  name: string;
  type: string;
  value: string;
  group: string;
  color: string;
}

export const App = () => {
  const data: NetworkTraffic[] = [
    { id: 1, name: "0net", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 2, name: "adas-fascaf-afas-fa", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 3, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 3, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
  ]
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <VRButton />
      <Canvas
        className="canvas"
        shadows
        camera={{ position: [3.4, 9.80, 57.14], fov: 80 }}
      >
        <XR>
          <Controllers />
          <OrbitControls />
          <Environment
            preset="apartment" />
          <ambientLight
            intensity={.2}
            color={"#dee2ff"} />
          <Float
            speed={0}>
            <Text3D
              position={[-2, 3, 0]}
              scale={[1, 1, 5]}
              size={5}
              font={'https://threejs.org/examples/fonts/optimer_bold.typeface.json'}
            >
              {`DEACHE \nNetwork \nTraffic`}
              <meshStandardMaterial color="#06d6a0" roughness={0} metalness={0} />
            </Text3D>
          </Float>

          {data.map((element: NetworkTraffic) => (
            <Float
              speed={1} >
              <Geometry isHovered={isHovered} setIsHovered={setIsHovered} id={element.id} type={element.type} name={element.name} group={element.group} color={element.color} />
            </Float>
          ))}

          <Suspense
            fallback={"Loading"}>
            <Stars
              radius={100}
              depth={20}
              count={1000}
              factor={5}
              saturation={20}
              fade speed={3} />
          </Suspense>
        </XR >
      </Canvas >
    </>
  )
}

