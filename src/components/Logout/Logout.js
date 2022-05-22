import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/User/userSlice';


export const Logout = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout());
        navigate('/');
    }
    return (
        <div className='logout'>
            <input type="submit" value="Logout" onClick={handleClick} />
        </div>

    );
};