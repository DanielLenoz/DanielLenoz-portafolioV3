import React, { createContext, useContext, useState } from 'react'
// import  certificatesData  from '../../public/certificatesData.json'
// import  projectsData  from '../../public/projectsData.json'
// import iconsTechnology from '../../public/technology.json'

const PortafolioContext = createContext()

function PortafolioPrivider({ children }) {
  return (
    <PortafolioContext.Provider value={{}}>
      {children}
    </PortafolioContext.Provider>
  )
}

function usePortafolio() {
  return useContext(PortafolioContext)
}
export { usePortafolio, PortafolioPrivider }
