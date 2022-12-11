import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import AuthUser from "../services/AuthUser";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function Nav() {

    const navigate = useNavigate();
    const {getUser, logout, getToken } = AuthUser();
    const { http} = AuthUser();

    useEffect(()=> {
        if(getUser() != null) {
            //console.log(getUser().role);
        }
        else {

        }
    
    })

    const logoutUser = async () => {

        console.log(getToken())
        http.get('/logout', {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getToken()}`
            },
        }).then((res) => {
            console.log(res.data);
        }).catch((error) => {
            alert("Nepavyko atjungti");
            navigate('/login');
        })  
        logout();
        navigate("/");
    }

    


    return(
        <nav class="p-3 border-gray-200 rounded bg-gray-900 dark:bg-gray-800 dark:border-gray-700">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" class="flex items-center">
                    <span class="self-center text-4xl  font-semibold whitespace-nowrap text-gray-300 dark:text-gray-400">Rental management</span>
                </a>
                <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul class="flex flex-col  rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                    <a href="/api/posts" class="block py-0 pl-3 pr-4 text-2xl flex items-center text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Posts</a>
                    </li>
                    {/* {getUser() ?(
                    <li>
                    <a href="/profile" class="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</a>
                    </li>) :null}  */}
                    {getUser() ?(
                        <li>
                        <a  href="/" onClick={logoutUser} class="block py-0 pl-3 pr-4 text-2xl flex items-center text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</a>
                        </li>
                    ) :(
                    <li>
                    <a href="/login" class="block py-0 pl-3 pr-4 text-2xl flex items-center text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                    </li>
                    )}
                </ul>
                </div>
            </div>
        </nav>

    );
}

export default Nav;