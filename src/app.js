import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import models, { connectDb } from './models'
import indexRouter from './routes/index'
import apiRouter from './routes/api'

const app = express()

app.use(cors())
app.use('/', indexRouter)
app.use('/api', apiRouter) 

connectDb().then(async () => {
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port 3000 ${process.env.PORT}`)
    })
})
    
   