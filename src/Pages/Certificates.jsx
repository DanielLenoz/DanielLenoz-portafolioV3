import React from 'react'
import { CertificateCarousel } from '../components/CertificateCarousel'
import { usePortafolio } from '../Hooks/usePortafolio'

function Certificates() {
  const { dataInglish, dataTechnology, dataDesign, dataFinance, dataPlus } =
    usePortafolio()
  return (
    <main className="bg-slate-100 py-10 dark:bg-slate-900">
      <section className="relative">
        <div className="diamond scal spin sunlight absolute -top-20 right-0  h-48 w-44 lg:right-32"></div>
        <div className="diamond scal spin sunlight absolute -top-10 left-0  h-48 w-44 lg:left-32"></div>
        <p className="relative z-10 px-4 text-center font-merriweather text-base font-bold dark:text-slate-100 lg:px-40 lg:text-2xl">
          la sabiduría es importante pero mas es el entendimiento para entender
          sabiduría y conomiento, la voluntad es el principio de la creación
        </p>
      </section>
      <section className=" space-y-8 px-5 pt-10 font-montserrat text-xl font-extrabold dark:text-slate-100">
        <CertificateSection
          title={'Cursos de Ingles'}
          dataCertificates={dataInglish}
        />
        <CertificateSection
          title={'Cursos de Tecnologia'}
          dataCertificates={dataTechnology}
        />
        <CertificateSection
          title={'Cursos de Diseño UI'}
          dataCertificates={dataDesign}
        />
        <CertificateSection
          title={'Cursos de Finanzas'}
          dataCertificates={dataFinance}
        />
        <CertificateSection
          title={'Cursos Extras'}
          dataCertificates={dataPlus}
        />
      </section>
    </main>
  )
}

function CertificateSection({ title, dataCertificates }) {
  return (
    <article>
      <h1>{title}</h1>
      <CertificateCarousel dataCertificates={dataCertificates} />
    </article>
  )
}

export { Certificates }
