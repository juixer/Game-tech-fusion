import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../FireBase/FireBase";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // google LogIn
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // SignOut
    const userSignOut = () => {
        return signOut(auth)
    }
    // Current USer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            return() =>{
                unSubscribe();
            }
        })
    },[])
    const authInfo = {
        googleLogin,
        userSignOut,
        user
    }
    
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;