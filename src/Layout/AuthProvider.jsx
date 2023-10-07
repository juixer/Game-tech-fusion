import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../FireBase/FireBase";
export const AuthContext = createContext(null)
// third party providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading]= useState(true)

    // google LogIn
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // createUSer
    const createUser =(email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // update user
    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }
    // user login
    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // SignOut
    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // Current USer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            return () => {
                unSubscribe()
            }
        })
    },[])
    const authInfo = {
        googleLogin,
        githubLogin,
        userLogIn,
        createUser,
        updateUser,
        userSignOut,
        loading,
        user
    }
    
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;