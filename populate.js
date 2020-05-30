import { models } from "mongoose"

const createUserWithPosts = async () => {
    const testUser = new models.User(
        {
            email: 'test@gmail.com',
            username: 'testuser',
            password: 'test123'
        }
    )

    const post1 = new models.BlogPost(
        {
            title: 'Test Blog Post',
            author: testUser.id,
            timestamp: Date.now(),
            text: 'This is a sample blog post for my database'
        }
    )

    const post2 = new models.BlogPost(
        {
            title: 'Second post',
            author: testUser.id,
            timestamp: Date.now(),
            text: 'I am not sure what to do next'
        }
    )

    const comment1 = new models.Comment(
        {
            name: 'Commenter One',
            text: 'This is a comment',
            timestamp: Date.now(),
            post: post1.id
        }
    )

    const comment2 = new models.Comment(
        {
            name: 'Commenter Two',
            text: 'seccond person to comment',
            timestamp: Date.now(),
            post: post1.id
        }
    )

    const comment3 = new models.Comment(
        {
            name: 'Commenter One',
            text: 'I also comment on second post',
            timestamp: Date.now(),
            post: post2.id
        }
    )

    await testUser.save()
    await post1.save()
    await post2.save()
    await comment1.save()
    await comment2.save()
    await comment3.save()
}

export default createUserWithPosts