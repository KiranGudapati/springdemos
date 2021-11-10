import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserDashboard from './Components/UserDashboard';
import { Switch } from 'react-router';
import Login from './Components/Login';


function App() {
  return (
    <Router>
      {/* <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/blogs">Blog Articles</Link>
      </div>
      <div>
        <Link to="/contact">Contact Me</Link>
      </div>

      <hr /> */}

      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/userDashboard" exact component={UserDashboard}></Route>
        </Switch>
    </Router>
  );
}

export default App;
