import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';


const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null);
    const [navigate, setNavigate] = useState(() => { console.log('called navigate') });
    const [loading, setLoading] = useState(true);

    const loginUser = async (logininfo, navigate) => {
        // e.preventDefault();
        setNavigate(navigate);
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...logininfo })
        })
        let data = await response.json();
        console.log('data', data);
        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
            navigate('/');
        } else {
            alert('Something went wrong!');
        }
    }

    const logoutUser = (navigate) => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate('/login');
    }

    const refreshToken = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'refresh': authTokens?.refresh })
        });
        let data = await response.json();

        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
        } else {
            // alert('Something went wrong!');
            logoutUser(navigate);
        }

        if (loading) {
            setLoading(false)
        }
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser
    }

    useEffect(() => {
        if (loading) {
            refreshToken()
        }
        let fiveMinutes = 1000 * 4 * 60;
        let interval = setInterval(() => {
            if (authTokens) {
                refreshToken()
            }
        }, fiveMinutes);
        return () => clearInterval(interval);

    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}