import React from 'react';
import UserService from '../services/UserService';
import { getUser, removeUserSession } from '../utils/common';
class AdminComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    // componentDidMount(){
    //     UserService.getUsers().then((response) => {
    //         this.setState({data: response.data})
    //     });
    // }

    render(){
        console.log("testt");
        
        return (
            <div>
               <h1 className ="text-center"> Users Info</h1>
               <table className = "table table-striped">
                   <thead>
                       <tr>
                           <td> User Id</td>
                           <td> User Name</td>
                           <td> User Email</td>
                           <td> User Role</td>
                       </tr>
                   </thead>
                   <tbody>
                      {
                          this.state.data.map(
                              user =>
                              <tr key = {user.id}>
                                  <td> {user.id} </td>
                                  <td> {user.name} </td>
                                  <td> {user.email} </td>
                                  <td> {user.role} </td>
                              </tr>
                          )
                      }
                   </tbody>
               </table>
            </div>
        )
    }
}

export default AdminComponent;