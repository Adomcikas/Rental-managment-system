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
    let { id1, id2, id3 } = useParams();
    const navigate = useNavigate();
    const { http, getUser, getToken } = AuthUser();
    const [Review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    let temp = 0;
    let tempp = 0;

    useEffect(() => {
        fetchReview();
    }, []);

    const fetchReview= async() => {

        console.log(id1);
        console.log(id2);
        console.log(id3);
        http.get(`/api/posts/${id1}/api/comments/${id2}/api/reviews/${id3}`).then((res) => {
            setReview(res.data);
        }).catch(() => {
            alert("Klaida su komentaru");
        });

    };
    const editReview= async() => {

        console.log(id1);
        console.log(id2);
        console.log(id3);

        const data = {
            rating: rating,
        }
        http.put(`/api/posts/${id1}/api/comments/${id2}/api/reviews/${id3}`, data, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            alert("Nepavyko Koreguoti review");
            navigate(`/api/posts/${id1}/api/comments/${id2}`);
        })  
        navigate(`/api/posts/${id1}/api/comments/${id2}`);
    };
    const DeleteReview= async() => {

        console.log(id1);
        console.log(id2);
        console.log(id3);
        http.delete(`/api/posts/${id1}/api/comments/${id2}/api/reviews/${id3}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            alert("Nepavyko pasalinti review");
            navigate(`/api/posts/${id1}/api/comments/${id2}`);
        })  
        navigate(`/api/posts/${id1}/api/comments/${id2}`);
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

    return (
        <div className="max-w-5xl">
            <div>
                <h5 className="text-3xl font-bold tracking-tight text-gray-400 dark:text-white ">
                    {Review.rating}
                </h5>
            </div>
            <div class=" items-center justify-between mb-4">
            {getUser() != null ?(
                        <div>
                        <tr>
                            <th>
                                <h5 style={{width: "100px", height: "50px"}}class="text-sm font-medium text-gray-300 truncate dark:text-white Post-padding">
                                    Apply Review
                                </h5>
                            </th>
                            <th>
                                <h5 style={{width: "150px", height: "50px"}} class="text-sm font-medium text-gray-300 truncate dark:text-white Post-padding">
                                    <StarRating />
                                </h5>
                            </th>
                            <th>
                                <h5 style={{width: "75px", height: "50px"}} class="text-sm font-medium text-gray-300 truncate dark:text-white Post-padding">
                                    {rating}
                                </h5>
                            </th>
                        </tr>
                    </div>

                    ) : null}

            </div>
            {getUser() != null && (getUser().id == Review.userId || getUser().role == "Admin") ?(
                <div class="flex items-center">
                    <button type="button" onClick={editReview} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit review</button>
                    <button type="button" onClick={DeleteReview} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete review</button>
                </div>
                ) : null}

        </div>
    );
}

export default Home;