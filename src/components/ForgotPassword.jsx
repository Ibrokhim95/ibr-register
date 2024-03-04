import React, { useState } from 'react'
import Axios from 'axios' 
import { Link, useNavigate } from 'react-router-dom'
import { URL } from '../App'


const ForgotPassword = () => {
   const [email, setEmail] = useState('')

   const navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()
      Axios.post(`${URL}/auth/forgot-password`, {email})
         .then(res => {
            if(res.data.status) {
               alert('check you email for rest password link')
               navigate('/login')
            }
         })
         .catch((err) => console.log(err))
   }
  return (
   <div className='sign-up-container'>
   <form action="" className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <label htmlFor="email">Email:</label>
      <input type="email" autoComplete={'off'} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
   
      <button type='submit'>Send</button>
   </form>a
 </div>
  )
}

export default ForgotPassword