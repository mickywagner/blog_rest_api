import 'dotenv/config'
import User from '../models/User'

import bcrypt from 'bcryptjs'

exports.user_list = (req, res, next) => {
    User.find()
        .exec(function(err, users) {
            if(err) { return next(err)}
            return res.status(200).send(Object.values(users))
        })
}

exports.user_create_post = async (req, res, next) => {
    const emailExists = await User.findOne({email: req.body.email})
    
    if(emailExists) return res.status(400).send({message: 'Email already in use'})
    
    const user =  await new User({
       email: req.body.email, 
       username: req.body.username, 
       password: req.body.password
    })

    user.save(function(err, user) {
        if(err) return next(err)
        return res.send(user)
    })
}  

exports.user_details = (req, res, next) => {
    User.findById(req.params.userId, function(err, user) {
        if(err) return res.status(400).send({message: 'User does not exist'})
        return res.status(200).send(user)
    })
}

exports.user_edit_put = async (req, res, next) => {
    const editedUser = new User({
        _id: req.params.userId,
        username: req.body.username,
        email: req.body.email,
    })

    if(req.body.password) {
        editedUser.password = await bcrypt.hash(req.body.password, 10)
    }

    User.findByIdAndUpdate(req.params.userId, editedUser, {}, function(err, theuser) {
        if(err) {return next(err)}
        return res.status(200).send(`User edited successful`)
    })
}

exports.user_delete_delete = (req, res, next) => {
    User.findByIdAndDelete(req.params.userId, function(err, user) {
        if(err) return next(err)
        res.status(200).send({message: `${user} was deleted`})
    })
}


