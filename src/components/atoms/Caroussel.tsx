'use client'

import { useMemo } from 'react'
import Slider from 'react-slick'

import Image from 'next/image'

import { PartnersLogo } from '@/src/types/models'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export const CarouselRef = ({ partners }: { partners: PartnersLogo[] }) => {
  const settings = {
    centerMode: true,
    height: 100,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 1024, // écrans jusqu'à 1024px
        settings: {
          slidesToShow: 3, // montre 3 slides pour les écrans moyens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // écrans jusqu'à 600px
        settings: {
          slidesToShow: 2, // montre 2 slides pour les petits écrans
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // écrans jusqu'à 480px
        settings: {
          slidesToShow: 1, // montre 1 slide pour les très petits écrans
          slidesToScroll: 1,
        },
      },
    ],
  }

  const logos = useMemo(() => {
    return partners.map((ref) => {
      const originalWidth = ref.data.logo.dimensions.width
      const originalHeight = ref.data.logo.dimensions.height
      const desiredHeight = 100
      const proportionalWidth = (originalWidth / originalHeight) * desiredHeight
      return {
        ...ref,
        proportionalWidth,
        desiredHeight,
      }
    })
  }, [partners])

  return (
    <Slider {...settings}>
      {logos.map((partner, index) => (
        <div key={index} className="px-4">
          <Image
            key={index}
            style={{
              height: 'calc(20vh - 100px)',
              width: 'auto',
              margin: '0 auto',
            }}
            src={partner.data.logo.url}
            alt={partner.data.logo.alt}
            width={partner.proportionalWidth}
            height={partner.desiredHeight}
          />
        </div>
      ))}
    </Slider>
  )
}
