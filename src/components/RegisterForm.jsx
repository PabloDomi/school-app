import { useState, useRef } from "react"

/* eslint-disable react/prop-types */
import Togglable from "./Togglable"
import { Button, Form } from "react-bootstrap";

export default function RegisterForm({ handleSubmit, ...props }) {

    const [mostrarInput, setMostrarInput] = useState(false);
    const togglableRef = useRef()

    const handleChanges = (event) => {
        event.preventDefault()

        handleChange(event);
        props.handleRolChange(event);
    }

    const handleChange = (event) => {
        event.preventDefault()
        const { value } = event.target;
        if (value === 'Profesor') {
            setMostrarInput(true);
        } else {
            setMostrarInput(false);
        }
    }

    const handleSubmits = (event) => {
        event.preventDefault()

        handleSubmit(event)
        togglableRef.current.toggleVisibility()
    }

    return (
        <Togglable buttonLabel={'Sign Up'} cancelButtonLabel={'Exit'} ref={togglableRef}>
            <section>
                <header className='min-vh-100  text-light shadow'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 m-auto">
                                <div className="card border-1 shadow">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill-check" viewBox="0 0 16 16">
                                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                                            </svg>
                                        </div>
                                        <Form onSubmit={handleSubmits}>

                                            <Form.Control
                                                className="my-4 py-2 border-2"
                                                type='text'
                                                value={props.username}
                                                name='Username'
                                                placeholder='Username'
                                                onChange={props.handleUsernameChange}
                                            />
                                            <Form.Control
                                                className="my-4 py-2 border-2"
                                                type='text'
                                                value={props.name}
                                                name='Name'
                                                placeholder='Name'
                                                onChange={props.handleNameChange}
                                            />

                                            <Form.Control
                                                className="my-4 py-2 border-2"
                                                type='text'
                                                value={props.surnames}
                                                name='Surname'
                                                placeholder='Surname'
                                                onChange={props.handleSurnameChange}
                                            />

                                            <Form.Control
                                                className="my-4 py-2 border-2"
                                                type='password'
                                                value={props.password}
                                                name='Password'
                                                placeholder='Password'
                                                onChange={props.handlePasswordChange}
                                            />

                                            <Form.Control
                                                className="my-4 py-2 border-2"
                                                type='password'
                                                value={props.repeatPassword}
                                                name='RepeatPassword'
                                                placeholder='Repeat Password'
                                                onChange={props.handleRepeatPasswordChange}
                                            />

                                            <Form.Control
                                                className="my-4 py-2 border-2"
                                                type='text'
                                                value={props.email}
                                                name='Email'
                                                placeholder='Email'
                                                onChange={props.handleEmailChange}
                                            />

                                            <Form.Select className="my-4 py-2 border-2" id="opciones" onChange={handleChanges}>
                                                <option value="Alumno">Alumno</option>
                                                <option value="Profesor">Profesor</option>
                                            </Form.Select>
                                            {mostrarInput
                                                ? (
                                                    <div>
                                                        <Form.Control className="my-4 py-2 border-2" type="text" value={props.teacher_token} id="inputTexto" name="TeacherToken"
                                                            placeholder="Inserte un token válido" onChange={props.handleTeacherTokenChange} />
                                                    </div>
                                                )
                                                : (
                                                    <>
                                                    </>
                                                )
                                            }
                                            <div>
                                                <Button className="text-center mt-3" variant="primary" id='form-register-button' type="submit" >
                                                    Register
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
        </Togglable>
    )
}

//export default RegisterForm