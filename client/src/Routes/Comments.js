import React, {useEffect, useState} from "react";
import { Navigate, useParams} from 'react-router-dom';
import AuthUser from "../services/AuthUser";
import Comment from "../components/Comment"
import './Posts.css';
import { Card } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    useEffect( () => {
        fetchComments();
        fetchPost();
    }, []);
    let { id1 } = useParams();
    const [commentArray, setCommentArray] = useState([]);
    const { http , getUser, getToken} = AuthUser();
    const [PostTitle, setPostTitle] = useState("");
    const [CommentDescription, SetCommentDescription] = useState("");
    const temp = [];

    const fetchComments= async() => {

        http.get(`/api/posts/${id1}/api/comments`).then((res) => {
            console.log(res.data.length)
            // res.data.forEach(comment => {
            //     temp.push(comment)
            // })
            setCommentArray(res.data);
        }).catch(() => {
            alert("Klaida su komentais");
        });

    };

    const fetchPost = () => {
        http.get(`/api/posts/${id1}`).then((res) => {
            setPostTitle(res.data.title);
            
        }).catch(() => {
            //alert("Klaida su postais");
        });
    }

    const CreateComment = () => {
        const data = {
            description: CommentDescription,
        }
        http.post(`/api/posts/${id1}/api/comments`, data, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }).then((res) => {
            navigate(`/api/posts/${id1}`);
            
        }).catch(() => {
            //alert("Klaida su postais");
        });
    }
    return(
        <section>
            {
                <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    
                    <div class=" items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">{PostTitle}</h5>
                    </div>
                    <div class=" items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Comments</h5>
                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            {commentArray.map((comment) =>
                                (
                                        
                                    <li class="pt-3 pb-0 sm:pt-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-shrink-0">
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    <Comment description={comment.description} id1={id1} id2={comment.id}/>
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
                                <button type="button" onClick={CreateComment} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create Comment</button>
                            </div>
                            ) : null}
                            {getUser() != null ?(
                                <div>

                                    <div>
                                        <th>
                                            <div class="relative Post-padding">
                                                <textarea type="text" id="floating_outlined" style={{width: '100%'}} onChange={(e) =>{SetCommentDescription(e.target.value)}} class="block  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                <label for="floating_outlined"  className="absolute Post-titlebg text-sm text-gray-700 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Comment</label>
                                            </div>
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