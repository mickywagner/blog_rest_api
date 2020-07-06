import React, {useState, useEffect, useContext} from 'react';
import BlogWithComment from '../Components/BlogWithComment'
import { AppContext } from '../Context/Context'

function BlogPage({match}) {
    const [ blogPost, setBlogPost ] = useState()
    const { isLoading, setIsLoading } = useContext(AppContext)

    useEffect(() => {
        fetch(`https://blog-api-072020.herokuapp.com/api/posts/${match.params.id}`)
            .then(response => response.json())
            .then(json => {
                setBlogPost(json[0])
                setIsLoading(false)
            }
            )
            .catch(err => console.log(err))
    }, [blogPost])

    return(
        <div className="feature">
            {blogPost === undefined ? null : 
            
            <BlogWithComment post={blogPost} />
            
            }
        </div> 
    )
}

export default BlogPage