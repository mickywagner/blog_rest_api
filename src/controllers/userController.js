import 'dotenv/config'
import User from '../models/User'
import passport from 'passport'
import initialize from '../passport'
import jwt from 'jsonwebtoken'
import passportJwt from 'passport-jwt'


exports.user_login = (req, res, next) => {
    let { email, password } = req.body

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
}

exports.user_list = (req, res, next) => {
    User.find()
        .exec(function(err, users) {
            if(err) { return next(err)}
            return res.send(Object.values(users))
        })
}
exports.user_create_post = (req, res) => {
    let user = new User(
        {
            
        }
    )
    res.send('POST request to create user')
}

exports.user_details = (req, res) => {
    res.send('GET request for user details')
}

exports.user_edit_put = (req, res) => {
    res.send('PUT request to edit user')
}

exports.user_delete_delete = (req, res) => {
    res.send('DELETE request to delete user')
}

// exports.user_create_get = (req, res) => {
//     res.send('GET request for creating user')
// }

// exports.user_edit_get = (req, res) => {
//     res.send('GET reuest to edit a user')
// }
 
// exports.user_delete_get = (req, res) => {
//     res.send('GET request to delete user')
// }

