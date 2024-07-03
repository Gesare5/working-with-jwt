import React, { createContext, useState, useEffect } from 'react';


const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({ children }) => {

    const [authTokens, setAuthTokens] = useState(null);
    const [user, setUser] = useState(null);


    const loginUser = async (name, pass) => {
        // e.preventDefault();
        console.log('form submitted')
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            Headers: {
                'Content-Type': 'application/json'
            },
            body: { 'username': name, 'password': pass }
        })
        let data = await response.json()
        console.log(response)
        console.log('data', data)
    }
    let contextData = {
        loginUser: loginUser
    }
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}