import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import { connectDb } from './models'
import indexRouter from './routes/index'
import apiRouter from './routes/api'
import { models, model } from 'mongoose'
import createUserWithPosts from '../populate'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extende: true }))
app.use(cors())
app.use('/', indexRouter)
app.use('/api', apiRouter) 

connectDb().then(async () => {
//    createUserWithPosts()
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port 3000 ${process.env.PORT}`)
    })
})
    
