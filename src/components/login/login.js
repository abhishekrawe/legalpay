import React , {useState} from 'react'
import "./login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Login = ({setLoginUser}) => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email : "",
    password:""
  })


  const handleChange = e => {
    const { name , value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }

  const login = () => {
    axios.post("https://legalpay-backend.onrender.com/login" , user)
    .then(res => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate("/")
    })
       
  }

  return (
    <div className='login'>
      {console.log(user)}
        <h1> Welcome to Banking system </h1>
        <input type="text" name = "email"  value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
        <input type="password" name = "password"  value={user.password} onChange={handleChange} placeholder="Enter Password"></input>
        <div className="button" onClick={login}>
            Login
        </div>
        <div> New User ? Register Now 👇 </div>
        <div className='button' onClick={() => navigate("/register")}> Register</div>
    </div>
  )
}

export default Login