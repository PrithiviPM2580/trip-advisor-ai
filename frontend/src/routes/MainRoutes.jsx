import CreateTripPage from '@/pages/CreateTripPage'
import HomePage from '@/pages/HomePage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/create-trip' element={<CreateTripPage />} />
            </Routes>
        </>
    )
}

export default MainRoutes