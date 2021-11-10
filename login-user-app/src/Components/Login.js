import React, { useState } from 'react';
import axios from 'axios'; 
import { setUserSession } from '../utils/common';


function Login(props) {
  
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const USERS_REST_API_URL = 'http://localhost:8080/api/getUserByEmailAndPassword';
  const USERS_REST_API_URL_USERS = 'http://localhost:8080/api/users';

  function handleLogin (){

  axios.post(USERS_REST_API_URL,{},
    {params:{
         // this is the body
        email: email, 
        password: password
       }},
       {
       headers: {
        "content-type": "application/json",
        "accept": "application/json"
      }
     }) .then(response => {
       console.log(response.data);
       if(response.data !== null && response.data[0].role !== 'EMPLOYEE'){
        response=null;
        axios.get(USERS_REST_API_URL_USERS, {
                   headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
        }).then(response => {
          console.log(response.data);
          setUserSession( response.data);
          props.history.push('/userDashboard');
        })
         
      }else{
       setUserSession( response.data);
       props.history.push('/userDashboard');
      }
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