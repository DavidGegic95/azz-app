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



    < header className='headerContainer' >
      <div className='logoLeft'>MDSP</div>
      <TextField placeholder='Search candidates' sx={{ width: "400px", }} onChange={(e) => handleSearch(e)}></TextField>
      <Button sx={{ height: "56px", width: "130px" }} className='logoutButton' onClick={deleteToken} variant="outlined">Log out</Button>







    </header >

  )
}

export default Header