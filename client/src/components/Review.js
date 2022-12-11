import React from "react";
import {Link} from "react-router-dom";
import '../Routes/Posts.css';

function onClick() {
    console.log("yesy");
}

export default function Comment({rating,id1,id2,id3}) {

    return (
        <Link to={`/api/posts/${id1}/api/comments/${id2}/api/reviews/${id3}`}>
            <div className="badges" onClick={onClick}>
                <div>
                    <p1 className="Posts-p1">{rating}</p1>
                </div>
            </div>
        </Link>
    );
}