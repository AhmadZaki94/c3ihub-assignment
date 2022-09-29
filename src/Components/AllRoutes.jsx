import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './Context/ProtectedRoute'
import { Courses } from './Pages/Courses'
import { Login } from './Pages/Login'
import { SignUp } from './Pages/SignUp'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={
            <ProtectedRoute>
                <Courses/>
            </ProtectedRoute>
        
        }/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
    </Routes>
  )
}
