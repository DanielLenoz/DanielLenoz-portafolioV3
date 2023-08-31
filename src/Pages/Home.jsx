import React from 'react'
import { RiShakeHandsFill } from 'react-icons/ri'
import { ImLinkedin2, ImGithub, ImDownload2, ImSpinner9 } from 'react-icons/im'
import { usePortafolio } from '../Hooks/usePortafolio'
import freeLancerImg from '../../public/assets/img/servicesCards/shaking-hands.webp'
import UIimg from '../../public/assets/img/servicesCards/UI.webp'
import programacionImg from '../../public/assets/img/servicesCards/programation.webp'
import figmaImg from '../../public/assets/icons/technology/figma.svg'
import '../Style/animation.css'

function Home() {
  const { facelight, vector, logoAzul, iconsTechnology } = usePortafolio()

  return (
    <main className="bg-slate-100">
      <section className="mb-6 grid">
        <figure className="justify-self-center">
          <img className="absolute top-24" src={logoAzul} alt="" />
          <img className="relative left-5" src={facelight} alt="" />
        </figure>
        <article className="relative  bg-slate-900">
          <img className="absolute hidden" src={vector} alt="" />
          <section className="relative z-10 px-5 py-3 ">
            <h1 className=" text-center font-montserrat text-xl font-extrabold text-slate-100">
              soy DANIEL Front-end/Designer UI
            </h1>
            <p className=" py-4 font-merriweather text-base font-normal text-slate-100">
              Soy desarrollador front-end y diseñador UI. Mi objetivo es
              fusionar la estética con la funcionalidad para lograr resultados
              excepcionales. Contáctame y trabajemos juntos en un proyecto
              digital innovador.
            </p>
            <section className="flex space-x-7">
              <ImLinkedin2 className="h-12 w-12 fill-slate-100" />
              <ImGithub className="h-12 w-12 fill-slate-100" />
              <ImDownload2 className="scal h-12 w-12 fill-slate-100" />
            </section>
          </section>
        </article>
      </section>
      <section>
        <h1 className="mb-3 text-center font-montserrat text-xl font-bold text-slate-900">
          Herramientas
        </h1>
        <section className=" w-[100vw] bg-zinc-200">
          <article className="scroll flex justify-center space-x-4 ">
            {iconsTechnology.map((icon) => (
              <img
                className="w-12"
                key={icon.iconsTechnology}
                src={icon.iconsTechnology}
              />
            ))}
          </article>
        </section>
      </section>
      <section>
        <h1 className="my-4 text-center font-montserrat text-xl font-extrabold">
          Servicios
        </h1>
        <section className="grid justify-items-center gap-5">
          <article className=" relative h-[339px] w-[356px] overflow-hidden rounded-2xl">
            <h1 className="relative z-10 bg-slate-900 py-2 text-center font-carter text-xl font-extrabold text-slate-100">
              Freelancer
            </h1>
            <p className="relative z-10 px-4 pt-4 font-merriweather text-lg font-normal">
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
          <article className=" relative h-[339px] w-[356px] overflow-hidden rounded-2xl">
            <h1 className="relative z-10 bg-slate-900 py-2 text-center font-carter text-xl font-extrabold text-slate-100">
              Diseño UI
            </h1>
            <p className="relative z-10 px-4 pt-4 font-merriweather text-lg font-normal">
              Como diseñador UI, mi pasión es convertir ideas creativas en
              experiencias digitales cautivadoras y funcionales. Con Figma como
              herramienta principal, estoy listo para llevar el proyecto al
              siguiente nivel. ¡Hablemos!
            </p>
            <section className="relative z-10 flex justify-center space-x-20">
              <img className=" h-16 w-16 fill-cyan-400" src={figmaImg} alt="" />
              <ImSpinner9 className="h-16 w-16 animate-spin fill-violet-600" />
            </section>
            <img className="absolute top-0 opacity-50" src={UIimg} alt="" />
          </article>
          <article className=" relative h-[339px] w-[356px] overflow-hidden rounded-2xl">
            <h1 className="relative z-10 bg-slate-900 py-2 text-center font-carter text-xl font-extrabold text-slate-100">
              Producto
            </h1>
            <p className="relative z-10 px-4 pt-4 font-merriweather text-lg font-normal">
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
              <article className="scroll flex justify-center space-x-4 ">
                {iconsTechnology.map((icon) => (
                  <img
                    className="w-12"
                    key={icon.iconsTechnology}
                    src={icon.iconsTechnology}
                  />
                ))}
              </article>
            </section>
          </article>
        </section>
      </section>
    </main>
  )
}

export { Home }
