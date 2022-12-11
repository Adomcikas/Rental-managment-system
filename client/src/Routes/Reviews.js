import React, {useEffect, useState} from "react";
import { Navigate, useParams} from 'react-router-dom';
import AuthUser from "../services/AuthUser";
import Review from "../components/Review"
import './Posts.css';
import { Card } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import './Posts.css';


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
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const temp = [];

    const fetchReviewss = async() => {
        console.log("fetching");
        console.log(id1);
        console.log(id2);
        http.get(`/api/posts/${id1}/api/comments/${id2}/api/reviews`).then((res) => {
            // res.data.forEach(review => {
            //     temp.push(review)
            // })
            setReviewArray(res.data);
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

    const PostReview = async() => {
        console.log("Posting");
        console.log(id1);
        console.log(id2);
        console.log(rating);
        const data = {
            rating: rating,
        }
        http.post(`/api/posts/${id1}/api/comments/${id2}/api/reviews/`, data, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }).then((res) => {
            navigate(`/api/posts/${id1}/api/comments/${id2}`);
            
        }).catch(() => {
            //alert("Klaida su postais");
        });

    };

    const StarRating = () => {

        return (
          <div className="star-rating">
            {[...Array(11)].map((star, index) => {
              index += -5;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? "on" : "off"}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
        );
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
                        <tr>
                            <th>
                                <h5 style={{width: "100px", height: "50px"}}class="text-sm font-medium text-gray-900 truncate dark:text-white Post-padding">
                                    Apply Review
                                </h5>
                            </th>
                            <th>
                                <h5 style={{width: "150px", height: "50px"}} class="text-sm font-medium text-gray-900 truncate dark:text-white Post-padding">
                                    <StarRating />
                                </h5>
                            </th>
                            <th>
                                <h5 style={{width: "75px", height: "50px"}} class="text-sm font-medium text-gray-900 truncate dark:text-white Post-padding">
                                    {rating}
                                </h5>
                            </th>
                        </tr>
                    </div>

                    ) : null}
                    

                    {getUser() != null ?(
                            <div>
                                <h5  >
                                    <button type="button" onClick={PostReview} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Save review</button>
                                </h5>
                            </div>
                            ) : null}
                </div>                  
            }
        </section>
    );
}

export default Home;