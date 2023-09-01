import React, { createContext, useContext, useEffect, useState } from 'react'
// import  certificatesData  from '../../public/certificatesData.json'
import projectsData from '../../public/projectsData.json'
import iconsTechnology from '../../public/iconsTechnology.json'
import readlight from '../../public/assets/img/myself/read-light.webp'
import readdark from '../../public/assets/img/myself/read-dark.webp'
import facelight from '../../public/assets/img/myself/face-light.webp'
import logoAzul from '../../public/assets/img/myself/logo-azul.webp'
import facedark from '../../public/assets/img/myself/face-dark.webp'
import logoRojo from '../../public/assets/img/myself/logo-rojo.webp'
import vectorAzul from '../../public/assets/img/Vector-blue.webp'
import vectorWhite from '../../public/assets/img/Vector-white.webp'

const PortafolioContext = createContext()

function PortafolioPrivider({ children }) {
  const storedThemes = localStorage.getItem('theme')

  const [menuActive, setMenuActive] = useState(false)

  const [themes, setTemes] = useState(storedThemes === 'dark')

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }
  const toggleTheme = () => {
    setTemes(!themes)
    localStorage.setItem('theme', !themes ? 'dark' : 'light')
  }

  useEffect(() => {
    if (themes) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [themes])

  return (
    <PortafolioContext.Provider
      value={{
        menuActive,
        themes,
        facelight,
        facedark,
        logoAzul,
        logoRojo,
        readlight,
        readdark,
        vectorAzul,
        vectorWhite,
        iconsTechnology,
        projectsData,
        setMenuActive,
        setTemes,
        toggleTheme,
        toggleMenu,
      }}
    >
      {children}
    </PortafolioContext.Provider>
  )
}

function usePortafolio() {
  return useContext(PortafolioContext)
}
export { usePortafolio, PortafolioPrivider }
