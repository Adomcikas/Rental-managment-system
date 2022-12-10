import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import AuthUser from "../services/AuthUser";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { HttpStatusCode } from 'axios';


function Nav() {

    const navigate = useNavigate();
    const { http, getToken, getUser, logout } = AuthUser();

    useEffect(()=> {
        if(getUser() != null) {
            console.log(getUser().role);
        }
        else {

        }
    
    })

    const Auth = () => {
        if(getUser().role === null){
            return true;
        }
        else {
            return false;
        }

    };

    const logoutUser = async () => {
        logout();
        navigate("/");
    }

    


    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <div id="navMainMenu" class="navbar-collapse collapse">
                <h2>
                    <div class="navbar-nav ml-auto">
                        <Link to='/' className="nav-item nav-link">Rental management</Link>
                    </div>
                </h2>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/api/posts' className="nav-item nav-link" >Posts</Link>
                    {getUser() ?(<Link to='/profile' className="nav-item nav-link">Profile</Link>) :null} 
                    {getUser() ?(
                        <Link onClick={logoutUser} className="nav-item nav-link">Logout</Link>
                    ) :(
                        <Link to='/login' className="nav-item nav-link">Login</Link>
                    )}
                    
                </div>
            </div>
        </nav>
    );
}

export default Nav;