import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Mylogin from './Mylogin';
import AccountData from './AccountData';
import { Route,Routes } from 'react-router-dom';
import { Login } from '@mui/icons-material';
import Header from './Header';
import Home from './Home';

  function App() {
    return (
      <>
       <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Mylogin/>}/>
          <Route path='reg' element={<Registration/> } />
          <Route path='dash' element={<AccountData /> } />
        </Routes>
    
        
        <ToastContainer />
      </>
    )
  }

export default App;
