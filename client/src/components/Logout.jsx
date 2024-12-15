import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut } = useContext(AuthContext); // Make sure to match the function name in your context
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('Sign-out successful!!'); // Display logout message
                navigate('/login'); // Redirect to the login page
            })
            .catch((error) => {
                console.error('Logout error:', error); // Log the error for debugging
            });
    };

    return (
        <div className='h-screen bg-white flex items-center justify-center'>
            <button className='bg-teal-700 px-8 py-2 text-white rounded' onClick={handleLogout}>
                Log Out
            </button>
        </div>
    );
};

export default Logout;
