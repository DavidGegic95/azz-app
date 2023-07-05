import { AppProvider } from './context';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { useEffect, useState } from 'react';
import CandidatesPage from './pages/CandidatesPage/CandidatesPage';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ReportsPage from "./pages/ReportsPage/ReportsPage"
import Select from './components/Select/Select';
// import StepperApp from './components/StepperApp/StepperApp';
// import { ThemeProvider, createTheme } from '@mui/material/styles';





function App({selectedDate, setSelectedDate}) {

  const [isChecked, setIsChecked] = useState(false)
  const [token, setToken] = useState(!isChecked ? localStorage.getItem("token") : sessionStorage.getItem("token"))
  const [allCandidates, setAllCandidates] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)
  const [allReports, setAllReports] = useState([])
 

  
  const getAllReports = () => {
    fetch("http://localhost:3333/api/reports", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,    ///headers u GET metodi na nije potreban, za razliku od DELETE metode
        "Content-Type": "application/json",
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(data => setAllReports(data))
  }





  const getAllCandidates = () => {
    fetch("http://localhost:3333/api/candidates", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,    ///headers u GET metodi na nije potreban, za razliku od DELETE metode
        "Content-Type": "application/json",
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(data => setAllCandidates(data))
  }



  useEffect(() => {
    console.log(token);
    getAllReports()
    getAllCandidates()
    console.log("posle");
    console.log(token);



  }, [isDeleted])










  return (
    <AppProvider value={{ setToken, setIsChecked, isChecked, allCandidates, token, isDeleted, setIsDeleted, allReports }}>


      <div className="App">
        <Routes>
          <Route path="/candidatesPage" element={<CandidatesPage />} />
          <Route path='/loginPage' element={<LoginPage />} />
          <Route path='/reportsPage' element={<ReportsPage />} />

        </Routes>


        {/* //  <LoginPage></LoginPage> */}
        {/* <CandidatesPage></CandidatesPage> */}







{/* <StepperApp></StepperApp> */}

    <Select></Select>
    


      </div>







    </AppProvider>

   
);
}

export default App;
