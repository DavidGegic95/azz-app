import React from "react"
import "./input.css";
import TextField from "@mui/material/TextField";// import Box from '@mui/material/Box';




function Input({ name, type, change, error }) {
  return (
    <TextField
      type={type}
      helperText={error && "Incorrect entry."}
      error={error}
      placeholder={name}
      name={name}
      onChange={change}

    />
  )

}






export default Input
