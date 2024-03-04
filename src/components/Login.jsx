import React from 'react'
import { useState } from 'react'
import Axios from 'axios' 
import { Link, useNavigate } from 'react-router-dom'
import { URL } from '../App'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const navigate = useNavigate()

   Axios.defaults.withCredentials = true
   const handleSubmit = (e) => {
      e.preventDefault()
      Axios.post(`${URL}/auth/login`, { email, password})
         .then(res => {
            if(res.data.status) {
               navigate('/')
            }
         })
         .catch((err) => console.log(err))
   }

  return (
    <div className='sign-up-container'>
      <form action="" className="sign-up-form" onSubmit={handleSubmit}>
         <h2>Login</h2>
         <label htmlFor="email">Email:</label>
         <input type="email" autoComplete={'off'} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      
         <label htmlFor="password">Password:</label>
         <input type="password" placeholder='********' onChange={(e) => setPassword(e.target.value)} />

         <button type='submit'>Login</button>
         <Link to={'/forgotPassword'} >Forgot Password?</Link>
         <p>Don't Have Account? <Link to={'/signup'} >Sign Up</Link></p> 
      </form>
    </div>
  )
}

export default Login