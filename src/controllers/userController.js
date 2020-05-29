import { User } from '../models'


exports.user_list = (req, res) => {
    res.send(`GET request for all users`)
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

