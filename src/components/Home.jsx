import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../App'

const Home = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
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
    
      {user === '' ? <p>user not found</p> : <div><p>{user.username}</p><p>{user.email}</p></div> }
  
  
      <button><Link to={'/dashboard'} >Dashboard</Link></button>
      <br />
      <br />
      <button onClick={handleLogout} >Logout</button>
    </div>
  )
}

export default Home
