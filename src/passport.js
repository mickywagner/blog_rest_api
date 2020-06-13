import passport from 'passport'
import LocalStategy from 'passport-local'

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

import User from './models/User'

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.ACCESS_TOKEN_SECRET

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({_id: jwt_payload.id}, function(err, user) {
        if(err) {
            return done(err, false)
        }
        if(user) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    })
}))

passport.use('login', new LocalStategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({email})
        if(!user) {
            return done(null, false, {message: 'User not found'})
        }

        const validate = await user.isValidPassword(password)
        if(!validate) {
            return done(null, false, {message: 'Incorrect password'})
        }
        return done(null, user, { message: 'Login successful'})

    } catch(error) {
        return done(error)
    }
    
}))