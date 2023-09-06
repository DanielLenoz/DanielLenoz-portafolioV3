import React, { createContext, useContext, useEffect, useState } from 'react'
import certificatesData from '../../public/certificatesData.json'
import projectsData from '../../public/projectsData.json'
import iconsTechnology from '../../public/iconsTechnology.json'

const PortafolioContext = createContext()

function PortafolioPrivider({ children }) {
  const filteredCertificates = (certificatesId) =>
    certificatesData.filter((data) =>
      data.certificatesId.includes(certificatesId),
    )

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
        iconsTechnology,
        projectsData,
        dataInglish: filteredCertificates('inglish'),
        dataTechnology: filteredCertificates('technology'),
        dataDesign: filteredCertificates('design'),
        dataFinance: filteredCertificates('finance'),
        dataPlus: filteredCertificates('plus'),
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
