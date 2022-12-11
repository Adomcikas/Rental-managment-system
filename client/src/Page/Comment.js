import React, {useEffect, useState} from "react";
import AuthUser from "../services/AuthUser";
import { Navigate, useParams} from 'react-router-dom';
import { Card, Accordion} from "flowbite-react";
import '../Routes/Posts.css';
import { useNavigate } from 'react-router-dom';

function Home() {


    //reikia pratesti daryti editable post kad butu galima editinti vienas 
    //field jau padarytas 59 eilutej reikia padaryt visiem postfieldam issaugoti 
    //naujas reiksmes onChange={} ir kai pasapudzia edit ar kazka kad issaugotu naujus 
    //duomenis, taip pat reikia padaryt kad paspaudus comment nukreiptu i comment langa
    let { id1, id2 } = useParams();
    const navigate = useNavigate();
    const { http, getUser, getToken } = AuthUser();
    const [Comment, setComment] = useState("");
    const [commentDescription, setCommentDescription] = useState("");
    const [reviewCount, setReviewCount] = useState(0);
    const [revieScore, setReviewScore] = useState(0);
    const [reviewArray, setReviewArray] = useState([]);
    let temp = 0;
    let tempp = 0;

    useEffect(() => {
        fetchComment();
        fetchCommentReviewCount();
        //CountScore();
    }, []);

    const fetchComment= async() => {

        console.log(id1);
        console.log(id2);
        http.get(`/api/posts/${id1}/api/comments/${id2}`).then((res) => {
            setComment(res.data);
            setCommentDescription(res.data.description);
        }).catch(() => {
            alert("Klaida su komentaru");
        });

    };

    const fetchCommentReviewCount= async() => {
        console.log(id1);
        console.log(id2);
        http.get(`/api/posts/${id1}/api/comments/${id2}/api/reviews`).then((res) => {
            setReviewCount(res.data.length);
            if(res.data.length > 0) {
                res.data.forEach(review => {
                    tempp+=review.rating;
                })
                temp = tempp/res.data.length/2;
                setReviewScore(temp);
            }
        }).catch(() => {
            alert("Klaida su reviews");
        })

    };
    const EditComment= async() => {
        console.log(id1);
        console.log(id2);
        const data = {
            description: commentDescription,

        }
        http.put(`/api/posts/${id1}/api/comments/${id2}`, data, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            alert("Nepavyko Koreguoti comment");
            navigate(`/api/posts/${id1}/api/comments`);
        })  
        navigate(`/api/posts/${id1}/api/comments`);


    };
    const DeleteReview= async() => {
        console.log(id1);
        console.log(id2);
        http.delete(`/api/posts/${id1}/api/comments/${id2}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            alert("Nepavyko pasalinti comment");
            navigate(`/api/posts/${id1}/api/comments`);
        })  
        navigate(`/api/posts/${id1}/api/comments`);


    };

    const NavigateReviews= async() => {
        navigate(`/api/posts/${id1}/api/comments/${id2}/api/reviews`);
    };

    return (
        <div className="max-w-5xl">
            <div>
            <tr>
                {getUser() != null && (getUser().id == Comment.userId || getUser().role == "Admin") ?(
                    <div>
                        <th scope="col" className="py-3 px-6">
                            <button type="button" onClick={EditComment} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button>            
                        </th>
                        <th scope="col" className="py-3 px-6">
                            <button type="button" onClick={DeleteReview} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>           
                        </th>
                    </div>
                ) : null}
                
            </tr>
            </div>
            <div class=" items-center justify-between mb-4">
                {getUser() != null && getUser().id == Comment.userId ?(
                    <h5 className="text-3xl font-bold tracking-tight text-gray-400 dark:text-white ">
                        <textarea style={{width: "500px", height: "100px"}} className=" Post-titlebg text-3xl font-bold text-gray-400" 
                            value={commentDescription}
                            onChange={(e) =>{setCommentDescription(e.target.value)}}/>
                    </h5>
                ) :
                    <h5 className="text-3xl font-bold tracking-tight text-gray-400 dark:text-white ">
                        <div>{Comment.description}</div>
                    </h5>     
                }
            </div>
            <div class="flex items-center">
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <p class="ml-2 text-sm font-bold text-gray-300 dark:text-white">{revieScore}</p>
                <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a href="" onClick={NavigateReviews} class="text-sm font-medium text-gray-300 underline hover:no-underline dark:text-white">{reviewCount} Reviews</a>
            </div>
        </div>
    );
}

export default Home;