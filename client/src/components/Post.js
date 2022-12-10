import React from "react";
import {Link} from "react-router-dom";

function onClick() {
    console.log("yesy");
}

export default function Post({title, address, id, price, description}) {

    return (
        <Link to={`/api/posts/${id}`}>
            <div className="badges" onClick={onClick}>
                <div>
                    <p1>{title}</p1>
                    <p>{address}</p>
                </div>
            </div>
        </Link>
    );
}