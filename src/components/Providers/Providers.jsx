import React, { createContext, useEffect } from 'react'
import app from '../../firebase/firebase.config'
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext=createContext()

const Providers = ({children}) => {

    const [users ,setUsers]=useState(null)
    const [loading,setLoading]=useState(true)

    const auth=getAuth(app)
    const googleProvider=new GoogleAuthProvider()

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
     const unSubscribe =onAuthStateChanged(auth,currentUser=>{
        setUsers(currentUser)
        console.log(currentUser)
        setLoading(false)
     })
     return ()=>{
        return unSubscribe();
     }
    },[])

    const userinfo={
        createUser,
        signIn,
        signInWithGoogle
    }

  return (
    <AuthContext.Provider value={userinfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default Providers