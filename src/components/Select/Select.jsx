import React, { useEffect, useState } from 'react';
import './select.css'
import { Form } from 'react-router-dom';
import CustomDatePicker from '../DatePicker/DatePicker'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
// import { AppProvider } from '../../context';
import { Link } from 'react-router-dom';

function Select() {
  const [selectedOption, setSelectedOption] = useState('');
  
function selectCompany () {
  fetch('http://localhost:3333/api/companies')
.then(response => response.json())
.then(data => {
  // setSelectedOption(data)
  console.log(data);

})}

useEffect (() => {
  selectCompany();
}, [])


  const options = [
    { value: 'passed', label: 'Passed' },
    { value: 'not passed', label: 'Not passed' },
  ];

  const phases = [
    {  value:'CV', label: 'CV' },
    {  value:'HR', label: 'HR' },
    {  value:'Tech', label: 'Tech' },
    {  value:'Final', label: 'Final' },
  ]

  

  return (
    <div >
      <h1>Create report</h1>
      <h2>Company</h2>
      <div className='selectDropdown'>
<select className='dropdown'

        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select Company</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <br></br>
          <h2>Fill Reports Detail</h2>
          <div>
      <select className='dropdown'
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Phase</option>
        {phases.map((phase) => (
          <option key={phase.value} value={phase.value}>
            {phase.label}
          </option>
        ))}
      </select>
      </div>

<div>
      <select className='dropdown'
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Status</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        
      </select>
      </div>
      <CustomDatePicker className='dropdown'></CustomDatePicker>
          </div>

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
<Link to={`/CandidatesPage`}>
<Button variant="outlined">Submit</Button>
</Link>
    </div>
    )
}



export default Select





































