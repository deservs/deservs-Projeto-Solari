import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home.jsx'
import Login from './pages/account/login.jsx'
import ManageApp from './components/conta/manage_profile/manageApp'

import './styles/pag_principal.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/manage-profile' element={ <ManageApp /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
