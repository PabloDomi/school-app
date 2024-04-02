import Notification from "./Notification"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import checkService from "../services/checkServices"
import getService from "../services/getServices"


const ForgotPassword = () => {

    const [oldPassword, setOldPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const userData = location.state?.prop

    const handleOldPasswordChange = (event) => {
        event.preventDefault()

        setOldPassword(event.target.value)
    }

    const handleEmailChange = (event) => {
        event.preventDefault()

        setEmail(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(userData.forgot_password) {
            try {
                const response = await checkService.checkForgotPassword(email)
                const isEmailValid = response.validEmail

                if(isEmailValid) {
                    try {
                        const response = await getService.getPasswordToken(userData.username)
                        const password_token = response.password_token

                        checkService.checkSendEmailToken(password_token)

                        navigate('/login')
                    } catch(e) {
                        setErrorMessage('Password token is null')
                    }
                    
                }
            } catch(e) {
                setErrorMessage('El email introducido no existe')
            }
        } else {
            try {

                const response = await checkService.checkSamePassword(oldPassword, userData.username)
                const isSamePassword = response.samePassword

                if(isSamePassword) {
                    navigate('/changePassword', { state: {userData: {
                        username: userData.username,
                        oldPassword: oldPassword,
                        forgot_password: false
                    }}})
                }
            } catch(e) {
                setErrorMessage('Las contraseñas no son iguales')
            }
        }
    }

    return (
        <div>
            <Notification message={errorMessage}/>
            {   userData.forgot_password
                ?   <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input 
                                    type='text'
                                    value={email}
                                    name='Username'
                                    placeholder='Email'
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <button id='form-change-password-button'>
                                Confirm
                            </button>
                        </form>
                    </div> 
                :   <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input 
                                    type='password'
                                    value={oldPassword}
                                    name='Username'
                                    placeholder='Old Password'
                                    onChange={handleOldPasswordChange}
                                />
                            </div>
                            <button id='form-change-password-button' >
                                Confirm
                            </button>
                        </form>
                    </div> 
            }  
        </div>
    )
}

export default ForgotPassword