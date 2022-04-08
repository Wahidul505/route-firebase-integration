import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user}= useFirebase();
    return (
        <div>
            <nav className='flex gap-6 justify-center p-4'>
            <Link className='hover:text-orange-500' to='/home'>Home</Link>
            <Link className='hover:text-orange-500' to='/products'>Products</Link>
            <Link className='hover:text-orange-500' to='/orders'>Orders</Link>
            <Link className='hover:text-orange-500' to='/register'>Register</Link>
            <Link className='hover:text-orange-500' to='/login'>LogIn</Link>
            </nav>
        </div>
    );
};

export default Header;