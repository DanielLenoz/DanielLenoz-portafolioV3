import React from 'react'
import { ImLinkedin2, ImGithub, ImDownload2 } from 'react-icons/im'
import { usePortafolio } from '../Hooks/usePortafolio'
import { IconsScroll } from '../components/IconsScroll'
import { ProjectsCards } from '../components/ProjectsCards'
import { Services } from '../Fragments/Services'
import { About } from '../Fragments/About'
import facelight from '../../public/assets/img/myself/face-light.webp'
import logoAzul from '../../public/assets/img/myself/logo-azul.webp'
import facedark from '../../public/assets/img/myself/face-dark.webp'
import logoRojo from '../../public/assets/img/myself/logo-rojo.webp'
import vectorAzul from '../../public/assets/img/Vector-blue.webp'
import vectorWhite from '../../public/assets/img/Vector-white.webp'
import '../Style/animation.css'
import { Link } from 'react-router-dom'

function Home() {
  const { themes, iconsTechnology, projectsData } = usePortafolio()

  return (
    <main className="bg-slate-100 dark:bg-slate-900">
      <section className="relative mb-6 grid overflow-hidden lg:grid-cols-5 lg:grid-rows-1">
        <figure className=" relative justify-self-center lg:right-6 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-6 lg:w-full ">
          <img
            className="absolute top-4 lg:-left-[5%] lg:right-14 lg:w-3/4 xl:w-[58%]"
            src={themes ? logoRojo : logoAzul}
            alt="logo lenoz"
          />
          <img
            className="relative left-5 "
            src={themes ? facedark : facelight}
            alt="Daniel Rodriguez"
          />
        </figure>
        <section className="spin relative col-start-4 col-end-6 row-start-1 row-end-6 ml-24 hidden h-[27rem] w-[28rem] lg:block ">
          <div className="diamond scal spin sunlight absolute left-32 top-8 h-48 w-44"></div>
          <div className="diamond scal spin sunlight absolute left-0 top-48 h-48 w-44"></div>
          <div className="diamond scal spin sunlight absolute right-0  top-48 h-48 w-44"></div>
        </section>
        <article className="grid items-center bg-slate-900 dark:bg-slate-100 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:bg-transparent lg:dark:bg-transparent">
          <img
            className="absolute top-0 hidden h-full lg:block lg:w-1/2"
            src={themes ? vectorWhite : vectorAzul}
            alt=""
          />
          <section className="relative z-10 grid gap-y-9 px-5 py-3 text-slate-100 dark:text-slate-900 ">
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
              <Link to="https://www.linkedin.com/in/daniel-steven-rodriguez-verano-417472241/">
                <ImLinkedin2 className="h-12 w-12 " />
              </Link>
              <Link to="https://github.com/DanielLenoz">
                <ImGithub className="h-12 w-12 " />
              </Link>
              <Link>
                <ImDownload2 className="scal h-12 w-12 " />
              </Link>
            </section>
          </section>
        </article>
      </section>
      <section>
        <h1 className="mb-3 text-center font-montserrat text-xl font-extrabold text-slate-900 dark:text-slate-100 lg:text-3xl">
          Herramientas
        </h1>
        <section className=" w-[100vw] bg-zinc-200 dark:bg-zinc-950">
          <IconsScroll iconsTechnology={iconsTechnology} />
        </section>
      </section>
      <Services iconsTechnology={iconsTechnology} />
      <About themes={themes} />
      <section className="pb-10" id='projects' >
        <h1
          className="my-4 text-center font-montserrat text-xl font-extrabold dark:text-slate-100 lg:text-3xl "
          
        >
          Proyectos
        </h1>
        <ProjectsCards projectsData={projectsData} />
      </section>
    </main>
  )
}

export { Home }
