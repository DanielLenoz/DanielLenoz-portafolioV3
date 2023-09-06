import React from 'react'
import Title from 'react-vanilla-tilt'
import { Link } from 'react-router-dom'
import platzi from '../../public/assets/icons/logo/platzi.svg'
import readlight from '../../public/assets/img/myself/read-light.webp'
import readdark from '../../public/assets/img/myself/read-dark.webp'

function About({ themes }) {
  return (
    <section
      className="relative grid items-center justify-center justify-items-center gap-10 px-5 py-5 md:flex"
      id="about"
    >
      <Title className="noneTitle group">
        <article className="relative z-10 h-[387px] w-80 duration-500 ease-in-out hover:scale-105">
          <Title className="boxRed">
            <div className=" h-full w-full"></div>
          </Title>
          <Title className="boxBlue">
            <div
              className=" h-full w-full"
              data-tilt
              data-tilt-scale="1.1"
            ></div>
          </Title>
          <Title className="boxFace ">
            <img
              className="bg-cover bg-center bg-no-repeat duration-500 ease-in-out group-hover:scale-110"
              src={themes ? readdark : readlight}
              alt="Daniel Rodriguez"
            />
          </Title>
        </article>
      </Title>
      <article className=" relative z-10 h-full w-auto overflow-hidden rounded-2xl dark:text-slate-100 md:w-1/2 ">
        <h1 className="relative z-10 bg-slate-900 py-2 text-center font-carter text-lg font-normal text-slate-100 dark:bg-slate-800 lg:text-2xl">
          About
        </h1>
        <p className="relative z-10 px-5 py-4 font-merriweather text-base font-normal lg:text-lg">
          Soy apasionado por el crecimiento profesional y la evolución
          constante. Mi enfoque en el aprendizaje y la superación de desafíos me
          ha llevado a expandir mis habilidades a lo largo de mi carrera. Busco
          oportunidades para crecer y contribuir al éxito de mi equipo. Mi
          objetivo es seguir alcanzando logros y superar mis límites en el mundo
          profesional
        </p>
        <Link
          to="/certificates"
          className="relative z-10 m-auto grid h-16 w-72 overflow-hidden rounded-2xl bg-slate-900 dark:bg-slate-800"
          onClick={() => window.scrollTo(0, 0)}
        >
          <p className="z-10 self-center text-center font-merriweather text-lg font-normal text-slate-100 lg:text-lg">
            Certificados
          </p>
          <img
            className=" absolute -top-10 left-20"
            src={platzi}
            alt="cerificados"
          />
        </Link>
        <div className="diamond scal sunlight absolute -left-20 top-20 hidden  h-48 w-44 md:block"></div>
        <div className="diamond scal sunlight absolute -right-20 top-20 hidden  h-48 w-44 lg:block"></div>
      </article>
      <div className="diamond scal sunlight absolute -bottom-16 -left-10 h-48 w-44"></div>
      <div className="diamond scal sunlight absolute -left-10 top-0 hidden h-48 w-44 md:block"></div>
      <div className="diamond scal sunlight absolute -right-10 bottom-52 h-48 w-44"></div>
      <div className="diamond scal sunlight absolute -bottom-16 -right-10 hidden h-48 w-44 md:block"></div>
    </section>
  )
}

export { About }
