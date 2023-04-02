import axios from '../axios';
import React from 'react';
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const token = localStorage.getItem('accessToken') || null;
    const [config, setConfig] = useState(false);

    
    const login = async (details) => {
        await axios.post(`/auth/login`, details, { withCredentials: true }).then((res) => {
            setcurrentUser(res.data.other) 
            localStorage.setItem("accessToken", res.data.accessToken)
            setConfig({
                headers: { token: `Bearer ${res.data.accessToken}` },
            })
        })
    }

    useEffect(() => {
        if (currentUser !== undefined) {
            localStorage.setItem('user', JSON.stringify(currentUser))
        }
    }, [currentUser])

    return <AuthContext.Provider value={{ currentUser, login, setcurrentUser, token, config, setConfig }}>
        {children}
    </AuthContext.Provider>
}