import { getUser, removeUserSession } from '../utils/common';

const UserDashboard = (props) => {
    const users = getUser();
    return <div>
    <h1 className ="text-center"> Users Information</h1>
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
                users.map(
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
  };
  
  export default UserDashboard;