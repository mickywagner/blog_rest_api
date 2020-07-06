import React, {useEffect, useState} from 'react';

import { FaHeart, FaHeartBroken} from 'react-icons/fa'


function Favorite(props) {
    const [liked, setLiked] = useState(false)
    const [disLiked, setDisLiked] = useState(false)

    useEffect(() => {
        console.log('change to likes')
    }, [setLiked, setDisLiked])

    const handleLike = () => {
        setLiked(!liked)
        const num = (liked ? -1 : 1) + props.likes 

        fetch(`https://blog-api-072020.herokuapp.com/api/posts/${props.postId}/likes`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                "likes": num,
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
        })
    }

    const handleDisLike = () => {
        setDisLiked(!disLiked) 
        const num = (disLiked ? -1 : 1) + props.dislikes
 
        fetch(`https://blog-api-072020.herokuapp.com/api/posts/${props.postId}/dislikes`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                "dislikes": num
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
        })

    }

    return(
        <div className="likes">
            <span>
                <button onClick={handleLike} disabled={disLiked ? true : false}>
                    <FaHeart /> {props.likes}
                </button> 
                <button onClick={handleDisLike} disabled={liked ? true : false}
                    ><FaHeartBroken /> {props.dislikes}
                </button> 
            </span>
        </div>
    )
}

export default Favorite