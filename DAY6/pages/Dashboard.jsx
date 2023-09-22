import React from 'react'
import '../assets/Style.css'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice.jsx'
function Dashboard() {
    const user=useSelector(selectUser)
    return (
        <>
            <Layout />
            <div className='main-wrapper'>
                <div className='welcomes-container'>
                    <h1  className=' username-color'> Welcome👋🏻 </h1>
                    <h1>{user.username}</h1>
                </div>
                <div className='claim-container'>
                    <h1  className=' username-color'> vegetables  </h1>
                    <h1 className='count'>56</h1>
                </div>
                <div className='renewal-container'>
                    <h1 className=' username-color'> fruits! </h1>
                    <h1 className='count'>56</h1>
                </div>

            </div>
        </>
    )
}

export default Dashboard