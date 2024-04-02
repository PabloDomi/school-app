import School from './main-views/School'
import Home from './main-views/Home'
import Profile from './main-views/Profile'
import { Route, Routes } from 'react-router-dom'
import ValidateEmail from './components/ValidateEmail'
import ForgotPassword from './components/ForgotPassword'
import ChangePassword from './components/ChangePassword'
import ActivateAccount from './components/ActivateAccount'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'


  const App = () => {

    return (
      <div className='bg-dark texto-blanco-menos-fuerte min-vh-100'>
        <NavigationBar />
        
        <Routes>
          <Route  path='/activateAccount/:password_token/:username' element = {<ActivateAccount />} />
          <Route  path='/changePassword' element = {<ChangePassword />}/>
          <Route  path='/forgotPassword' element = {<ForgotPassword />}/>
          <Route  path="/validateEmail" element = {<ValidateEmail />} />
          <Route  path="/login" element={<School />}/>
          <Route  path="/profile" element = {<Profile />} />
          <Route  path="/" element = {<Home />} />
        </Routes>

        <Footer />
      </div>
    )
}

export default App