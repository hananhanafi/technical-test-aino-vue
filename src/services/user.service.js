import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8081/api/user/';

class UserService {

  login(user) {
    
    const formData = new FormData();
    formData.append('email', user.email);
    formData.append('password', user.password);
    return axios
      .post(API_URL + 'login', formData)
      .then(response => {
        if (response.data.data.token) {
          window.localStorage.setItem('user', JSON.stringify(response.data.data.user));
        }

        return response.data;
      });
  }

  logout() {
    window.localStorage.removeItem('user');
  }

  register(user) {
    
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('password', user.password);

    return axios.post(API_URL + 'register', formData);
  }

  getAllUser() {
    return axios.get(API_URL + 'get-all', { headers: authHeader() })
  }
}

export default new UserService();
