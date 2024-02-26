import { Geometry, HandLeft, PanelTF, StartView } from "@/components";
import { OrbitControls, Float, Text } from "@react-three/drei"
import { XR, Controllers, Hands, RayGrab, useXR } from '@react-three/xr'
import { BoxGeometry, SphereGeometry } from "three";
interface NetworkTraffic {
  id: number;
  name: string;
  type: string;
  value: string;
  group: string;
  color: string;
}

export const MainScene = () => {
  const data: NetworkTraffic[] = [
    { id: 1, name: "0net", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 2, name: "adas-fascaf-afas-fa", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 3, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
    { id: 4, name: "https2", type: "tcp", value: "", group: "interface", color: "#0582ca" },
    { id: 5, name: "wan0", type: "udp", value: "", group: "device", color: "#D1D118" },
  ]

  return (
    <>
      <XR foveation={1}>
        <PanelTF />

        <Controllers />
        <Hands
          modelLeft="/hand_left.gltf"
          modelRight="/hand_right.gltf"
        />
        {/* <RayGrab>
        </RayGrab> */}
        <OrbitControls
        // autoRotate 
        // autoRotateSpeed={.5}  
        // reverseOrbit
        />
        //------ Ligths ------
        <ambientLight
          intensity={3}
          color={"#dee2ff"} />
        <pointLight intensity={12} position={[-15, 5, 10]} />
        //------ Ligths ------

        //------ Models------
        <HandLeft />
        //------ Models------

        //------ Data ------
        {data && data.map((element: NetworkTraffic) => (
          <Float
            speed={.5} >
            <Geometry
              userData={{ name: element.name }}
              geometry={element.group === 'interface' ? new SphereGeometry() : new BoxGeometry()}
              position={[Math.random() * 50, Math.random() * 50, Math.random() * 50]}
            />
          </Float>
        ))}
        //------ Data ------

        <StartView />
      </XR >
    </>
  )
}