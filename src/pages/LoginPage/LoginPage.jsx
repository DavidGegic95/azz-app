import React, { useState, useContext } from 'react'
import './loginPage.css'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from "@mui/material/FormControlLabel"
import Avatar from "@mui/material/Avatar"
import { appContext } from '../../context';
// import OutlinedInput from '@mui/material/OutlinedInput';
import { Navigate, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'



function LoginPage() {
  const { setToken, setIsChecked, isChecked } = useContext(appContext)

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState(false)

  const navigate = useNavigate()


  const login = () => {
    fetch(`http://localhost:3333/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // ovo je samo za PUT/POST/DELETE NAKON LOGINA!!!
        // "Authorizatiion": `Bearer ${token}`
        // ---------------------------------------------
      },
      body: JSON.stringify(loginInfo)
    })
      .then(response => {
        if (!response.ok) {
          setError(true)
        }
        else {
          return response.json();
        }
      })
      .then(data => {
        // console.log(data)
        if (data) {
          setToken(data?.accessToken)
          { isChecked ? localStorage.setItem("token", data?.accessToken) : sessionStorage.setItem("token", data?.accessToken) }

          navigate("/candidatesPage")
        }
      })
  }

  const handler = (event) => {
    const newLoginInfo = { ...loginInfo };
    newLoginInfo[event.target.name] = event.target.value;
    setLoginInfo(newLoginInfo);
    // console.log(newLoginInfo);

  }

  return (
    <div className='loginPage'>
      <Avatar alt="signin" src=''></Avatar>
      <p>Sign in</p>


      <Input error={error} name="email" change={handler} type='text' />
      <Input error={error} name="password" change={handler} type='password' />
      {/* {error&&<p>Eroooooor</p>} */}

      <FormControlLabel onClick={() => setIsChecked((prev) => !prev)} setIsChecked={setIsChecked} control={<Checkbox defaultChecked={isChecked} />} label="remeber me" />

      <Button loginInfo={loginInfo} click={login} />


    </div>
  )
}

export default LoginPage 