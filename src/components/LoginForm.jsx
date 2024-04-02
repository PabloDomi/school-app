import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Notification from "./Notification"
import { Form, Button } from 'react-bootstrap'




/* eslint-disable react/prop-types */
    export default function LoginForm ({ handleSubmit, ...props }) {

    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const togglableRef = useRef

    const handleSubmits = (event) => {
        event.preventDefault()
    
            handleSubmit(event)
            togglableRef.current.toggleVisibility()
        }

    const checkProps = () => { 
        if(!!props.username | !!props.password) { 
            return true
        } else {
            return false
        }
    }

    const handleClickForgotPassword = (event) => {
        event.preventDefault()

        if(checkProps()) {
            console.log(props)

            navigate('/forgotPassword', { state: {prop: {
                username: props.username,
                forgot_password: true
            }}})
        } else {
            setErrorMessage('Debe introducir el nombre de usuario')
        }
        
    }

    const handleClickChangePassword = (event) => {
        event.preventDefault()

        if(checkProps()) {
            console.log(props)

            navigate('/forgotPassword', { state: {prop: {
                username: props.username,
                forgot_password: false
            }}})
        } else {
            setErrorMessage('Debe introducir el nombre de usuario')
        }
    }

    return (
            <section>
                <header className='min-vh-100  text-light shadow'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 m-auto">
                                <div className="card border-1 shadow">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <svg    
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="30" 
                                                height="30" 
                                                fill="currentColor"
                                                className="bi bi-heart"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                                            </svg>
                                        </div>
                                    <Notification message={errorMessage} />
                                        <Form onSubmit={handleSubmits}>
                                            <Form.Group id='username'>
                                                <Form.Control
                                                className="my-4 py-2 border-2"
                                                type='text'
                                                value={props.username}
                                                name='Username'
                                                placeholder='Username'
                                                onChange={props.handleUsernameChange}
                                                />
                                            </Form.Group>
                                            <Form.Group id='password'>
                                                <Form.Control
                                                className="my-4 py-2 border-2"
                                                type='password'
                                                value={props.password}
                                                name='Password'
                                                placeholder='Password'
                                                onChange={props.handlePasswordChange}
                                                />
                                            </Form.Group>
                                            <div className="text-center mt-3">
                                                <Button variant="primary" id='form-login-button' type="submit">
                                                    Login
                                                </Button>
                                            </div>
                                            <div className="text-center mt-3">
                                                <Button className="m-3" variant="secondary" id='form-forgot-password-button' onClick={handleClickForgotPassword}>
                                                    Forgot Password ?
                                                </Button>
                                                <Button className="m-3" variant="secondary" id='form-change-password-button' onClick={handleClickChangePassword}>
                                                    Change Password
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
    )
}
