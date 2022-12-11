import React from "react";
import {Link} from "react-router-dom";
import '../Routes/Posts.css';

function onClick() {
    console.log("yesy");
}

export default function Comment({description,id1,id2}) {

    return (
        <Link to={`/api/posts/${id1}/api/comments/${id2}`}>
            <div className="badges" onClick={onClick}>
                <div>
                    <p1 className="Posts-p1">{description}</p1>
                </div>
            </div>
        </Link>
    );
}