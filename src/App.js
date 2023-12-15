import React from 'react'
import LoginSignup from './componets/loginSignup/loginsignup';
import Navbar from './componets/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div>
      <Router>
                <Navbar/>
                    <Routes>
                        <Route path="/" element={<LoginSignup />} />
                    </Routes>
            </Router>
    </div>
  )
}

export default App;
