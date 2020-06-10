import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import { connectDb } from './models'
import indexRouter from './routes/index'
import apiRouter from './routes/api'
import authRouter from './routes/auth'
import { models, model } from 'mongoose'
import createUserWithPosts from '../populate'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/', indexRouter)
app.use('/api', apiRouter) 
app.use('/auth', authRouter)


connectDb().then(async () => {
//    createUserWithPosts()
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.PORT}`)
    })
})
    
