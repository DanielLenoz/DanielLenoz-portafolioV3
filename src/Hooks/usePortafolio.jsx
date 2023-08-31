import React, { createContext, useContext, useState } from 'react'
// import  certificatesData  from '../../public/certificatesData.json'
// import  projectsData  from '../../public/projectsData.json'
import iconsTechnology from '../../public/iconsTechnology.json'

import facelight from '../../public/assets/img/myself/face-light.webp'
import logoAzul from '../../public/assets/img/myself/logo-azul.webp'
import vector from '../../public/assets/img/Vector-blue.webp'

const PortafolioContext = createContext()

function PortafolioPrivider({ children }) {
  return (
    <PortafolioContext.Provider
      value={{ facelight, vector, logoAzul, iconsTechnology }}
    >
      {children}
    </PortafolioContext.Provider>
  )
}

function usePortafolio() {
  return useContext(PortafolioContext)
}
export { usePortafolio, PortafolioPrivider }
