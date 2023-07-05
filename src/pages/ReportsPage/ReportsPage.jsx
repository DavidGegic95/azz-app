import React, { useContext, useState } from 'react'
import './reportsPage.css'
import Select from '../../components/Select/Select'
import { appContext } from '../../context';
import CustomDatePicker from '../../components/DatePicker/DatePicker'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';





function ReportsPage() {
  const { allCompanies } = useContext(appContext)
  const [selectedOption, setSelectedOption] = useState({});

  const options = [
    { value: 'passed', name: 'Passed' },
    { value: 'not passed', name: 'Not passed' },
  ];

  const phases = [
    { value: 'CV', name: 'CV' },
    { value: 'HR', name: 'HR' },
    { value: 'Tech', name: 'Tech' },
    { value: 'Final', name: 'Final' },
  ]







  return (
    <div>
      <h1>Create report</h1>
      <Select selectedOption={selectedOption} setSelectedOption={setSelectedOption} name={"Company"} tittleSelect={"Select company"} options={allCompanies} ></Select>
      <Select selectedOption={selectedOption} setSelectedOption={setSelectedOption} name={"Phase"} tittleSelect={"Select phase"} options={phases} ></Select>
      <Select setSelectedOption={setSelectedOption} name={"Status"} tittleSelect={"Select status"} options={options} ></Select>
      <CustomDatePicker className='dropdown'></CustomDatePicker>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-textarea"
            label="Notes about Candidate"
            placeholder="Notes"
          />
        </div>
      </Box>
      <Link to={`/candidatesPage`}>
        <Button variant="outlined">Submit</Button>
      </Link>
    </div >
  )
}

export default ReportsPage