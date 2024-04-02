import axios from "axios"

const studentUrl = 'http://localhost:3000/api/registerStudent'
const teacherUrl = 'http://localhost:3000/api/registerTeacher'

const registerStudent = (newObject) => {
  

    const request = axios.post(studentUrl, newObject)
    return request.then(response => response.data)
}
  
const registerTeacher = (newObject) => {
    
    const request = axios.post(teacherUrl, newObject)
    return request.then(response => response.data)
}

export default { registerStudent, registerTeacher }