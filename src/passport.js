import passport from 'passport'
import LocalStategy from 'passport-local'

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

import User from './models/User'

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.ACCESS_TOKEN_SECRET

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    return User.findById(jwt_payload.id)
               .then(user => {
                   return done(null, user)
               })
               .catch(err => {
                   return done(err)
               })
}))