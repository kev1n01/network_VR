import { Float, Text3D } from "@react-three/drei"

export const Text = () => {
    return (
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
    )
}