import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';


import AdminComponent from './AdminComponent';
import UserComponent from './UserComponent';
import Dashboard from './Dashboard';

import { setUserSession } from '../utils/common';





function Login(props) {
  
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  //const history = useHistory();
 

  // useEffect(() =>{
  //   if(localStorage.getItem('user-info')){
  //     history.push("/AdminComponent")
  //   }
  // })
  
 // let history = useHistory();
  const USERS_REST_API_URL = 'http://localhost:8080/api/getUserByEmailAndPassword';

  // handle button click of login form
  const handleLogin = () => {
    
    fetch(USERS_REST_API_URL, {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          email: email, 
          password: password  
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setUserSession( response);
       // this.setState({users:data})
        //history.push({pathname: '/AdminComponent',state: response});
        props.history.push('/Dashboard');
        //return <Redirect to='/AdminComponent'  />
      })
      .catch(err => {
        console.log(err);
      });    
    
  }


  return (
    <div>
      <br /><br />
     
      <div className="col-sm-6 offset-sm-3">
        Email<br />
        <input type="text" value={email}  onChange={e => setEmail(e.target.value)} className="form-control"/>
      
      <br/>
      
        Password<br />
        <input type="password" {...password} onChange={e=> setPassword(e.target.value)} className="form-control" />
      
      <input type="button" value={'Submit'} onClick={handleLogin} className="btn btn-primarynpm" /><br />
      </div>
    
     
  </div>
  );
}

export default Login;