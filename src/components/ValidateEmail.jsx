/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import putService from '../services/putServices'
import checkService from '../services/checkServices'
import otherService from '../services/otherServices'
import loginService from '../services/loginService'
import Notification from './Notification'


const ValidateEmail = () => {

    const [errorMessage, setErrorMessage] = useState(null)
    const [email, setEmail] = useState('')
    const location = useLocation()
    const navigate = useNavigate()


    const props = location.state?.props

    const setActiveUser = (user) => {
    
        const data = putService.setActiveUsername(user)
        return data
    }

    const handleChange = (event) => {
        event.preventDefault()
        
            setEmail(event.target.value)
    }

    const tryLogin = async () => {

        if(checkService.checkActive(props.username).validUsername) {
            try {

                const user = await loginService.login({
                  username: props.username, 
                  password: props.password
                })
    
                window.localStorage.setItem (
                    'loggedSchoolAppUser', JSON.stringify(user)
                  )

                otherService.setToken(user.access_token)
          
              } catch (e) {
                setErrorMessage('Error Trying to Log In')
                setTimeout(() => {
                  setErrorMessage(null)
                }, 5000)
              }
        } else {
            navigate('/validateEmail', { state: {props: {
                email: props.email,
                username: props.username,
                password: props.passwordRegister
              }}})
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(email)
        console.log(props.email)

        if(email === props.email) {
            setActiveUser(props.username)
            tryLogin()
            navigate('/login')
        } else {
            console.error("Error validando el email.")
        }   
    }

    const handleClick = (event) => {
        event.preventDefault()

        navigate('/login')
    }

    return (
        <>
            <Notification message={errorMessage}/>
            <form onSubmit = {handleSubmit}>
            <div>
                <input
                type='text'
                value={email}
                name='Username'
                placeholder='Confirm Email'
                onChange={handleChange}
                />
            </div>
            <button id='form-email-confirm-button' type="submit">
                Confirm
            </button>
            <button onClick={handleClick}>
                Back to Register
            </button>
            </form>
        </>
    )
}

export default ValidateEmail