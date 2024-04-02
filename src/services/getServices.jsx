import axios from "axios"

const getEmailUrl = 'http://localhost:3000/api/getEmail'
const getPasswordTokenUrl = 'http://localhost:3000/api/getPasswordToken'


const getEmail = (username) => {
  
    const request = axios.get(`${getEmailUrl}/${username}`)
    return request.then(response => response.data)
}
  
  const getPasswordToken = (username) => {
    const request = axios.get(`${getPasswordTokenUrl}/${username}`)
    return request.then(response => response.data)
}

export default { getEmail, getPasswordToken}
