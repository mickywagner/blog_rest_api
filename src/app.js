import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import { connectDb } from './models'
import indexRouter from './routes/index'
import apiRouter from './routes/api'
import { models, model } from 'mongoose'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extende: true }))
app.use(cors())
app.use('/', indexRouter)
app.use('/api', apiRouter) 

connectDb().then(async () => {
    createUserWithPosts()
    app.listen(process.env.PORT, () => {
        console.log(`App listening on port 3000 ${process.env.PORT}`)
    })
})
    
const createUserWithPosts = async () => {
    const testUser = new models.User(
        {
            email: 'test@gmail.com',
            username: 'testuser',
            password: 'test123'
        }
    )

    const post1 = new models.BlogPost(
        {
            title: 'Test Blog Post',
            author: testUser.id,
            timestamp: Date.now(),
            text: 'This is a sample blog post for my database'
        }
    )

    const comment1 = new models.Comment(
        {
            name: 'Commenter One',
            text: 'This is a comment',
            timestamp: Date.now(),
            post: post1.id
        }
    )

    await testUser.save()
    await post1.save()
    await comment1.save()
}