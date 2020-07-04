import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        email: {type: String, required: true},
        username: {type: String, required: true},
        password: {type: String, required: true}       
    }
)

UserSchema.pre('save', async function(next) {
    const user = this
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

UserSchema.methods.isValidPassword = async function(password) {
    const user = this
    const compare = await bcrypt.compare(password, user.password)
    return compare
}

const User = mongoose.model('User', UserSchema)

export default User