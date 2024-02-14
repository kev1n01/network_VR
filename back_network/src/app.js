import express from 'express'
import cors from 'cors'
import router from './routes.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', router)

app.use((req, res, next) => {
    res.status(400).json({
        message: "endpoint not found"
    })
})

export default app