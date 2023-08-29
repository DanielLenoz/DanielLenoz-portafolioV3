import React, { createContext, useContext } from 'react'
import { certificatesData } from '../../public/certificatesData.json'
import { projectsData } from '../../public/projectsData.json'

const PortafolioContext = createContext()

function PortafolioPrivider({ children }) {
  return <Portafolio.Provider value={{}}>{children}</Portafolio.Provider>
}

function usePortafolio() {
  return useContext(PortafolioContext)
}
export { usePortafolio, PortafolioPrivider }
