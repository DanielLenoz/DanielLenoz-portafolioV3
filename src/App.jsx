import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { PortafolioPrivider } from './Hooks/Portafolio'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'
import { Home } from './Pages/Home'
import { Certificates } from './Pages/Certificates'
import { Contact } from './Pages/Contact'


function App() {

  return (
    <>
      <HashRouter>
        <PortafolioPrivider>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<p>no encontrada</p>} />
          </Routes>
          <Footer />
        </PortafolioPrivider>
      </HashRouter>
    </>
  )
}

export default App
