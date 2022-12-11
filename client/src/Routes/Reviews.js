import React, {useEffect, useState} from "react";
import { Navigate, useParams} from 'react-router-dom';
import AuthUser from "../services/AuthUser";
import Review from "../components/Review"
import './Posts.css';
import { Card } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    useEffect( () => {
        fetchReviewss();
        fetchComments();
        
    }, []);
    const { id1, id2} = useParams();
    const [reviewArray, setReviewArray] = useState([]);
    const { http , getUser, getToken} = AuthUser();
    const [comment, setComment] = useState("");

    const temp = [];

    const fetchReviewss = async() => {
        console.log("fetching");
        console.log(id1);
        console.log(id2);
        http.get(`/api/posts/${id1}/api/comments/${id2}/api/reviews`).then((res) => {
            res.data.forEach(review => {
                temp.push(review)
            })
            setReviewArray(temp);
        }).catch(() => {
            Navigate('/');
        })
    };

    const fetchComments = async() => {
        console.log("fetching");
        http.get(`/api/posts/${id1}/api/comments/${id2}`).then((res) => {
            setComment(res.data.description);
        }).catch(() => {
            Navigate('/');
        })
    };

    return(
<section>
            {
                <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    
                    <div class=" items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">{comment}</h5>
                    </div>
                    <div class=" items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Reviews</h5>
                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                        {reviewArray.map((review) =>
                                (  
                                    <li class="pt-3 pb-0 sm:pt-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    <Review rating={review.rating} id1={id1} id2={id2} id3={review.id}/>
                                                    {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                             }
                        </ul>
                    </div>

                    {getUser() != null ?(
                            <div>
                                {/* <button type="button" onClick={CreateComment} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create Comment</button> */}
                            </div>
                            ) : null}
                            {getUser() != null ?(
                                <div>

                                    <div>
                                        <th>
                                            {/* <div class="relative Post-padding">
                                                <textarea type="text" id="floating_outlined" style={{width: '100%'}} onChange={(e) =>{SetCommentDescription(e.target.value)}} class="block  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                <label for="floating_outlined"  className="absolute Post-titlebg text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Comment</label>
                                            </div> */}
                                        </th>
                                    </div>

                                </div>
                            ) : null}
                </div>                  
            }
        </section>
    );
}

export default Home;