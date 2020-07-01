import React from 'react';
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

function Sidebar() {
    return(
        <div className='sidebar'>
            <h1>About</h1>
            <div className='img-container'>
                <img src="https://66.media.tumblr.com/9b2c83f06b588ba05aa6363ddfe0684b/tumblr_n9wflk9lK01tauk1io1_640.jpg"></img>
            </div>
            <p>Hi! I'm Michaela and for the past year I've been teaching myself how to code. </p>
            <p>Some of my other favorite things to do include traveling, Ashtanga yoga, learning Japanese, playing with my dog, and outdoor adventures, primarily snowboarding, climbing, and camping.</p>
            <div className="social">
                <a href="https://github.com/mickywagner"><FaGithubSquare /></a>
                <a href="https://www.linkedin.com/in/michaela-wagner/"><FaLinkedin /></a>
                <a href="mailto:mickywagner@gmail.com"><MdEmail /></a>
            </div>   
        </div>
    )
}

export default Sidebar