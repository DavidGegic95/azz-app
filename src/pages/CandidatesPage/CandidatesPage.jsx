import React, { useContext, useState } from 'react'
import './candidatesPage.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { appContext } from '../../context';
import BasicModal from '../../components/Modal/Modal';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/base';
import { v4 as uuidv4 } from 'uuid';
import { Navigate, useNavigate } from 'react-router-dom';
import NestedModal from '../../components/NestedModal/NestedModal';




function CandidatesPage() {
  const { allCandidates, token, setIsDeleted, allReports, setCandidateId, setSelectedDate, selectedDate } = useContext(appContext)
  const navigate = useNavigate()
  console.log(allReports);

  const [inputName, setInputName] = useState("");

  const filteredCandidates = allCandidates?.filter(candidate => {
    return candidate?.name?.toLowerCase().includes(inputName.toLowerCase())
  })

  // console.log(allCandidates);
  // console.log(filteredCandidates);
  // console.log(token);

  const deleteCandidate = (candidateID) => {

    console.log(token);
    console.log("////////");
    fetch(`http://localhost:3333/api/candidates/${candidateID}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify()
    })
    setIsDeleted(prev => !prev)

  }

  const clickCreateReport = (candidate) => {
    setCandidateId(candidate)
    navigate("/reportsPage")
  }




  return (

    <div className='candidatesPage'>

      <Header setInputName={setInputName} allCandidates={allCandidates} />

      <div className='allCandidatesCards'>
        {filteredCandidates?.length > 0 && filteredCandidates?.map((singleCandidate, index) => {
          return (

            <div className='candidateCard' key={uuidv4()}>
              <img className='candidateImage' key={uuidv4()} src={singleCandidate?.avatar} alt="" />
              <p className='candidateName' key={uuidv4()}>{singleCandidate?.name}</p>


              <div className='buttonsDiv'>
                <NestedModal selectedDate={selectedDate} setSelectedDate={setSelectedDate} singleCandidate={singleCandidate} candidateIdprops={singleCandidate?.id} allReports={allReports} birthday={singleCandidate?.birthday} email={singleCandidate?.email} name={singleCandidate?.name} key={uuidv4()} />
                <Button className='createButton' onClick={() => clickCreateReport(singleCandidate)}>

                  <CreateIcon />
                </Button>
                <Button className='deleteButton' onClick={() => deleteCandidate(singleCandidate?.id)}>
                  <DeleteIcon />

                </Button>
              </div>
            </div>

          )
        })}
        {filteredCandidates?.length === 0 && <div><p>No candidate by that name</p></div>}

      </div>


      <Footer />

    </div>
  )
}

export default CandidatesPage