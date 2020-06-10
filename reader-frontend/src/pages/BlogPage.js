import React, {useState, useEffect, useContext} from 'react';
import BlogWithComment from '../Components/BlogWithComment'
import { AppContext } from '../Context/Context'

function BlogPage({match}) {
    const [ blogPost, setBlogPost ] = useState()
    const { isLoading, setIsLoading } = useContext(AppContext)

    useEffect(() => {
        fetch(`http://localhost:3001/api/posts/${match.params.id}`)
            .then(response => response.json())
            .then(json => {
                setBlogPost(json[0])
                setIsLoading(false)
            }
            )
            .catch(err => console.log(err))
    }, [])


    return(
        <div className="feature">
            {blogPost === undefined ? null : 
            
            <BlogWithComment post={blogPost} />
            
            }
        </div> 
    )
}

export default BlogPage