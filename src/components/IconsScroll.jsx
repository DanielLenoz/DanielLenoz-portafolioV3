import React from 'react'

function IconsScroll({ iconsTechnology }) {
  return (
    <article className="scroll flex justify-center space-x-4 ">
      {iconsTechnology.map((icon, index) => (
        <img className="w-12" key={index} src={icon.iconsTechnology} />
      ))}
    </article>
  )
}

export { IconsScroll }
