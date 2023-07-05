import React from 'react'
// import * as React from 'react';
import './modal.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Moment from 'react-moment';

import Table from "../Table/Table"




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({name,email,birthday,candidateIdprops,allReports}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(allReports);
  const reportsByCandidateID=[]
  allReports.map(candidate => {
   if(candidate.candidateId===candidateIdprops){
    reportsByCandidateID.push(candidate)
   }

  })
  console.log(reportsByCandidateID);

  return (
    <div>
      <Button onClick={handleOpen}><VisibilityIcon/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            email: <br/>
           {email}
           <br/>

           birthday: <br/>

           <Moment format="DD/MM/YYYY">{birthday}</Moment>
          </Typography>


        <Table reportsByCandidateID={reportsByCandidateID} />


          {/* { reportsByCandidateID.map((report)=>{
            return(
              <div>
                {report.companyName}
                {report.phase}
                {report.status}

              </div>
            )
          })
            
          } */}

        </Box>
      </Modal>
    </div>
  );
}
