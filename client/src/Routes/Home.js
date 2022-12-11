import React from "react";
import AuthUser from "../services/AuthUser";

function Home() {

    const { getUser } = AuthUser();

    const login = () => {
        if(getUser() != null)
            console.log(getUser().name);
        else {
            console.log("not signed in");
        }
    };

    return(
        <section>
            <div>
                <h1>Hello</h1>
                <p>Welcome to the home page</p>
                <p><button onClick={login}> Login</button></p>
            </div>
        </section>
    );
}

export default Home;