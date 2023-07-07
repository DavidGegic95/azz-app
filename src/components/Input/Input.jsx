import React from "react"
import "./input.css";
import TextField from "@mui/material/TextField";




function Input({ name, type, change, error }) {
  return (
    <TextField
      sx={{ height: "56px", width: "260px" }}
      type={type}
      helperText={error && "Incorrect entry."}
      error={error}
      placeholder="Email"
      name={name}
      onChange={change}

    />
  )

}






export default Input
