import { AppProvider } from './context';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import { useEffect, useState } from 'react';
import CandidatesPage from './pages/CandidatesPage/CandidatesPage';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ReportsPage from "./pages/ReportsPage/ReportsPage"






function App({ selectedDate, setSelectedDate }) {

  const [isChecked, setIsChecked] = useState(false)
  const [token, setToken] = useState(!isChecked ? localStorage.getItem("token") : sessionStorage.getItem("token"))
  const [allCandidates, setAllCandidates] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)
  const [allReports, setAllReports] = useState([])
  const [allCompanies, setAllCompanies] = useState([])



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




  function selectCompany() {
    fetch('http://localhost:3333/api/companies')
      .then(response => response.json())
      .then(data => {
        console.log(data) || setAllCompanies(data)

      })
  }



  useEffect(() => {
    getAllReports()
    getAllCandidates()
    selectCompany()
  }, [isDeleted])



  return (
    <AppProvider value={{ setToken, setIsChecked, isChecked, allCandidates, token, isDeleted, setIsDeleted, allReports, allCompanies }}>


      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/candidatesPage" element={<CandidatesPage />} />
          <Route path='/loginPage' element={<LoginPage />} />
          <Route path='/reportsPage' element={<ReportsPage />} />


        </Routes>

        {/* //  <LoginPage></LoginPage> */}
        {/* <CandidatesPage></CandidatesPage> */}

      </div>

    </AppProvider>


  );
}

export default App;
