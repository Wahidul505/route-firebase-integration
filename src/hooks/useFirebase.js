import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(res =>{
            const user = res.user;
            console.log(user)
            setUser(user);
        })
        .catch(err => console.log(err.message));
    };
    const handleSignOut = () =>{
        signOut(auth)
        .then(()=> console.log('signed out'))
        .catch(err => console.log(err.message));
    };
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
        })
    },[])
    return {
        user,
        handleSignOut,
        googleSignIn
    }
}
export default useFirebase;