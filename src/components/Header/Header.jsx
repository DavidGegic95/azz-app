import React from 'react'
import './header.css'
import { TextField } from '@mui/material'


function Header({setInputName}) {


  const handleSearch = (e) => {
    setInputName(e.target.value)
  }


  return (


   <header>
     <TextField onChange={(e) => handleSearch(e)}></TextField>

   </header>

  )
}

export default Header