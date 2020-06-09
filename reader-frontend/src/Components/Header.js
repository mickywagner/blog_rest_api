import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return(
        <div className="app-header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Blogs</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header