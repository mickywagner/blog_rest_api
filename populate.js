import { models } from "mongoose"

const createUserWithPosts = async () => {
    const testUser = new models.User(
        {
            email: 'testuser@gmail.com',
            username: 'testuser',
            password: 'test123'
        }
    )

    const post1 = new models.BlogPost(
        {
            title: 'Building my first API',
            author: testUser.id,
            timestamp: Date.now(),
            text: 'Currently I am working on building my first API. It is a blog API and I am almost done with all the methods!',
            likes: 5
        }
    )

    const post2 = new models.BlogPost(
        {
            title: 'Game of Thrones',
            author: testUser.id,
            timestamp: Date.now(),
            text: 'When you play the game of thrones, you win or you die!',
            likes: 4,
            dislikes: 4
        }
    )

    const comment1 = new models.Comment(
        {
            name: 'Micky',
            text: 'Yay! Then we can build out your portfolio and resume!',
            timestamp: Date.now(),
            post: post1.id
        }
    )

    const comment2 = new models.Comment(
        {
            name: 'Mitch',
            text: 'Good job baba!',
            timestamp: Date.now(),
            post: post1.id
        }
    )

    const comment3 = new models.Comment(
        {
            name: 'Daenerys Targaryean, Mother of Dragons, etc.',
            text: 'I will take what is mine with fire and blood!',
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