import axios from 'axios';
import TokenService from './token.service';

function signin(credentials) {
  return axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, credentials)
    .then(response => {
        const {accessToken} = response.data
        if(accessToken) TokenService.insertToken(accessToken)
    })
}

export {
    signin
}