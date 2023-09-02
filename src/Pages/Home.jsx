import React from 'react'
import { ImLinkedin2, ImGithub, ImDownload2, ImSpinner9 } from 'react-icons/im'
import { RiShakeHandsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { usePortafolio } from '../Hooks/usePortafolio'
import { IconsScroll } from '../components/IconsScroll'
import { ProjectsCards } from '../components/ProjectsCards'
import freeLancerImg from '../../public/assets/img/servicesCards/shaking-hands.webp'
import UIimg from '../../public/assets/img/servicesCards/UI.webp'
import programacionImg from '../../public/assets/img/servicesCards/programation.webp'
import figmaImg from '../../public/assets/icons/technology/figma.svg'
import platzi from '../../public/assets/icons/logo/platzi.svg'
import readlight from '../../public/assets/img/myself/read-light.webp'
import readdark from '../../public/assets/img/myself/read-dark.webp'
import facelight from '../../public/assets/img/myself/face-light.webp'
import logoAzul from '../../public/assets/img/myself/logo-azul.webp'
import facedark from '../../public/assets/img/myself/face-dark.webp'
import logoRojo from '../../public/assets/img/myself/logo-rojo.webp'
import vectorAzul from '../../public/assets/img/Vector-blue.webp'
import vectorWhite from '../../public/assets/img/Vector-white.webp'
import '../Style/animation.css'

function Home() {
  const { themes, iconsTechnology, projectsData } = usePortafolio()

  return (
    <main className="bg-slate-100 dark:bg-slate-900">
      <section className="relative mb-6 grid overflow-hidden lg:grid-cols-5 lg:grid-rows-1">
        <figure className=" relative justify-self-center lg:col-start-3 lg:right-6 lg:col-end-6 lg:row-start-1 lg:row-end-6 lg:w-full ">
          <img
            className="absolute top-4 lg:w-3/4 lg:right-14 xl:w-[58%] lg:-left-[5%]"
            src={themes ? logoRojo : logoAzul}
            alt=""
          />
          <img
            className="relative left-5 "
            src={themes ? facedark : facelight}
            alt=""
          />
        </figure>
        <article className="grid items-center bg-slate-900 dark:bg-slate-100 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:bg-transparent lg:dark:bg-transparent">
          <img
            className="absolute top-0 hidden h-full lg:block lg:w-1/2"
            src={themes ? vectorWhite : vectorAzul}
            alt=""
          />
          <section className="grid gap-y-9 relative z-10 px-5 py-3 text-slate-100 dark:text-slate-900 ">
            <h1 className=" text-center font-montserrat text-xl font-extrabold lg:text-start lg:text-3xl  ">
              soy DANIEL Front-end / Designer UI
            </h1>
            <p className="font-merriweather text-base font-normal lg:text-lg">
              Soy desarrollador front-end y diseñador UI. Mi objetivo es
              fusionar la estética con la funcionalidad para lograr resultados
              excepcionales. Contáctame y trabajemos juntos en un proyecto
              digital innovador.
            </p>
            <section className="flex space-x-7 fill-slate-100 dark:fill-slate-900">
              <ImLinkedin2 className="h-12 w-12 " />
              <ImGithub className="h-12 w-12 " />
              <ImDownload2 className="scal h-12 w-12 " />
            </section>
          </section>
        </article>
      </section>
      <section>
        <h1 className="mb-3 text-center font-montserrat text-xl font-extrabold text-slate-900 dark:text-slate-100">
          Herramientas
        </h1>
        <section className=" w-[100vw] bg-zinc-200 dark:bg-zinc-950">
          <IconsScroll iconsTechnology={iconsTechnology} />
        </section>
      </section>
      <section>
        <h1 className="my-4 text-center font-montserrat text-xl font-extrabold dark:text-slate-100">
          Servicios
        </h1>
        <section className="grid justify-items-center gap-5 dark:text-slate-100">
          <article className=" relative h-72 w-[356px] overflow-hidden rounded-2xl ">
            <h1 className="relative z-10 bg-slate-900 py-2 text-center font-carter text-lg font-normal text-slate-100 dark:bg-slate-800">
              Freelancer
            </h1>
            <p className="relative z-10 px-4 pt-4 font-merriweather text-base font-normal">
              Mi enfoque es comprender a fondo las necesidades de mis clientes,
              traduciéndolas en soluciones impactantes mediante un diálogo
              efectivo. Busco llevar sus ideas a un nivel superior, superando
              expectativas
            </p>
            <RiShakeHandsFill className="scal relative z-10 m-auto h-16 w-16 fill-cyan-400" />
            <img
              className="absolute top-0 opacity-50"
              src={freeLancerImg}
              alt=""
            />
          </article>
          <article className=" relative h-72 w-[356px] overflow-hidden rounded-2xl">
            <h1 className="relative z-10 bg-slate-900 py-2 text-center font-carter text-lg font-normal text-slate-100 dark:bg-slate-800">
              Diseño UI
            </h1>
            <p className="relative z-10 px-4 pt-4 font-merriweather text-base font-normal">
              Como diseñador UI, mi pasión es convertir ideas creativas en
              experiencias digitales cautivadoras y funcionales. Con Figma como
              herramienta principal, estoy listo para llevar el proyecto al
              siguiente nivel. ¡Hablemos!
            </p>
            <section className="relative z-10 mt-2 flex justify-center space-x-20">
              <img className=" h-16 w-16 fill-cyan-400" src={figmaImg} alt="" />
              <ImSpinner9 className="h-16 w-16 animate-spin fill-violet-600" />
            </section>
            <img className="absolute top-0 opacity-50" src={UIimg} alt="" />
          </article>
          <article className=" relative h-72 w-[356px] overflow-hidden rounded-2xl">
            <h1 className="relative z-10 bg-slate-900 py-2 text-center font-carter text-lg font-normal text-slate-100 dark:bg-slate-800">
              Producto
            </h1>
            <p className="relative z-10 px-4 pt-4 font-merriweather text-base font-normal">
              La creación de productos combina creatividad técnica y diseño para
              brindar experiencias interactivas excepcionales. Mis productos se
              destacan por su fluidez en la navegación, asegurando una
              experiencia óptima para el usuario.
            </p>
            <img
              className="absolute top-0 opacity-50"
              src={programacionImg}
              alt=""
            />
            <section className="mt-3 w-[100vw] bg-slate-900">
              <IconsScroll iconsTechnology={iconsTechnology} />
            </section>
          </article>
        </section>
      </section>
      <section className="grid justify-center justify-items-center py-5">
        <article className="relative mb-5 h-[387px] w-80">
          <div className="absolute left-10 top-9 h-[280px] w-[243px] bg-gradient-to-br from-red-700 to-yellow-400"></div>
          <div className="absolute bottom-0 right-0 z-10 h-[287px] w-[249px] bg-gradient-to-br from-blue-700 to-teal-400"></div>
          <img
            className=" absolute right-0 z-20"
            src={themes ? readdark : readlight}
            alt=""
          />
        </article>
        <article className=" relative z-10 h-[400px] w-[353px] overflow-hidden rounded-2xl dark:text-slate-100 ">
          <h1 className="relative z-10 bg-slate-900 py-2 text-center font-carter text-lg font-normal text-slate-100 dark:bg-slate-800">
            About
          </h1>
          <p className="relative z-10 px-5 py-4 font-merriweather text-base font-normal">
            Soy apasionado por el crecimiento profesional y la evolución
            constante. Mi enfoque en el aprendizaje y la superación de desafíos
            me ha llevado a expandir mis habilidades a lo largo de mi carrera.
            Busco oportunidades para crecer y contribuir al éxito de mi equipo.
            Mi objetivo es seguir alcanzando logros y superar mis límites en el
            mundo profesional
          </p>
          <Link
            to="/certificates"
            className="relative z-10 m-auto grid h-16 w-72 overflow-hidden rounded-2xl bg-slate-900 dark:bg-slate-800"
          >
            <p className="z-10 self-center text-center font-merriweather text-lg font-normal text-slate-100">
              Certificados
            </p>
            <img className=" absolute -top-10 left-20" src={platzi} alt="" />
          </Link>
          <div className="absolute top-0 h-[431px] w-[353px] bg-slate-100 bg-opacity-50 dark:bg-slate-900"></div>
        </article>
      </section>
      <section className="pb-10">
        <h1 className="my-4 text-center font-montserrat text-xl font-extrabold dark:text-slate-100">
          Proyectos
        </h1>
        <ProjectsCards projectsData={projectsData} />
      </section>
    </main>
  )
}

export { Home }
