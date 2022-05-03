import React, {useContext} from 'react';
import MyInput from "../Components/UI/Input/MyInput";
import MyButton from "../Components/UI/Button/MyButton";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='enter login'/>
                <MyInput type='password' placeholder='enter password'/>
                <MyButton>Log In</MyButton>
            </form>
        </div>
    );
};

export default Login;