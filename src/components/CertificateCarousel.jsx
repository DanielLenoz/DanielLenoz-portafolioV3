import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

function CertificateCarousel({ dataCertificates }) {
  console.log(dataCertificates)

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 z-10 h-[96%] -translate-y-1/2 transform  bg-gray-200 p-2 text-gray-600 transition duration-300 hover:text-gray-800"
    >
      <MdOutlineArrowBackIosNew className="h-12 w-12" />
    </button>
  )

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 h-[96%] -translate-y-1/2 transform bg-gray-200 p-2 text-gray-600 transition duration-300 hover:text-gray-800"
    >
      <MdArrowForwardIos className="h-12 w-12" />
    </button>
  )

  var settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }
  return (
    <div>
      <Slider {...settings}>
        {dataCertificates.map((image, index) => (
          <div key={index} className="carousel-item pr-4 pt-2">
            <img src={image.certificatesImgSrc} alt={image.altDescription} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export { CertificateCarousel }
