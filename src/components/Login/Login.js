import React from 'react';

const Login = () => {
    return (
        <div>
            <form className='flex flex-col w-1/3 mx-auto border border-gray-500 rounded p-4 mt-12'>
                <h1 className='text-3xl text-sky-600 text-center mb-6'>Log In</h1>
                <label className='text-xl text-gray-600'>Email</label>
                <input className='border border-gray-500 p-1 rounded mb-4' type="email" name="" id="" placeholder='Your Email'/>
                <label className='text-xl text-gray-600'>Password</label>
                <input className='border border-gray-500 p-1 rounded mb-4' type="password" placeholder='Password' />
                <button className='bg-gray-600 text-white p-2 rounded mb-4' type="submit">LogIn</button>
                <button className='bg-gray-600 text-white p-2 rounded'>Sign In With Google</button>
            </form>
        </div>
    );
};

export default Login;