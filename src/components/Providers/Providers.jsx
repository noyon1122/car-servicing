import React, { createContext, useEffect } from 'react'
import app from '../../firebase/firebase.config'
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext=createContext()

const Providers = ({children}) => {

    const [user ,setUser]=useState(null)
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
        setUser(currentUser)
       // console.log(currentUser)
        setLoading(false)
     })
     
     return ()=>{
        return unSubscribe();
     }

    },[])
    //console.log(user)
    const userinfo={
        createUser,
        signIn,
        signInWithGoogle,
        user,
        loading
    }

  return (
    <AuthContext.Provider value={userinfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default Providers