
// interface Props {
//     id: number,
//     name: string,
//     group: string,
//     color: string,
//     type: string,
//     isHovered: boolean,
//     setIsHovered: typeof useState,
// }


export const Geometry = ({ isHovered, setIsHovered, id, name, type, group, color }: any) => {
    return (
        <mesh
            castShadow
            receiveShadow
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
            key={id}
            onClick={() => { alert(name + " " + type + " " + group) }}
            position={[Math.random() * 30, Math.random() * 30, Math.random() * 40,]}
            scale={isHovered ? [4, 4, 4] : [1, 1, 1]}
        >
            {group === 'interface'
                ? <sphereGeometry />
                : <boxGeometry />
            }
            <meshStandardMaterial color={isHovered ? "#06d6a0" : color} />
        </mesh>
    )
}