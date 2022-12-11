import React, {useEffect, useState} from "react";
import { Navigate} from 'react-router-dom';
import AuthUser from "../services/AuthUser";
import Post from "../components/Post"
import './Posts.css';
import { Card } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    useEffect( () => {
        fetchItems();
    }, []);
    const [postArray, setPostArray] = useState([]);
    const { http , getUser, getToken} = AuthUser();
    const [Title, setTitle] = useState('')
    const [Price, setPrice] = useState('')
    const [Address, setAddress] = useState('')
    const [Description, setDescription] = useState('')
    const temp = [];

    const fetchItems = async() => {
        console.log("fetching");
        http.get('/api/posts/').then((res) => {
            console.log(res);
            res.data.forEach(post => {
                temp.push(post)
            })
            setPostArray(temp);
        }).catch(() => {
            Navigate('/');
        })
    };

    const CreatePost = async() => {
        const data = {
            title: Title,
            price: Price,
            address: Address,
            description: Description
        }
        console.log(data);
        console.log(getToken());
        http.post('/api/posts/', data, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }).then((res) => {
            navigate('/');
            console.log(res.data);
        }).catch((error) => {
            alert("Nepavyko sukurti posto");
            navigate('/');
        })  
    };


    return(
        <section>
            {
                <div className="row Posts-Padding">
                    <div id="scrollbox" className="col overflow-auto">
                        <div className="container-fluid">
                            {getUser() != null ?(
                            <div>
                                <button type="button" onClick={CreatePost} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create post</button>
                            </div>
                            ) : null}
                            {getUser() != null ?(
                                        <div>
                                        <tr>
                                            <div>
                                                <th>
                                                    <div class="relative Post-padding">
                                                        <input type="text" id="floating_outlined" onChange={(e) =>{setTitle(e.target.value)}} class="block  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                        <label for="floating_outlined"  className="absolute Post-titlebg text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Title</label>
                                                    </div>
                                                </th>
                                            </div>
                                            <th>
                                                <div class="relative Post-padding">
                                                    <input type="text" id="floating_outlined" onChange={(e) =>{setDescription(e.target.value)}}class="block  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                    <label for="floating_outlined"   className="absolute Post-titlebg text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Description</label>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="relative Post-padding">
                                                    <input type="text" id="floating_outlined" onChange={(e) =>{setAddress(e.target.value)}}class="block  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                    <label for="floating_outlined"  className="absolute Post-titlebg text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Address</label>
                                                </div>
                                            </th>
                                            <th>
                                                <div class="relative Post-padding">
                                                    <input type="text" id="floating_outlined" onChange={(e) =>{setPrice(e.target.value)}}class="block  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-400 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                                    <label for="floating_outlined"  className="absolute Post-titlebg text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Price</label>
                                                </div>
                                            </th>
                                            
                                        </tr>
                                    </div>
                                    ) : null}
                            
                            <div className="row row-cols-4 ">
                                {postArray.map((post) =>
                                    (
                                        <Card class="bg-gray-750"
                                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                                            /*imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"*/>
                                            <img class="max-w-sm h-auto rounded-lg transition-all mx-auto duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description"></img>
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white Posts-h5">
                                                <Post title={post.title} id={post.id}/>
                                            </h5>
                                            <p className="font-normal text-gray-500 dark:text-gray-400 ">
                                                <Post address={post.address} id={post.id}/>
                                            </p>
                                        </Card>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
}

export default Home;