import React from 'react'
import { CertificateCarousel } from '../components/CertificateCarousel'
import { usePortafolio } from '../Hooks/usePortafolio'

function Certificates() {
  const { dataInglish, dataTechnology, dataDesign, dataFinance, dataPlus } =
    usePortafolio()
  return (
    <main className='bg-slate-100'>
      <section>
        <p>
          la sabiduría es importante pero mas es el entendimiento para entender
          sabiduría y conomiento, la voluntad es el principio de la creación
        </p>
      </section>
      <section>
        <article>
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
