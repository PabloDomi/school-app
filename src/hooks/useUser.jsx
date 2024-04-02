import { useState, useEffect } from 'react'
import otherService from '../services/otherServices'
import getService from '../services/getServices'
import loginService from '../services/loginService'
import { useNavigate } from 'react-router-dom'
import { useActive } from './useActive'
//import { useGlobalState } from './useGlobalState'

  export function useUser () {
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    const { isUserActive } = useActive() 
    //const {globalState, setGlobalState } = useGlobalState()

    useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('loggedSchoolAppUser')
      if(loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        otherService.setToken(user.access_token)
      }
    }, [])

    const login = async ({usernameLogin, passwordLogin}) => {

      if(usernameLogin !== undefined) {
        if(isUserActive(usernameLogin)) {
          try {
            const userLogin = await loginService.login({
            username: usernameLogin, 
            password:  passwordLogin
            })

            window.localStorage.setItem (
              'loggedSchoolAppUser', JSON.stringify(userLogin)
            )

            otherService.setToken(userLogin.access_token)
            console.log(userLogin)

            //setGlobalState({...globalState, user: user })
            setTimeout(() => {
              navigate('/')
            }, 500)
            

          } catch(e) {
            console.error('Error login', e)
          }    

        } else {
            const emailUserResponse = await getService.getEmail(usernameLogin)
            const emailUser = emailUserResponse.email

            console.log(emailUser)

            setTimeout(() => {
                navigate('/validateEmail', { state: {props: {
                    email: emailUser,
                    username: usernameLogin,
                    password: passwordLogin
                }}})
            }, 5000)
        }
      } else {
        console.error('Login trying to log user undefined')
      }
    }

    const logout = () => {
        setUser(null)
        //setGlobalState({...globalState, user: user })
        otherService.setToken('')
        window.localStorage.removeItem("loggedSchoolAppUser")
        navigate('/login')
    
    }

    return {
      user,
      logout,
      login,
    }
  }
