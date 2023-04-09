import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export const LikeButton = () => {
    let [likes, setLikes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
    };

    return (
        <button className={`like-button ${isClicked && 'liked'}`} onClick={handleClick}>
            <span className="likes-counter">{`Likes ${likes}`} <FontAwesomeIcon icon={faHeart} /></span>
        </button>
    );
};