import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from "../components/Header";


const PrivateRoute = (props) => {
    const { component: Component} = props;
    const authenticated = false

    return (
        <div>
            <Header />
            {!authenticated ?
                <Navigate to='/login' replace /> :
                <Component />
            }
        </div>
    )
}

export default PrivateRoute;