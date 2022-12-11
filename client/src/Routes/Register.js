import React from "react";
import '../App.css';
import {useState} from "react";
import AuthUser from "../services/AuthUser";
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const { http } = AuthUser();
    const [usernameReq, setUsernameReq] = useState('')
    const [passwordReq, setPasswordReq] = useState('')
    const [passwordReqConfirma, setPasswordReqConfirm] = useState('')
    const [EmailReq, setEmailReq] = useState('')
    const [Error, setError] = useState('')

    const [isLoading, setLoading] = useState(false);

    const register = () => {
        if(isLoading)
            return;
        setLoading(true);

        if(passwordReq !== passwordReqConfirma) {
            setLoading(false);
            console.log("Passwords do not mach");
            return;
        }

        http.post("/register", {
            username: usernameReq,
            password: passwordReq,
            email: EmailReq,
        }).then((response) => {
            setUsernameReq('');
            setPasswordReq('');
            setPasswordReqConfirm('');
            setEmailReq('');
            console.log(response);
        }).catch((error) => {
            if(error.response.data.error != null) {
                alert(error.response.data.error);
            } else if(error.response.data.errors != null) {
                var errors = error.response.data.errors;
                var all_errors = [];
                Object.keys(errors).map((err) => (
                    all_errors.push(errors[err][0])
                ))
                alert(all_errors.join("\n"));
            }
        }).finally(() => {
            navigate('/login')
        });
    };

    return(
        <section>
            <div>
                <div>
                    <h1>Registration</h1>
                    <form className="App-table">
                        <label>Email</label>
                        <p><input type="text" placeholder="Enter your username" onChange={(e) =>{setEmailReq(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></p>
                        <label>Username</label>
                        <p><input type="text" placeholder="Enter your username" onChange={(e) =>{setUsernameReq(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></p>
                        <label>Password</label>
                        <p><input type="password" placeholder="Enter your username" onChange={(e) =>{setPasswordReq(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></p>
                        <label>Repeat password</label>
                        <p><input type="password" placeholder="Enter your username" onChange={(e) =>{setPasswordReqConfirm(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></p>
                    </form>
                    <button type="button" onClick={register} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Register</button>
                </div>
            </div>
        </section>
    );
}

export default Home;