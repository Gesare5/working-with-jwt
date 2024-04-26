import React from 'react';
import Header from "../components/Header";


const PrivateRoute = (props) => {
    const { component: Component} = props;

    return (
        <div>
            <Header />
            <Component />
        </div>
    )
}

export default PrivateRoute;