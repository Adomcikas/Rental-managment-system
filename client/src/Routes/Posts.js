import React, {useEffect, useState} from "react";
import {Link, Navigate} from 'react-router-dom';
import AuthUser from "../services/AuthUser";
import Post from "../components/Post"
import './Posts.css';

function Home() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const [postArray, setPostArray] = useState([]);
    const { http, setToken, getToken, } = AuthUser();
    const temp = [];

    const fetchItems = async() => {
        console.log("fetching");
        http.get('/api/posts/').then((res) => {
            console.log(res);
            res.data.forEach(post => {
                const postTemp = {
                    id: post.id,
                    title: post.title,
                    price: post.price,
                    address: post.address,
                    description: post.description
                }
                temp.push(post)
            })

            setPostArray(temp);
        }).catch(() => {
            Navigate('/');
        })
    };
    return(
        <section>
            {
                <div className="row Posts-Padding">
                    <div id="scrollbox" className="col overflow-auto">
                        <div className="container-fluid">
                            <div className="row row-cols-4">
                                {postArray.map((post) =>
                                    (
                                        <div className="col">
                                            <div >
                                                <table className="Posts-table">
                                                    <h1><i>
                                                        <Post title={post.title}/>
                                                    </i></h1>
                                                        <Post address={post.address}/>
                                                </table>
                                            </div>
                                        </div>
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