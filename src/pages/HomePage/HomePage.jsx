import React from 'react'
import jwt_decode from 'jwt-decode'
import './homePage.css'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  const isTokenValid = function() {
    if(!!token){
      const decodedToken = jwt_decode(token)
      const currentDate = new Date();
      if(decodedToken.exp * 1000 < currentDate.getTime()){
        return false
      }
      else {
        return true
      }
    }
    else {
      return false
    }
  }
  console.log(isTokenValid())
  const loginButton = function (){
    if(isTokenValid()){
      navigate("/candidatesPage")
    }else{
      navigate("/loginPage")
    }
  }

  
  return (
    <div>
      <button onClick={loginButton} class="login">Login</button>
      <img src="/images/employment.jpeg" alt="" />
    </div>
  )
}

export default HomePage