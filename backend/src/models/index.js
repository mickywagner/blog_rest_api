import 'dotenv/config'
import mongoose from 'mongoose'

import Comment from './Comment'
import BlogPost from './BlogPost'
import User from './User'

const connectDb = () => {
    return mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
}

const models = { Comment, BlogPost, User}

export { connectDb }

export default models