import React from 'react'
import Title from 'react-vanilla-tilt'
import { ImGithub, ImSphere } from 'react-icons/im'
import { Link } from 'react-router-dom'
import '../Style/gradients.css'
import '../Style/animation.css'

function ProjectsCards({ projectsData }) {
  return (
    <section className="grid justify-center justify-items-center gap-5 px-5 md:grid-cols-2 ">
      {projectsData.map((data, index) => (
        <section
          key={index}
          className="grid h-auto w-auto gap-4 rounded-xl bg-slate-900 p-4 text-slate-100 dark:bg-slate-800"
        >
          <Title className="noneTitle group">
            <Title className="noneTitle ">
              <h2 className="pb-4 font-montserrat text-lg font-bold lg:text-2xl">
                {data.title}
              </h2>
            </Title>
            <Title className="noneTitle ">
              <figure className="h-full w-full duration-500 ease-in-out group-hover:scale-105">
                <img
                  className="h-full w-full bg-cover bg-center bg-no-repeat"
                  src={data.img}
                  alt={data.title}
                />
              </figure>
            </Title>
            <Title className="noneTitle ">
              <section className="my-4 flex flex-wrap justify-center gap-3">
                {data.technology.map((text, index) => (
                  <p
                    className=" rounded-3xl bg-slate-950 p-2 font-merriweather text-base font-normal hover:bg-sky-500 dark:bg-slate-900 dark:hover:bg-orange-600"
                    key={index}
                  >
                    {text.textTechnology}
                  </p>
                ))}
              </section>
            </Title>
          </Title>

          <p className=" text-center font-merriweather text-base font-normal lg:text-lg">
            {data.text}
          </p>
          <article className="flex items-center justify-evenly">
            <Link
              className="jek"
              to={data.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImGithub className=" h-12 w-12" />
            </Link>
            <Link
              className="jek"
              to={data.pages}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImSphere className="h-12 w-12" />
            </Link>
          </article>
        </section>
      ))}
    </section>
  )
}

export { ProjectsCards }
