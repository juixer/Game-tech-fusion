import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../FireBase/FireBase";
export const AuthContext = createContext(null)
// third party providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // google LogIn
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // createUSer
    const createUser =(email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // update user
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
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
        githubLogin,
        createUser,
        updateUser,
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