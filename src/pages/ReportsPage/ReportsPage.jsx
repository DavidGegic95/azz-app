import React, { useContext, useState } from 'react'
import './reportsPage.css'
import Select from '../../components/Select/Select'
import { appContext } from '../../context';
import CustomDatePicker from '../../components/DatePicker/DatePicker'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { v4 as uuidv4 } from 'uuid';





function ReportsPage() {
  const { allCompanies, candidateId, token, setIsSubmitted, setSelectedDate, selectedDate } = useContext(appContext)
  const [selectedOption, setSelectedOption] = useState({
    id: `${uuidv4()}`,
    companyName: "",
    status: "",
    phase: "",
    interviewDate: "",
    note: "",
    companyId: "",
    candidateName: `${candidateId.name}`,
    candidateId: `${candidateId.id}`
  })
  console.log(selectedOption);


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

  const allCompaniesObj = [...allCompanies]




  const saveAllNewReports = () => {
    fetch("http://localhost:3333/api/reports", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedOption)
    })
    setIsSubmitted(true)

  }





  const handler = (event) => {
    const newselectedOptions = { ...selectedOption };
    // newselectedOptions["note"] = event.target.value;
    newselectedOptions.note = event.target.value;

    setSelectedOption(newselectedOptions)
    console.log(newselectedOptions)

  }


  return (
    <div className='reportsPage'>
      
      <img className='hiringPicture' src='./images/jobss.jpg' alt=''></img>
      

      <div className='allSelects'>
      <h1 className='headReport'>Create report</h1>
      <Select className='selectReport' setSelectedOption={setSelectedOption} selectedOption={selectedOption} params="companyName" name="Company" tittleSelect={"Select company"} options={allCompaniesObj} ></Select>
      <Select className='selectReport' setSelectedOption={setSelectedOption} selectedOption={selectedOption} params="phase" name="Phase" tittleSelect={"Select phase"} options={phases} ></Select>
      <Select className='selectReport' setSelectedOption={setSelectedOption} selectedOption={selectedOption} params="status" name="Status" tittleSelect={"Select status"} options={options} ></Select>
      <CustomDatePicker className='selectReport' setSelectedDate={setSelectedDate} selectedDate={selectedDate} setSelectedOption={setSelectedOption} selectedOption={selectedOption} params="interviewDate" className='dropdown'></CustomDatePicker>
      <Box onChange={(e) => handler(e)}

        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50ch', },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-textarea"
            label="about candidate"
            placeholder="Notes"
          />
        </div>
      </Box>
      <Link to={`/candidatesPage`}>
        <Button onClick={saveAllNewReports} variant="outlined">Submit</Button>
      </Link>
      </div>
    </div >
  )
}

export default ReportsPage