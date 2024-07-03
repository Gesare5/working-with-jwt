import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
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

    let { loginUser } = useContext(AuthContext);

    const userSubmit = (e) => {
        e.preventDefault();
        if (loginInfo.username && loginInfo.password) {
            loginUser(loginInfo.username, loginInfo.password)
        }
    }

    return (
        <div>
            <form onSubmit={userSubmit}>
                <input type='text' name='username' placeholder='Enter username' value={loginInfo.username} onChange={handleOnChange} />
                <input type='password' name='password' placeholder='Enter Password' value={loginInfo.password} onChange={handleOnChange} />
                <input type='submit' />
            </form>
        </div>
    );
};

export default LoginPage;