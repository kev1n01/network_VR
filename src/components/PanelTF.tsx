import { useControls } from "leva"

export const PanelTF = () => {
    const gui = useControls({
        camera: {
            value: 'user', options: ['user', 'cc']
        },
    })

    return (
        <color>
            {gui.camera}
        </color>
    )
}