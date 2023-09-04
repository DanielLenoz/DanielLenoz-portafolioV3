import React from 'react'
import { CertificateCarousel } from '../components/CertificateCarousel'
import { usePortafolio } from '../Hooks/usePortafolio'

function Certificates() {
  const { dataInglish, dataTechnology, dataDesign, dataFinance, dataPlus } =
    usePortafolio()
  return (
    <main className="bg-slate-100 py-10 dark:bg-slate-900">
      <section className='relative'>
        <div className="diamond scal spin sunlight absolute right-32  -top-20 h-48 w-44"></div>
        <div className="diamond scal spin sunlight absolute left-32  -top-10 h-48 w-44"></div>
        <p className="px-4 text-center relative z-10 font-merriweather text-base font-bold dark:text-slate-100 lg:px-40 lg:text-2xl">
          la sabiduría es importante pero mas es el entendimiento para entender
          sabiduría y conomiento, la voluntad es el principio de la creación
        </p>
      </section>
      <section className=" space-y-8 px-5 pt-10 font-montserrat text-xl font-extrabold dark:text-slate-100">
        <article className="">
          <h1>Cursos de Ingles</h1>
          <CertificateCarousel dataCertificates={dataInglish} />
        </article>
        <article>
          <h1>Cursos de Tecnologia</h1>
          <CertificateCarousel dataCertificates={dataTechnology} />
        </article>
        <article>
          <h1>Cursos de Diseñp UI</h1>
          <CertificateCarousel dataCertificates={dataDesign} />
        </article>
        <article>
          <h1>Cursos de Finanzas</h1>
          <CertificateCarousel dataCertificates={dataFinance} />
        </article>
        <article>
          <h1>Cursos Extras</h1>
          <CertificateCarousel dataCertificates={dataPlus} />
        </article>
      </section>
    </main>
  )
}

export { Certificates }
