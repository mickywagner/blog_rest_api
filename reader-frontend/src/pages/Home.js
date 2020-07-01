import React from 'react';
import {Link} from 'react-router-dom'
import { FiArrowRightCircle } from 'react-icons/fi'

function Home() {
    return(
        <div className="home">
            <div>
                <h1>Welcome to My Blog!</h1>
                <p>This is a project I did for Odin Project Node course. It's a REST API built with a Node/Express backend and two front-end sites, both built with React, one for admin (editing, deleting comments/posts) and one for readers. </p>
                <a href="https://github.com/mickywagner/blog_rest_api" target="_blank">Check out the code on Github</a>
                <p> <Link to="/blog">Go to Blog <FiArrowRightCircle /> </Link></p>
            </div>  
        </div>
        
    )
}

export default Home

