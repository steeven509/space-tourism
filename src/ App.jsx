import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Destination from './pages/Destination/index'
import NotFound from './pages/NotFound'
import Crew from './pages/Crew'
import Technology from './pages/Technology'

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
