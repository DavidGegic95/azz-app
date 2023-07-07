import { TextField } from '@mui/material'
import React, { useState } from 'react'

const UpdateTextField = ({ defaultValue, updatedCandidateInfo, setUpdatedCandidateInfo, name }) => {
    const [value, setValue] = useState(defaultValue)
    console.log(updatedCandidateInfo);

    const handler = (event) => {
        const newselectedOptions = { ...updatedCandidateInfo }
        setValue(event.target.value)
        newselectedOptions[name] = event.target.value;
        setUpdatedCandidateInfo(newselectedOptions)

        // console.log(newselectedOptions)
        // setOption(event.target.value)
    }


    // const newselectedOptions = { ...selectedOption };
    // // newselectedOptions["note"] = event.target.value;
    // newselectedOptions.note = event.target.value;
    return (
        <TextField onChange={(e) => handler(e)} defaultValue={value} value={value} ></TextField>
    )
}

export default UpdateTextField  