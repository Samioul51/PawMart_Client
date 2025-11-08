import React from 'react';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../Firebase/firebase.init.js'

export const AuthContext=createContext();

const auth=getAuth(app);

const AuthProvider = ({children}) => {
    
    return <AuthContext>{children}</AuthContext>
};

export default AuthProvider;