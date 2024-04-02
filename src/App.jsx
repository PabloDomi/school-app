import School from './main-views/School'
import Home from './main-views/Home'
import Profile from './main-views/Profile'
import { Route, Routes } from 'react-router-dom'
import ValidateEmail from './components/ValidateEmail'
import ForgotPassword from './components/ForgotPassword'
import ChangePassword from './components/ChangePassword'
import ActivateAccount from './components/ActivateAccount'
import { Container, Nav, Navbar } from 'react-bootstrap'


  const App = () => {

    return (
      <div className='bg-dark texto-blanco-menos-fuerte min-vh-100'>
        <Container className='py-4'>
          <Navbar expand='lg' className='fixed-top bg-body-tertiary shadow'>
            <Container>
              <Navbar.Brand className='navbar-brand-text-success fw-semibold'>
                <Nav.Link href='/' className='active'>
                  React School App
                </Nav.Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='me-auto justify-content-end w-100'>
                    <Nav.Link href='/' className='active text-uppercase'>
                      Home
                    </Nav.Link>
                      <Nav.Link href="/login" className='active text-uppercase'>
                        SignIn | SignUp
                      </Nav.Link>
                    <Nav.Link href="/profile" className='active text-uppercase'>
                      Profile
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
          </Navbar>
        </Container>
        <Routes>
          <Route  path='/activateAccount/:password_token/:username' element = {<ActivateAccount />} />
          <Route  path='/changePassword' element = {<ChangePassword />}/>
          <Route  path='/forgotPassword' element = {<ForgotPassword />}/>
          <Route  path="/validateEmail" element = {<ValidateEmail />} />
          <Route  path="/login" element={<School />}/>
          <Route  path="/profile" element = {<Profile />} />
          <Route  path="/" element = {<Home />} />
        </Routes>

        <footer className='bg-body-tertiary'>
          <p className='p-3 m-0 text-center'>copyright @ made by Pablo Dominguez Blanco</p>
        </footer>
      </div>
    )
}

export default App