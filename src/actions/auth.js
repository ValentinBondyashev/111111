import axios from 'axios';

export function checkAuthAction() {
    let token = localStorage.getItem('token');
    return { 
      type: 'CHECK_AUTH', 
      payload: {
        token: token === null ? "" : token
      }
    }  
}