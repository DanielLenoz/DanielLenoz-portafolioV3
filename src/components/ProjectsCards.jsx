import React from 'react'
import { IconsScroll } from './IconsScroll'
import { ImGithub } from 'react-icons/im'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../Style/gradients.css'
import '../Style/animation.css'

function ProjectsCards({ projectsData }) {
  return (
    <section className="grid justify-center gap-5 md:grid-flow-col ">
      {projectsData.map((data, index) => (
        <section
          key={index}
          className="group relative h-full w-[341px] overflow-hidden rounded-xl"
        >
          <article className="gradient-Card relative top-64 z-10 mb-20 h-full  duration-500 ease-in-out group-hover:top-0 lg:top-[67%] lg:mb-24  ">
            <h2 className="relative z-10 py-3 text-center font-montserrat text-lg font-extrabold text-slate-100 lg:text-2xl">
              {data.title}
            </h2>
            <p className="relative z-10 px-5 font-merriweather text-base font-normal text-slate-100 lg:text-lg">
              {data.text}
            </p>
            <section className="relative z-10 flex justify-center space-x-20 py-3">
              <Link>
                <ImGithub className="h-12 w-12 fill-slate-100" />
              </Link>
              <Link>
                <BsBoxArrowUpRight className="h-12 w-12 fill-slate-100" />
              </Link>
            </section>
          </article>
          <img
            className="absolute top-0 h-full w-full bg-cover bg-center bg-no-repeat"
            src={data.img}
            alt={data.title}
          />
          <section className="scrollCard absolute bottom-0 z-10 h-auto w-[100vw] bg-slate-900 dark:bg-slate-800">
            <IconsScroll iconsTechnology={data.icons} />
          </section>
        </section>
      ))}
    </section>
  )
}

export { ProjectsCards }
