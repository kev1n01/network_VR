import { ThreeElements, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

export const Geometry = (props: ThreeElements['mesh']) => {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))

    return (
        <mesh
            castShadow receiveShadow
            {...props}
            ref={meshRef}
            scale={hovered ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <meshStandardMaterial color={hovered ? '#0582ca' : 'orange'} />
        </mesh>
    )
}