import axios from "axios"

const checkUsernameUrl = 'http://localhost:3000/api/checkUsername'
const checkEmailExistsUrl = 'http://localhost:3000/api/checkEmailExists'
const checkActiveUrl = 'http://localhost:3000/api/checkActive'
const checkSamePasswordUrl = 'http://localhost:3000/api/checkSamePassword'
const sendEmailTokenUrl = 'http://localhost:3000/api/sendEmailToken'

const checkUsername = (username) => {
  
    const request = axios.get(`${checkUsernameUrl}/${username}`)
    return request.then(response => response.data)
  }
  
  const checkForgotPassword = (email) => {
    
    const request = axios.get(`${checkEmailExistsUrl}/${email}`)
    return request.then(response => response.data)
  }
  
  const checkActive = (username) => {
    
    const request = axios.get(`${checkActiveUrl}/${username}`)
    return request.then(response => response.data)
  }
  
  const checkSamePassword = (password, username) => {
  
    const request = axios.get(`${checkSamePasswordUrl}/${password}/${username}`)
    return request.then(response => response.data)
  }

  const checkSendEmailToken = (password_token) => {
    const request = axios.get(`${sendEmailTokenUrl}/${password_token}`)
    return request.then(response => response.data)
  }

  export default { checkUsername, checkActive, checkForgotPassword, checkSamePassword, checkSendEmailToken}