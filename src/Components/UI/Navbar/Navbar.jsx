import React, {useContext} from 'react';
import "../../../Styles/App.css"
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/context";
import MyButton from "../Button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            {isAuth && <MyButton onClick={logout}> Log Out</MyButton>}
            <div className='navbar__links'>
                <Link to='/about'>about</Link>
                <Link to='/posts'>posts</Link>
            </div>
        </div>
    );
};

export default Navbar;