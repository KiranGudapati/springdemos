import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUserById().then((response) => {
            this.setState({users: response.data})
        });
    }

    render(){
        return (
            <div>
               <h1 className ="text-center"> User Info</h1>
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
                          this.state.users.map(
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

export default UserComponent;