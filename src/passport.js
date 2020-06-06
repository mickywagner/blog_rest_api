const passport = require('passport')
const localStrategy = require('passport-local').localStrategy
const User = require('./models/User')

function authenticateUser() {
    passport.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function(username, password, done) {
        User.findOne({ email: username}, function(err, user) {
            if(err) { return done(err)}
            if(!user) {
                return done(null, false, { message: 'Incorrect user email'})
            }
            if(user.password !== password) {
                return done(null, false, { message: 'Incorrect password'})
            }
            return done(null, user, { message: 'Logged in successfully'})
        })
    }
    ))
}

export default authenticateUser
