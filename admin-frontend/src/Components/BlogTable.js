import React, {useContext, useEffect} from 'react';
import {AppContext} from '../Context/AppContext'

import BlogListItem from './BlogList'
import { PromiseProvider } from 'mongoose';

function BlogTable() {
    const { getAllPosts, allPosts } = useContext(AppContext)

    useEffect(() => {
        getAllPosts()
    }, [])

    const posts = allPosts.length > 1 ? allPosts.map(post => 
        <BlogListItem 
            key={post._id} 
            title={post.title} 
            date={post.date} 
            comments={post.comments}/>
    ) : null
    
    return(
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date Created</th> 
                    <th>Comments</th>
                </tr>
            </thead>
            {posts}
        </table>
    )
}

export default BlogTable