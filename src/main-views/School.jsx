import { useState } from 'react'
import Notification from '../components/Notification'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useUser } from '../hooks/useUser'
import { useRegister } from '../hooks/useRegister'
import { Alert } from 'react-bootstrap'

function School() {
  
  const [errorMessage, setErrorMessage] = useState(null)

  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  const [usernameRegister, setUsernameRegister] = useState('')
  const [nameRegister, setNameRegister] = useState('')
  const [surnameRegister, setSurnameRegister] = useState('')
  const [passwordRegister, setPasswordRegister] = useState('')
  const [email, setEmail] = useState('') 
  const [rol, setRol] = useState('Alumno')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [teacherToken, setTeacherToken] = useState('')

  const {register, validateEmail} = useRegister()
  const {user, logout, login } = useUser()

  console.log(user)


  const handleLogin = async (event) => {
    event.preventDefault()
        try { 
          login({usernameLogin, passwordLogin})
          setUsernameLogin('')
          setPasswordLogin('')

        } catch (e) {
          setErrorMessage('Wrong credentials')
          setTimeout(() => {
          setErrorMessage(null)
          }, 5000)
        }

      
        
    
  }

  const handleRegister = async (event) => {
  event.preventDefault()

  try {
    register({usernameRegister, nameRegister, surnameRegister, passwordRegister, repeatPassword, email, rol, teacherToken})

    setSurnameRegister('')
    setUsernameRegister('')
    setNameRegister('')
    setPasswordRegister('')
    setEmail('')
    setRepeatPassword('')
    setTeacherToken('')
    validateEmail()

  } catch (e) {
    setErrorMessage('Wrong Register Data')
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }
    
  }

  return (
    <>
      <h1>School App</h1>
      <Notification message={errorMessage}/>
          { user 
            ?   <em>
                <Alert variant='success'>User <strong>{user.username}</strong> Logged In</Alert>
                </em>
            : 
                <LoginForm 
                username={usernameLogin}
                password={passwordLogin}
                handleUsernameChange={
                  ({ target }) => setUsernameLogin(target.value)
                }
                handlePasswordChange={
                  ({ target }) => setPasswordLogin(target.value)
                }
                handleSubmit={handleLogin} 
              />
          }
        { user
          ? <div>
                <footer>
                    <button onClick={logout} >Logout</button>
                </footer>
            </div>
          : <RegisterForm
              username = {usernameRegister}
              name = {nameRegister}
              surnames = {surnameRegister}
              password = {passwordRegister}
              email = {email}
              rol = {rol}
              repeatPassword = {repeatPassword}
              teacher_token = {teacherToken}
              handleUsernameChange={
                ({ target }) => setUsernameRegister(target.value)
              }
              handleNameChange={
                ({ target }) => setNameRegister(target.value)
              }
              handleSurnameChange={
                ({ target }) => setSurnameRegister(target.value)
              }
              handlePasswordChange={
                ({ target }) => setPasswordRegister(target.value)
              }
              handleEmailChange={
                ({ target }) => setEmail(target.value)
              }
              handleRolChange={
                ({ target }) => setRol(target.value)
              }
              handleRepeatPasswordChange = {
                ({ target }) => setRepeatPassword(target.value)
              }
              handleTeacherTokenChange = {
                ({ target }) => setTeacherToken(target.value)
              }
              handleSubmit={handleRegister}
              />
        }
    </>
  )
}

export default School
