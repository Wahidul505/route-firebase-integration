import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleLogIn = e => {
        e.preventDefault();
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div>
            <form onSubmit={handleLogIn} className='flex flex-col w-1/3 mx-auto border border-gray-500 rounded p-4 mt-12'>
                <h1 className='text-3xl text-sky-600 text-center mb-6'>Log In</h1>
                <label className='text-xl text-gray-600'>Email</label>
                <input className='border border-gray-500 p-1 rounded mb-4' type="email" name="" id="" placeholder='Your Email' />
                <label className='text-xl text-gray-600'>Password</label>
                <input className='border border-gray-500 p-1 rounded mb-4' type="password" placeholder='Password' />
                <button className='bg-gray-600 text-white p-2 rounded mb-4' type="submit">LogIn</button>
                <button onClick={handleSignInWithGoogle} className='bg-gray-600 text-white p-2 rounded'>Sign In With Google</button>
            </form>
        </div>
    );
};

export default Login;