import { exec } from "child_process"
import { Router } from "express"

const router = Router()

router.get('/ipconfig', (req, res) => {
    exec('ipconfig', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error ejecutando el comando: ${error}`)
            return res.status(500).send('Error ejecutando el comando')
        }
        console.log(`Resultado del comando: ${stdout}`)
        res.send(stdout)
    })
})

export default router