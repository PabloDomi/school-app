import putService from "../services/putServices"
import Notification from "./Notification"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const LoginForm =  () => {

    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [password_token, setPassword_token] = useState('')

    const location = useLocation()
    const userData = location.state?.userData
    const navigate = useNavigate()

    const handleNewPasswordChange = (event) => {
        event.preventDefault()

        setNewPassword(event.target.value)
    }

    const handlePasswordTokenChange = (event) => {
        event.preventDefault()

        setPassword_token(event.target.value)
    }

    const handleConfirmNewPasswordChange = (event) => {
        event.preventDefault()

        setConfirmNewPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(userData.forgot_password) {
            if (newPassword === confirmNewPassword && userData.oldPassword !== newPassword) {
                try {
                    putService.changePasswordForgot(
                        {
                            "username": userData.username,
                            "password": newPassword,
                            "password_token": password_token 
                        }
                    )

                    setErrorMessage('Password Changed. Redirecting...')
                    setTimeout(() => {
                    setErrorMessage(null)
                    navigate('/login')
                    }, 4000)
    
                } catch(e) {
                    setErrorMessage('Unauthorized. Password Token Invalid.')
                }
            } else {
            setErrorMessage('Error en el input de las contraseñas.')
            }
        } else {
            if (newPassword === confirmNewPassword && userData.oldPassword !== newPassword) {
                try {
                    putService.changePassword(
                        {
                            "username": userData.username,
                            "password": newPassword, 
                        }
                    )
    
                    setErrorMessage('Password Changed. Redirecting...')
                    setTimeout(() => {
                    setErrorMessage(null)
                    navigate('/login')
                    }, 4000)
                    
                } catch(e) {
                    setErrorMessage('Unauthorized. Password Token Invalid.')
                }
            } else {
            setErrorMessage('Error en el input de las contraseñas.')
            }
        }

       
    }


    return(
        <div>
            <Notification message={errorMessage} />
            {   userData.forgot_password
                ?   <form onSubmit={handleSubmit}>
                        <div>
                            <input 
                                    type='password'
                                    value={newPassword}
                                    name='Username'
                                    placeholder='New Password'
                                    onChange={handleNewPasswordChange}
                                />
                        </div>
                        <div>
                            <input 
                                    type='password'
                                    value={confirmNewPassword}
                                    name='Username'
                                    placeholder='Confirm New Password'
                                    onChange={handleConfirmNewPasswordChange}
                                />
                        </div>
                        <div>
                            <input 
                                    type='password'
                                    value={password_token}
                                    name='Username'
                                    placeholder='Introduce Password Token'
                                    onChange={handlePasswordTokenChange}
                                />
                        </div>
                        <div>
                            <button type="submit" >
                                Confirm New Password
                            </button>
                        </div>
                    </form>
                :  <form onSubmit={handleSubmit}>
                <div>
                    <input 
                            type='password'
                            value={newPassword}
                            name='Username'
                            placeholder='New Password'
                            onChange={handleNewPasswordChange}
                        />
                </div>
                <div>
                    <input 
                            type='password'
                            value={confirmNewPassword}
                            name='Username'
                            placeholder='Confirm New Password'
                            onChange={handleConfirmNewPasswordChange}
                        />
                </div>
                <div>
                    <button type="submit" >
                        Confirm New Password
                    </button>
                </div>
            </form>
            }
               
        </div>
    )
}

export default LoginForm