import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1 className='text-center text-3xl text-orange-500 font-semibold'>{user?.displayName ? `Welcome Back ${user.displayName}`:''}</h1>
        </div>
    );
};

export default Home;