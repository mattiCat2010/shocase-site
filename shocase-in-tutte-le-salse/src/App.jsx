// import { useState } from 'react'
import { Routes, Route } from "react-router";

// page imports:
import { HomePage } from "./pages/home/HomePage.jsx";

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
