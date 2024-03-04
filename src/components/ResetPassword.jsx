import React, { useState } from 'react'
import Axios from 'axios' 
import { Link, useNavigate, useParams } from 'react-router-dom'
import { URL } from '../App'


const ResetPassword = () => {
   const [password, setPassword] = useState('')
   const {token} = useParams()

   const navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()
      Axios.post(`${URL}/auth/reset-password`+token, {password})
         .then(res => {
            if(res.data.status) {
               navigate('/login')
            }
            console.log(res.data)
         })
         .catch((err) => console.log(err))
   }
  return (
   <div className='sign-up-container'>
   <form action="" className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <label htmlFor="password">New Password:</label>
      <input type="password" placeholder='********' onChange={(e) => setPassword(e.target.value)} />

      <button type='submit'>Reset</button>
   </form>a
 </div>
  )
}

export default ResetPassword