import axios from "axios"

const setActiveUrl = 'http://localhost:3000/api/updateActive'
const changePasswordForgotUrl = 'http://localhost:3000/api/changePasswordForgot'
const changePasswordUrl = 'http://localhost:3000/api/changePassword'

const setActiveUsername = (username) => {
    const user = {
      "username": username
    }
  
    const request = axios.put(setActiveUrl, user)
    return request.then(response => response.data)
}

const changePasswordForgot = (user) => {
  
    const request = axios.put(changePasswordForgotUrl, user)
    return request.then(response => response.data)
}
  
const changePassword = (user) => {
    
    const request = axios.put(changePasswordUrl, user)
    return request.then(response => response.data)
}

export default { setActiveUsername, changePasswordForgot, changePassword }
