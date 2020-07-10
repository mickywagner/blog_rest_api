import 'dotenv/config'

import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import { connectDb } from './models'
import indexRouter from './routes/index'
import apiRouter from './routes/api'
import cookieParser from 'cookie-parser'

const app = express()

let whitelist = ['http://localhost:3000', 'https://mickywagner.github.io/blog_rest_api/', 'https://blog-admin-2020.netlify.app/']


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: whitelist,
    credentials: true
  }));
app.use(cookieParser())
mongoose.set('useFindAndModify', false);


app.use('/', indexRouter)
app.use('/api', apiRouter) 


connectDb().then(async () => {
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.PORT}`)
    })
})
    
