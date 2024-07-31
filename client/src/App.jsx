import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Addblog from './pages/Addblog'
import Addcategory from './pages/Addcategory'
import Singleblog from './pages/Singleblog'
import ProtectedRoutes from './services/ProtectedRoutes'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path='/addblog' element={<Addblog />} />
          <Route path="/addcategory" element={<Addcategory />} />
          <Route path="/blog/:id" element={<Singleblog />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
