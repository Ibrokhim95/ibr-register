import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../App'

const Home = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    axios.get(`${URL}/auth/logout`)
      .then(res => {
        if(res.data.status) {
          navigate('/login')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      home
      <button><Link to={'/dashboard'} >Dashboard</Link></button>
      <br />
      <br />
      <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Home
