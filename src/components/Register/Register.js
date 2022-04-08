import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Register = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const handleSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col w-1/3 mx-auto border border-gray-500 rounded p-4 mt-12'>
            <h1 className='text-3xl text-sky-600 text-center mb-6'>Register</h1>
                <label className='text-xl text-gray-600'>Name</label>
                <input className='border border-gray-500 p-1 rounded mb-4' type="text" placeholder='Enter Your Name' />
                <label className='text-xl text-gray-600'>Email</label>
                <input className='border border-gray-500 p-1 rounded mb-4' type="email" name="" id="" placeholder='Your Email'/>
                <label className='text-xl text-gray-600'>Password</label>
                <input className='border border-gray-500 p-1 rounded mb-4' type="password" placeholder='Password' />
                <label className='text-xl text-gray-600'>Confirm Password</label>
                <input className='border border-gray-500 p-1 rounded mb-4' type="password" placeholder='Confirm Password' />
                <button className='bg-gray-600 text-white p-2 rounded mb-4' type="submit">Register</button>
                <button onClick={()=>signInWithGoogle()} className='bg-gray-600 text-white p-2 rounded'>Sign In With Google</button>
            </form>
        </div>
    );
};

export default Register;