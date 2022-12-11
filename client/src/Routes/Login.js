import React from "react";
import '../App.css';
import {useState} from "react";
import AuthUser from "../services/AuthUser";
import { useNavigate } from 'react-router-dom';

function Home() {


    const navigate = useNavigate();
    const { http, setToken, getToken, } = AuthUser();

    const [usernameReq, setUsernameReq] = useState('')
    const [passwordReq, setPasswordReq] = useState('')

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
                        <div class="mb-6">
                            <label>Username</label>
                            <input type="text" placeholder="Enter your username" onChange={(e) =>{setUsernameReq(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div class="mb-6">
                            <label>Password</label>
                            <input type="Password" placeholder="Enter your password" onChange={(e) =>{setPasswordReq(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                    </form>
                    <button type="button" onClick={login} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button>
                </div>
            </div>
        </section>
    );
}

export default Home;