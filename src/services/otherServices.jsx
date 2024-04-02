import axios from "axios"

const baseUrl = 'http://localhost:3000/api/services'


let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const deleteById = (id) => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const request = axios.delete(`${baseUrl}/${id}`, config)
  return request.then(response => response.data)
} 

export default { setToken, deleteById }