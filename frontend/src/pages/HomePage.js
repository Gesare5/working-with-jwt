import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const { authTokens, logoutUser } = useContext(AuthContext);

    useEffect(() => {
        getNotes()
    }, []);

    let getNotes = async () => {
        let response = await fetch('http://localhost:8000/notes/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        let data = response.json()
        if (response.status === 200) {
            setNotes(data);
        }
        else if (response.statusText === 'Unauthorized') {
            logoutUser(navigate);
        }
    }


    return (
        <div>
            <p>You are logged in to the home page</p>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>{note.body}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;