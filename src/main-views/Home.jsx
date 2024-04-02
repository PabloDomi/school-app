import { Button, Navbar } from "react-bootstrap"
import { useUser } from "../hooks/useUser"
import './Home.css'

const Home = () => {

    const { logout } = useUser()

    const handleLogout = (event) => {
        event.preventDefault()

        logout()
    }

    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h2 className='mb-0 fw-bold texto-blanco'>Welcome To</h2>
                            <h1 className='mb-5 fw-bold texto-blanco text-center text-sm-start'>School App</h1>
                            <Navbar className="position-fixed bottom-0 end-0 p-3">
                                <Button size='lg' variant="primary" onClick={handleLogout}>LogOut</Button>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )   

}

export default Home