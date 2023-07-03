import { AppProvider } from './context';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { useEffect, useState } from 'react';

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"))
  const[isChecked,setIsChecked]=useState(false)


  const getAllCandidates = () => {
    fetch("http://localhost:3333/api/candidates", {
      method: "GET",
      headers: {
        "Authorizatiion": `Bearer ${token}`,
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  useEffect(() => {
    getAllCandidates()
  }, [])



  return (
    <AppProvider value={{setToken,setIsChecked,isChecked}}>

      {token ? <>asdbabs</> : null}

      <div className="App">
       <LoginPage></LoginPage>




      </div>







    </AppProvider>


  );
}

export default App;
