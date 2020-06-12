import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import { connectDb } from './models'
import indexRouter from './routes/index'
import apiRouter from './routes/api'
import initialize from './passport'

import { models, model } from 'mongoose'
import createUserWithPosts from '../populate'
import passport from 'passport'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.use('/', indexRouter)
app.use('/api', apiRouter) 



connectDb().then(async () => {
//    createUserWithPosts()
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.PORT}`)
    })
})
    
