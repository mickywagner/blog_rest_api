import { BlogPost, User } from '../models'

exports.posts_list = (req, res) => {
    res.send('GET request for all blog posts')
}

exports.posts_details = (req, res) => {
    res.send('GET request for blog with postID details')
}

exports.posts_create_get = (req, res) => {
    res.send('GET request for creating a new blog post')
}

exports.posts_create_post = (req, res) => {
    res.send('POST request to create new blog post')
}

exports.posts_update_get = (req, res) => {
    res.send('GET request to edit a blog post')
}

exports.posts_update_put = (req, res) => {
    res.send('PUT request to edit blog post')
}

exports.posts_delete_get = (req, res) => {
    res.send('GET request to delete blog post')
}

exports.posts_delete_delete = (req, res) => {
    res.send('DELETE request to delete blog post')
}
