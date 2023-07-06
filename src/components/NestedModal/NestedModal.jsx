import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Moment from 'react-moment';
import Table from "../Table/Table"
import { TextField } from '@mui/material';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal({ singleCandidate, name, email, birthday, candidateIdprops, allReports }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [updatedCandidateInfo, setupdatedCandidateInfo] = useState({
        avatar: `${singleCandidate.avatar}`,
        birthday: `${singleCandidate.birthday}`,
        education: `${singleCandidate.education}`,
        email: `${email}`,
        id: `${singleCandidate.id}`,
        name: `${singleCandidate.name}`,
    })







    console.log(singleCandidate);

    const reportsByCandidateID = []
    allReports.map(report => {
        if (report.candidateId == candidateIdprops) {
            reportsByCandidateID.push(report)
        }

    })

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Update</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Candidate Name:
                    </Typography>
                    <TextField 
                        defaultValue={name} required />
                    <br />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Candidate email:
                    </Typography>
                    <TextField
                        defaultValue={email} required />
                    <br />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Candidate birthday:
                    </Typography>
                    <TextField
                        defaultValue={singleCandidate.birthday} required />
                    <br />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Candidate education:
                    </Typography>
                    <TextField
                        defaultValue={singleCandidate?.education} required />
                    <br />
                    <Button onClick={handleClose}>Save Changes</Button>


                </Box>
            </Modal>

        </React.Fragment>
    );
}

export default function NestedModal({ singleCandidate, name, email, birthday, candidateIdprops, allReports }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const reportsByCandidateID = []
    allReports.map(report => {
        if (report.candidateId == candidateIdprops) {
            reportsByCandidateID.push(report)
        }

    })

    return (
        <div>
            <Button onClick={handleOpen}><VisibilityIcon /></Button>
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
                        email: <br />
                        {email}
                        <br />

                        birthday: <br />

                        <Moment format="DD/MM/YYYY">{birthday}</Moment>
                    </Typography>


                    <Table reportsByCandidateID={reportsByCandidateID}
                    />


                    <ChildModal singleCandidate={singleCandidate} candidateIdprops={candidateIdprops} allReports={allReports} birthday={birthday} email={email} name={name} />
                </Box>
            </Modal>
        </div>
    );
}