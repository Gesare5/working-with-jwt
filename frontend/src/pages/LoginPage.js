import React, { useState } from 'react';

const LoginPage = () => {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    });

    const handleOnChange = (evt)=>{
        const { name, value } = evt.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value
        });
    };
    return (
        <div>
            <form>
               <input type='text' name='username' placeholder='Enter username' value={loginInfo.username} onChange={handleOnChange}/> 
                <input type='password' name='password' placeholder='Enter Password' value={loginInfo.password} onChange={handleOnChange}/> 
                <input type='submit'/>
            </form>
        </div>
    );
};

export default LoginPage;