export const getUser = () => {
    const userStr = JSON.parse(sessionStorage.getItem('users') || "[]");
    if (userStr) return userStr;
    else return null;
  }
   
  // return the token from the session storage
//   export const getToken = () => {
//     return sessionStorage.getItem('token') || null;
//   }
   
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    //sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
   
  // set the token and user from the session storage
  export const setUserSession = (users) => {
    //sessionStorage.setItem('token', token);
    sessionStorage.setItem('users', JSON.stringify(users));
  }