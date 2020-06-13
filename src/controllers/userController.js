import 'dotenv/config'
import User from '../models/User'


exports.user_list = (req, res, next) => {
    User.find()
        .exec(function(err, users) {
            if(err) { return next(err)}
            return res.send(Object.values(users))
        })
}

exports.user_create_post = async (req, res, next) => {
    const emailExists = User.findOne({email: req.body.email})
    
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

exports.user_edit_put = (req, res) => {
    res.send('PUT request to edit user')
}

exports.user_delete_delete = (req, res, next) => {
    User.findByIdAndDelete(req.params.userId, function(err, user) {
        if(err) return next(err)
        res.status(200).send({message: `${user} was deleted`})
    })
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

