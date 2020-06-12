import express, { response } from 'express'
const router = express.Router()

import passport from 'passport'
import User from '../models/User'

require('../passport')

import jwt from 'jsonwebtoken'

router.get('/', (req, res) => {
    res.redirect('/api')
})

router.post('/login', (req, res, next) => {
    const { email, password} = req.body

    User.findOne({email: email}).exec(function(err, user) {
        if(err || !user) {
            return res.status(401).json({
                message: 'Authorization fail'
            })
        }

        if(user.password === password) {
            const userForToken = {
                username: user.username,
                id: user._id
            }

            const accessToken = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET)
            return res.status(200).json({
                message: 'Login success',
                user: userForToken,
                accessToken: accessToken
            })
        }
    }
    )
})

router.get('/profile', passport.authenticate('jwt', {session: false}), function(req, res, next) {
    res.send(`${req.user.username} granted access!`)
})
        

    



export default router