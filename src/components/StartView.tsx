import { Stars } from "@react-three/drei"
import { Suspense } from "react"

export const StartView = () => {
    return (
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
    )
}