import React from 'react'
import {
  RiMenu3Fill,
  RiCloseFill,
  RiSunFill,
  RiMoonClearFill,
} from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { usePortafolio } from '../Hooks/usePortafolio'
import logoAzul from '../../public/assets/icons/logo/logo-azul.svg'
import logorojo from '../../public/assets/icons//logo/logo-rojo.svg'
import '../Style/animation.css'
import '../Style/gradients.css'

function Menu() {
  const activeStyle = 'border-b-4 border-sky-500 up dark:border-orange-600'

  const { menuActive, themes, toggleMenu, toggleTheme } = usePortafolio()

  return (
    <header className="relative">
      <nav className="relative z-10 flex items-center justify-between bg-slate-100 px-5 dark:bg-slate-900 ">
        <section className="flex space-x-3">
          <img src={themes ? logorojo : logoAzul} alt="mode change" />
          {themes ? (
            <RiMoonClearFill
              className="h-12 w-12 fill-orange-600"
              onClick={toggleTheme}
            />
          ) : (
            <RiSunFill
              className="h-12 w-12 fill-sky-600"
              onClick={toggleTheme}
            />
          )}
        </section>
        <section className="relative lg:hidden ">
          {!menuActive ? (
            <RiMenu3Fill
              className="absolute -bottom-4 right-0 h-8 w-8 dark:fill-slate-100 "
              onClick={toggleMenu}
            />
          ) : (
            <RiCloseFill
              className="absolute -bottom-4 right-0 h-8 w-8 dark:fill-slate-100 "
              onClick={toggleMenu}
            />
          )}
        </section>

        <section className="relative z-10 hidden w-screen justify-center bg-slate-100 dark:bg-slate-900 lg:flex">
          <ul className="flex gap-7 font-carter text-2xl">
            {routes
              .map((routes, index) => {
                return (
                  <MenuList
                    key={index}
                    routes={routes}
                    activeStyle={activeStyle}
                  />
                )
              })
              .slice(0, 4)}
          </ul>
          <div className="absolute right-0 rounded-full bg-slate-900 px-5 py-1 text-center font-carter text-2xl font-normal text-slate-100 dark:bg-slate-100 dark:text-slate-900 ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : 'up border-b-4 border-sky-500 border-transparent transition ease-in-out hover:border-b-4 hover:border-sky-500 dark:hover:border-b-4 dark:hover:border-orange-600'
              }
              to={'/contact'}
            >
              Contact
            </NavLink>
          </div>
        </section>
      </nav>

      {!!menuActive && (
        <section className=" absolute z-20 h-screen w-screen ">
          <section className="relative z-10 grid h-screen justify-center bg-slate-100 dark:bg-slate-900">
            <div className="diamond scal sunlight absolute h-44 w-40"></div>
            <ul className="my-32 grid gap-1 font-carter text-2xl">
              {routes.map((routes, index) => {
                return (
                  <MenuList
                    key={index}
                    routes={routes}
                    activeStyle={activeStyle}
                    onClick={() => (toggleMenu(), window.scrollTo(0, 0))}
                  />
                )
              })}
            </ul>
            <div className="diamond scal sunlight absolute bottom-14 right-0 h-44 w-40"></div>
          </section>
        </section>
      )}
    </header>
  )
}

function MenuList({ routes, activeStyle, onClick }) {
  const onClickProjects = (id) => {
    const element = document.getElementById(id)

    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <li
      className="text-center font-normal dark:text-slate-100 "
      key={routes.text}
    >
      <NavLink
        className={({ isActive }) =>
          isActive && routes.Boolean
            ? activeStyle
            : 'up border-b-4 border-sky-500 border-transparent transition ease-in-out hover:border-b-4 hover:border-sky-500 dark:hover:border-b-4 dark:hover:border-orange-600'
        }
        to={routes.to}
        onClick={() => (routes.to ? onClick() : onClickProjects(routes.id))}
      >
        {routes.text}
      </NavLink>
    </li>
  )
}

const routes = [
  {
    to: '/',
    Boolean: true,
    text: 'Home',
  },
  {
    Boolean: false,
    id: 'services',
    text: 'Services',
  },
  {
    Boolean: false,
    id: 'about',
    text: 'About',
  },
  {
    Boolean: false,
    id: 'projects',
    text: 'Projects',
  },
  {
    to: '/Contact',
    Boolean: true,
    text: 'Contact',
  },
]

export { Menu, MenuList, routes }
