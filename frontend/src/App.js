import './App.css';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Registration from './pages/Registration';
import Login from './pages/Login';
import api from './api/axiosConfig'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Account from './pages/Account';
import RequireAuth from './hoc/RequireAuth';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/account" element={
          <RequireAuth>
            <Account/>
          </RequireAuth> 
        } />
          
          {/* <Route path="/about" element={<About/>} />
          <Route path="/"/registration" element={<Contact/>} />  */}
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
