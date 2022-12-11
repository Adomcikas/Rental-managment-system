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
    let { id } = useParams();
    const navigate = useNavigate();
    const { http, getUser, getToken } = AuthUser();
    
    const [PostPrice, setPostPrice] = useState("");
    const [PostDescription, setPostDescription] = useState("");
    const [PostAddress, setPostAddress] = useState("");
    const [PostTitle, setPostTitle] = useState("");
    const [Post, setPost] = useState("");
    const [commentCount, setCommentCount] = useState(0);

    useEffect(() => {
        fetchPost();
        fetchPostComments();

    }, []);

    const fetchPost = () => {
        http.get(`/api/posts/${id}`).then((res) => {
            setPost(res.data);
            setPostPrice(res.data.price);
            setPostDescription(res.data.description);
            setPostAddress(res.data.address);
            setPostTitle(res.data.title);
            console.log(res.data.userId);
            console.log(getUser().id);
            
        }).catch(() => {
            //alert("Klaida su postais");
        });
    }
    const fetchPostComments = () => {
        http.get(`/api/posts/${id}/api/comments`).then((res) => {
            if(res != null)
                setCommentCount(res.data.length);
            console.log(res.data.length)
        }).catch(() => {
            alert("Klaida su komentais");
        });
    }

    const EditPost = async () => {
        console.log(getToken());
        console.log(PostTitle);
        console.log(getUser().role);
        const data = {
            title: PostTitle,
            price: PostPrice,
            address: PostAddress,
            description: PostDescription,
        }
        http.put(`/api/posts/${id}`, data, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            alert("Nepavyko Koreguoti Post");
            navigate(`/api/posts`);
        })  
        navigate(`/api/posts`);
    }

    const DeletePost = () => {
        http.delete(`/api/posts/${id}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            alert("Nepavyko Koreguoti Post");
            navigate(`/`);
        })  
        navigate("/");

    }
    const OpenComments = () => {
        navigate(`/api/posts/${id}/api/comments`)
    }



    return (
            <div className="max-w-5xl">
                <div className="Posts-table">
                    <tbody >
                        <th scope="col" class="py-3 px-6">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    {getUser() != null && getUser().id == Post.userId ?(
                                        <h5 className="text-3xl font-bold tracking-tight text-gray-400 dark:text-white ">
                                            <textarea className=" Post-titlebg text-3xl font-bold text-gray-400" 
                                            value={PostTitle}
                                            onChange={(e) =>{setPostTitle(e.target.value)}}/>
                                        </h5>
                                    ) :
                                    <div>{Post.title}</div>
                                    }
                                    
                                </th>
                            </tr>
                            <img class=" Post-padding max-w-lg h-auto rounded-lg transition-all mx-auto duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description"></img>
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    <button onClick={OpenComments} className="">Comments ({commentCount})</button>
                                </th>
                            </tr>
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                {getUser() != null && getUser().id == Post.userId ?(
                                    
                                    <button onClick={EditPost} className="" >Edit</button>
                                    ) :null}
                                
                                </th>
                                <th scope="col" className="py-3 px-6">
                                {getUser() != null && getUser().id == Post.userId ?(
                                    
                                    <button onClick={DeletePost} className="">Delete</button>
                                    ) :null}
                                
                                </th>
                            </tr>
                            <Accordion alwaysOpen={true}>
                                <Accordion.Panel>
                                    <Accordion.Title className="font-bold text-3xl">
                                        Description
                                    </Accordion.Title>
                                    <Accordion.Content>
                                    {getUser() != null && getUser().id == Post.userId ?(
                                        <h5 className="text-3xl font-bold tracking-tight text-gray-400 dark:text-white ">
                                            <textarea className=" Post-titlebg text-3xl font-bold text-gray-400" 
                                            value={PostDescription}
                                            onChange={(e) =>{setPostDescription(e.target.value)}}/>
                                        </h5>
                                    ) :
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-400 dark:text-white " >
                                            <div>{Post.description}</div>
                                        </h5>
                                    }
                                        
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="font-bold text-3xl">
                                        Address
                                    </Accordion.Title>
                                    <Accordion.Content>
                                    {getUser() != null && getUser().id == Post.userId ?(
                                        <h5 className="text-3xl font-bold tracking-tight text-gray-400 dark:text-white ">
                                            <textarea className=" Post-titlebg text-3xl font-bold text-gray-400" 
                                            value={PostAddress}
                                            onChange={(e) =>{setPostAddress(e.target.value)}}/>
                                        </h5>
                                    ) :
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-400 dark:text-white " >
                                                <div>{Post.address}</div>
                                            </h5>
                                        }  
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="font-bold text-3xl">
                                        Price
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        {getUser() != null && getUser().id == Post.userId ?(
                                            <h5 className="text-3xl font-bold tracking-tight text-gray-400 dark:text-white ">
                                                <textarea className=" Post-titlebg text-3xl font-bold text-gray-400" 
                                                value={PostPrice}
                                                onChange={(e) =>{setPostPrice(e.target.value)}}/>
                                            </h5>
                                        ) :
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-400 dark:text-white " >
                                                <div>{Post.price}</div>
                                            </h5>
                                        }   
                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>

                        </th>

                    </tbody>
                </div>
            </div>
    );
}

export default Home;