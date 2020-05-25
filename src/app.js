import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import models, { connectDb } from './models'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Future Blog API here')
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port 3000 ${process.env.PORT}`)
})