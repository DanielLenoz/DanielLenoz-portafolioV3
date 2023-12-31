import React from 'react'
import { ImSpinner9 } from 'react-icons/im'
import { RiShakeHandsFill } from 'react-icons/ri'
import { IconsScroll } from '../components/IconsScroll'
import freeLancerImg from '../../public/assets/img/servicesCards/shaking-hands.webp'
import UIimg from '../../public/assets/img/servicesCards/UI.webp'
import programacionImg from '../../public/assets/img/servicesCards/programation.webp'
import figmaImg from '../../public/assets/icons/technology/figma.svg'

function Services({ iconsTechnology }) {
  return (
    <section id="services">
      <h1 className="my-4 text-center font-montserrat text-xl font-extrabold dark:text-slate-100 lg:text-3xl">
        Servicios
      </h1>
      <section className="relative grid justify-center justify-items-center gap-5 px-5 dark:text-slate-100 md:grid-cols-2 xl:grid-cols-3">
        <div className="diamond scal sunlight absolute -right-20  -top-24 h-48 w-44"></div>
        <div className="diamond scal sunlight absolute -left-20  -top-24 h-48 w-44"></div>
        <ServiceSection
          title={'Freelancer'}
          description={
            'Mi enfoque es comprender a fondo las necesidades de mis clientes, traduciéndolas en soluciones impactantes mediante un diálogo efectivo. Busco llevar sus ideas a un nivel superior, superando expectativas'
          }
          img={freeLancerImg}
          icon={
            <RiShakeHandsFill className="scal relative z-10  m-auto my-4 h-16 w-16 fill-cyan-400" />
          }
        />
        <ServiceSection
          title={'Diseño UI'}
          description={
            'Como diseñador UI, mi pasión es convertir ideas creativas en experiencias digitales cautivadoras y funcionales. Con Figma como herramienta principal, estoy listo para llevar el proyecto al siguiente nivel. ¡Hablemos!'
          }
          img={UIimg}
          icon={
            <section className="relative z-10 my-5 flex justify-center space-x-20">
              <img
                className=" h-16 w-16   fill-cyan-400"
                src={figmaImg}
                alt=""
              />
              <ImSpinner9 className="h-16 w-16 animate-spin fill-violet-600" />
            </section>
          }
        />
        <ServiceSection
          title={'Producto'}
          colum={'md:col-span-2 xl:col-auto'}
          description={
            'La creación de productos combina creatividad técnica y diseño para brindar experiencias interactivas excepcionales. Mis productos se destacan por su fluidez en la navegación, asegurando una experiencia óptima para el usuario.'
          }
          img={programacionImg}
          icon={
            <section className="scrollCard relative z-10 mt-3 bg-slate-900 dark:bg-slate-800">
              <IconsScroll iconsTechnology={iconsTechnology} />
            </section>
          }
        />
      </section>
    </section>
  )
}

function ServiceSection({ title, description, img, icon, colum }) {
  return (
    <article
      className={` ${colum} relative h-full  w-full overflow-hidden rounded-2xl `}
    >
      <h1 className="relative z-10 bg-slate-900 py-2 text-center font-carter text-lg font-normal text-slate-100 dark:bg-slate-800 lg:text-2xl">
        {title}
      </h1>
      <p className="relative z-10 px-4 pt-4 font-merriweather text-base font-normal lg:text-lg">
        {description}
      </p>
      {icon}
      <img
        className="absolute top-0 h-full w-full opacity-50"
        src={img}
        alt={title}
      />
    </article>
  )
}

export { Services }
