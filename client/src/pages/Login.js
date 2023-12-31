
import React, { useState } from "react";
import './About.css';

function Login({ attemptLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    function handleSubmit(e) {
        e.preventDefault();
        attemptLogin({ username, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="login">Login</h2>

            <input
                type="text"
                onChange={handleChangeUsername}
                value={username}
                placeholder="username"
            />

            <input
                type="password" 
                onChange={handleChangePassword}
                value={password}
                placeholder="password"
            />

            <input type="submit" value="Login" />
        </form>
    );
}

export default Login;
