import React from 'react'
import './header.css'
import { TextField, Button } from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom';


function Header({ setInputName }) {
  const navigate = useNavigate()


  const handleSearch = (e) => {
    setInputName(e.target.value)
  }

  const deleteToken = () => {
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    navigate("/")
  }


  return (


    <header>
      <TextField onChange={(e) => handleSearch(e)}></TextField>
      <Button onClick={deleteToken} variant="outlined">Log out</Button>







    </header>

  )
}

export default Header