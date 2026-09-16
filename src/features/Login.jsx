import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { login } from '../redux/UserSlice/UserSlice';
import { toast } from 'react-toastify';
import "./Login.css"

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {message , isAuth } = useSelector((state)=> state.user);
    const [loginForm, setloginForm] = useState({
        username: "",
        password:  "",
    })
   
    const inputHandler = (e) =>{
        setloginForm((prevForm)=>({
           ...loginForm,
           [e.target.name]: e.target.value,
        })  )  
    }
    const loginHandler = (e)=>{
        e.preventDefault();
          console.log("Login button clicked");
  console.log(loginForm);
        dispatch(login(loginForm));
    }

  const loginMessageHandler = () => {
  toast.success("Login successful!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

    useEffect(()=>{
        if(isAuth){
                    toast.success("Login Successful!");

            navigate("/");
        }
    },[isAuth, navigate])

  return (
   <div className="login-container">
  <form className="login-form" onSubmit={loginHandler}>
    <div className="form-group">
      <label>Username</label>
      <input
        type="text"
        placeholder="Enter your username"
        name="username"
        value={loginForm.username}
        onChange={inputHandler}
      />
    </div>

    <div className="form-group">
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        value={loginForm.password}
        onChange={inputHandler}
      />
    </div>

    <button type="submit">Login</button>
  </form>
</div>
  )
}

export default Login