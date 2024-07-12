import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Header from "../components/Header";
import AuthContext from '../context/AuthContext';


const PrivateRoute = (props) => {
    const { component: Component } = props;
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Header />
            {!user ?
                <Navigate to='/login' replace /> :
                <Component />
            }
        </div>
    )
}

export default PrivateRoute;