import React from "react";
import '../App.css';
import {useEffect, useState} from "react";
import AuthUser from "../services/AuthUser";
import { useNavigate } from 'react-router-dom';

function Home() {


    const navigate = useNavigate();
    const { http, setToken, getToken, } = AuthUser();

    const [usernameReq, setUsernameReq] = useState('')
    const [passwordReq, setPasswordReq] = useState('')
    const [Error, setError] = useState('')
    const [isLoading, setLoading] = useState(false);

    const login = () => {
        if(isLoading)
            return;
        console.log(getToken());
        setLoading(true);
        console.log(usernameReq);
        console.log(passwordReq);

        http.post('/login', {
            username: usernameReq,
            password: passwordReq 
        }).then((res) => {
            console.log(res.data);
            setToken(res.data.user, res.data.access_token);

        }).catch((error) => {
            alert("Blogi prisijungimo duomenys");
            navigate('/login');
        })  
    };

    return(
        <section>
            <div>
                <div>
                    <h1>Sign in</h1>
                    <form className="App-table">
                        <label>Username</label>
                        <p><input type="Text" placeholder="Enter your username" onChange={(e) =>{setUsernameReq(e.target.value)}}/></p>
                        <label>Password</label>
                        <p><input type="Password" placeholder="Enter your password" onChange={(e) =>{setPasswordReq(e.target.value)}}/></p>
                    </form>
                    <p><button onClick={login}> Login</button></p>
                </div>
            </div>
        </section>
    );
}

export default Home;