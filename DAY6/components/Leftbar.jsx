import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice.jsx';

function Leftbar() {

    const dispatch= useDispatch();
    const navigate=useNavigate();

const dashboardHandler = ()=>{
    navigate('/Dashboard')
}
const settingsHandler = ()=>{
    navigate('/Settings')
}
const usersHandler = () =>{
    navigate('/Users')
}
const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')
}

    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={dashboardHandler}>
                     Dashboard
                    </button>
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                        vegetables
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                        fruits
                    </button>
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                        Logout
                    </button>
                    

                </div>
            </div>
        </>
    )
}

export default Leftbar