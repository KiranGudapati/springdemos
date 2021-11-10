
import './App.css';
import {BrowserRouter ,Route, Routes, NavLink} from 'react-router-dom';

import Login from './components/Login';
import UserComponent from './components/UserComponent';
import AdminComponent from './components/AdminComponent';
import Dashboard from './components/Dashboard';
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <div>
          <div className="header">
           
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/">Dashboard</NavLink><small>(Access with token only)</small>
      </div>
    <div className="content">
      <Routes>
        <Route exact path ="/" element = {Dashboard}></Route>
        </Routes>
     </div>
     </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
