import { Container, Navbar, Nav } from "react-bootstrap"

export default function NavigationBar() {

  return (
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
                        SignIn
                      </Nav.Link>
                    <Nav.Link href="/profile" className='active text-uppercase'>
                      Profile
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
          </Navbar>
        </Container>
  )
}