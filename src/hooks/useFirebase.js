import { useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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
    }
    return {
        user,
        setUser,
        googleSignIn
    }
}
export default useFirebase;