import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { URL } from '../App'

const Dashboard = () => {
   const [user, setUser] = useState('')
   const navigate = useNavigate()
   axios.defaults.withCredentials = true
   useEffect(() => {
      axios.get(`${URL}/auth/verify`)
         .then(res => {
            if(res.data.status){
               setUser(res.data.data);
            } else {
               navigate('/')
            }
         })
   }, [])
  return (
    <div>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default Dashboard