import React, { createContext, useState, useEffect } from 'react';


const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({children}) => {
    return(
        <AuthContext.Provider value={{'name': 'Ivy'}}>
            {children}
        </AuthContext.Provider>
    )
}