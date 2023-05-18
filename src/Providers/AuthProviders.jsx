import { createContext, useEffect, useState,  } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProviders = ({children}) => {
    const [user, setUser] = useState();
    const googleProvider = new GoogleAuthProvider();

    const creatcUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    })

    const authInfo = {user, creatcUser, signInUser, logOut, loginWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;