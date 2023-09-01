import React from 'react'
import { CertificateCarousel } from '../components/CertificateCarousel'
import { usePortafolio } from '../Hooks/usePortafolio'

function Certificates() {
  const { dataInglish, dataTechnology, dataDesign, dataFinance, dataPlus } =
    usePortafolio()
  return (
    <main className="bg-slate-100 dark:bg-slate-900 py-4">
      <section>
        <p className="px-4 text-center font-merriweather text-base font-normal dark:text-slate-100">
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
