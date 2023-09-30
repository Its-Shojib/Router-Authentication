import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from './../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup,GithubAuthProvider } from 'firebase/auth'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    let createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    let Logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    let SigninWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    let SigninWithGithub = ()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Observing', currentUser);
            setUser(currentUser);
            setLoading(false);
            
        });
        return () => {
            unSubscribe();
        }
    }, [])
    let authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        Logout,
        SigninWithGoogle,
        SigninWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;