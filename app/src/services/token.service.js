function insertToken(accessToken) {
    localStorage.setItem('accessToken', accessToken)
}

function getLocalAccessToken() {
   return localStorage.getItem('accessToken') 
}

const TokenService = {
    insertToken,
    getLocalAccessToken
}

export default TokenService