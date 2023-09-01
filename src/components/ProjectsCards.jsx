import React from 'react'
import { IconsScroll } from './IconsScroll'
import { ImGithub } from 'react-icons/im'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../Style/gradients.css'

function ProjectsCards({ projectsData }) {
  return (
    <section className="grid justify-center gap-5 ">
      {projectsData.map((data, index) => (
        <section
          key={index}
          className="group relative h-[359px] w-[341px] overflow-hidden rounded-xl"
        >
          <section className="relative">
            <figure className="relative h-full w-full">
              <img
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                src={data.img}
                alt={data.title}
              />
            </figure>
          </section>
          <article className="gradient-Card absolute top-60 z-10 duration-500 ease-in-out group-hover:top-0  ">
            <h2 className="relative z-10 py-3 text-center font-montserrat text-lg font-extrabold text-slate-100">
              {data.title}
            </h2>
            <p className="relative z-10 px-5 font-merriweather text-base font-normal text-slate-100">
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

          <section className="absolute bottom-0 z-10 h-auto w-[100vw] bg-slate-900 dark:bg-slate-800">
            <IconsScroll iconsTechnology={data.icons} />
          </section>
        </section>
      ))}
    </section>
  )
}

export { ProjectsCards }
