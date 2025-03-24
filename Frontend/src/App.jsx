import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useSelector } from 'react-redux'
import Question from './pages/Question'
import Result from './pages/Result'
import NotFound from './components/NotFound'

function App() {
  const userInfo = useSelector((state) => state.userData.userInfo)
  const token = userInfo?.token

  console.log("userInfo value from userslice:", userInfo)
  console.log("token value:", token)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={token ? <Navigate to="/question" replace={true} /> : <Login />} />
        <Route path="/signup" element={token ? <Navigate to="/question" replace={true} /> : <Signup />} />
        <Route path="/result" element= {<Result/>}/>
        <Route path="/question" element={token ? <Question /> : <Navigate to="/login" replace={true} />} />
        <Route path="*" element={< NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
