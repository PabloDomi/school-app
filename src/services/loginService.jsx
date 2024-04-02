import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/login'

const login = async credentials => {
    try{
        const { data } = await axios.post(baseUrl, credentials)
        return data 
    } catch(e) {
        console.error("Error en el Log In")
    }
}

export default { login }