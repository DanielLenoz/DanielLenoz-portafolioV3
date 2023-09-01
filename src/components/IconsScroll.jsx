import React from 'react'

function IconsScroll({ iconsTechnology }) {
  return (
    <article className="scroll flex justify-center space-x-4 ">
      {iconsTechnology.map((icon) => (
        <img
          className="w-12"
          key={icon.iconsTechnology}
          src={icon.iconsTechnology}
        />
      ))}
    </article>
  )
}

export { IconsScroll }
