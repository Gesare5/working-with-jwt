import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    let { loginUser } = useContext(AuthContext);
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });
    const handleOnChange = (evt) => {
        const { name, value } = evt.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value
        });
    };


    const userSubmit = (e) => {
        e.preventDefault();
        if (loginInfo.username && loginInfo.password) {
            loginUser(loginInfo, navigate)
        }
    }

    return (
        <div>
            <Header />
            <form onSubmit={userSubmit}>
                <input type='text' name='username' placeholder='Enter username' value={loginInfo.username} onChange={handleOnChange} />
                <input type='password' name='password' placeholder='Enter Password' value={loginInfo.password} onChange={handleOnChange} />
                <input type='submit' />
            </form>
        </div>
    );
};

export default LoginPage;