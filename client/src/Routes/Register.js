import React from "react";
import '../App.css';
import {useEffect, useState} from "react";
import AuthUser from "../services/AuthUser";

function Home() {

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

        if(passwordReq != passwordReqConfirma) {
            setError("Passwords do not mach");
            setLoading(false);
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
            setLoading(false);
        });
    };

    return(
        <section>
            <div>
                <div>
                    <h1>Registration</h1>
                    <form className="App-table">
                        <label>Email</label>
                        <p><input type="Text" placeholder="Enter your email" onChange={(e) =>{setEmailReq(e.target.value)}}/></p>
                        <label>Username</label>
                        <p><input type="Text" placeholder="Enter your username" onChange={(e) =>{setUsernameReq(e.target.value)}}/></p>
                        <label>Password</label>
                        <p><input type="Password" placeholder="Enter your password" onChange={(e) =>{setPasswordReq(e.target.value)}}/></p>
                        <label>Repeat password</label>
                        <p><input type="Password" placeholder="Enter your password" onChange={(e) =>{setPasswordReqConfirm(e.target.value)}}/></p>
                    </form>
                    <p><button onClick={register}> Register</button></p>
                </div>
            </div>
        </section>
    );
}

export default Home;