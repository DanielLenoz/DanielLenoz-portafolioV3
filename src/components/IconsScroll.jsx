import React from 'react'
import '../Style/animation.css'

function IconsScroll({ iconsTechnology, animation }) {
  return (
    <article className={`scroll ${animation}  flex justify-center space-x-4 `}>
      {iconsTechnology.map((icon, index) => (
        <img className="w-12 lg:w-16" key={index} src={icon.iconsTechnology} />
      ))}
    </article>
  )
}

export { IconsScroll }
