import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Header = () => {
    let { user, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div>
            <Link to='/'>Home</Link>
            <span> | </span>
            {user ? (<button onClick={() => logoutUser(navigate)}>Logout</button>) : (
                <Link to='/login'>Login</Link>
            )
            }
            {user && <p>Hello {user.username}</p>}
        </div>
    );
};

export default Header;