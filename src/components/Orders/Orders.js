import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='text-3xl text-orange-400 font-semibold text-center mt-12'>
            {
                user?.displayName && <h1>Hey {user.displayName}, <br /> Your Orders...</h1>
            }
        </div>
    );
};

export default Orders;