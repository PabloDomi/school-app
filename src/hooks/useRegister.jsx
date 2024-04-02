import registerService from '../services/registerService'
import { useNavigate } from 'react-router-dom'


export const useRegister = () => { 

    const navigate = useNavigate()

    const register = async ({usernameRegister, nameRegister, surnameRegister, passwordRegister, repeatPassword, email, rol, teacherToken}) => {

        try {
            const user = await registerService.register({
            username: usernameRegister,
            name: nameRegister,
            surnames: surnameRegister,
            password: passwordRegister,
            repeatPassword,
            email,
            rol,
            teacher_token: teacherToken
        })
    
            console.log(user)
        } catch(e) {
            console.error('error registrando', e)
        }
            
    }

    const validateEmail = (email, usernameRegister, passwordRegister) => {
        navigate('/validateEmail', { state: {props: {
            email: email,
            username: usernameRegister,
            password: passwordRegister
          }}})
    }

    return {
        register,
        validateEmail
    }
}