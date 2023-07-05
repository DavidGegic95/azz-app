import { AppProvider } from './context';
import './App.css';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <AppProvider>



      <div className="App">
        <HomePage></HomePage>

      </div>







    </AppProvider>


  );
}

export default App;
