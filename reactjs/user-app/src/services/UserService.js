import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:8080/api';

class UserService{

    getUsers(){
        USERS_REST_API_URL = USERS_REST_API_URL + '/users';
        return axios.get(USERS_REST_API_URL);
    }
    getUserByEmailAndPassword(email,password){
        USERS_REST_API_URL = USERS_REST_API_URL + '/getUserByEmailAndPassword/'+email+'/'+password;
        return axios.get(USERS_REST_API_URL);
    }
    getUserById(Id){
        USERS_REST_API_URL = USERS_REST_API_URL + '/getUserById/'+Id;
        return axios.get(USERS_REST_API_URL);
    }
}

export default new UserService();