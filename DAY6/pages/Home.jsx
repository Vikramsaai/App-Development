import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <h1  className='log_logs'>NATURE'S BASKET</h1>
    <Link to='/Login' className='log_log'>Login</Link>

    </>
  )
}

export default Home