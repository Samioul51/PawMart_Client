import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword,getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.init.js'

export const AuthContext=createContext();

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    // Register

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // Login

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // Google Login

    const signInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    // Logout

    const logout=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);

    const authData={
        user,
        setUser,
        createUser,
        loading,
        setLoading,
        logout,
        signIn,
        signInWithGoogle
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;