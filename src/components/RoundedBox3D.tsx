import { RoundedBox } from "@react-three/drei"

export const RoundedBox3D = () => {
    return (

        <RoundedBox radius={0.3} position={[-10, -3, 0]} args={[10, 20, 2]} >
            <meshLambertMaterial attach='material' color='white' />
        </RoundedBox>
    )
}