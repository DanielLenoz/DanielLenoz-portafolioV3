import React from 'react'
import Title from 'react-vanilla-tilt'
import { Link } from 'react-router-dom'
import platzi from '../../public/assets/icons/logo/platzi.svg'
import readlight from '../../public/assets/img/myself/read-light.webp'
import readdark from '../../public/assets/img/myself/read-dark.webp'

function About({ themes }) {
  return (
    <section className="grid items-center justify-center justify-items-center gap-10 px-5 py-5 md:flex">
      <article className="relative h-[387px] ease-in-out duration-500 w-80 hover:scale-105">
        <Title className="boxRed">
          <div className=" h-full w-full"></div>
        </Title>
        <Title className="boxBlue">
          <div className=" h-full w-full" data-tilt data-tilt-scale="1.1"></div>
        </Title>
        <Title className="boxFace">
          <img src={themes ? readdark : readlight} alt="Daniel Rodriguez" />
        </Title>
      </article>
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
        <div className="absolute top-0 h-[431px] w-[353px] bg-slate-100 bg-opacity-50 dark:bg-slate-900"></div>
      </article>
    </section>
  )
}

export { About }
