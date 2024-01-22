'use client'

import { useEffect } from 'react'

import { CTA } from '@/src/components/molecules/CTA'
import { TileWall } from '@/src/components/molecules/TileWall'
import { ColumnSwitcher } from '@/src/components/organisms/ColumnSwitcher'
import { Hero } from '@/src/components/organisms/Hero'
import { Motion } from '@/src/components/organisms/Motion'
import { Rating } from '@/src/components/organisms/Rating'
import { Steps } from '@/src/components/organisms/Steps'

import LazyLoad from '@/src/lib/LazyLoad'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Homepage({
  accueil,
  references,
  evals,
}: {
  accueil: any
  references: any
  evals: any
}) {
  const nosServices = [
    { text: 'sourcing' },
    { text: 'formation sur mesure' },
    { text: 'mentoring' },
    { text: 'events' },
  ]

  const animation = 'zoom-in'

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  return (
    <main className="w-full flex flex-col h-full">
      <LazyLoad
        className="bg-gradient-left border-t-2 border-[#23272F] border-opacity-10 sm:min-h-screen lg:h-screen"
        data-aos={animation}
      >
        <Hero accueil={accueil} />
      </LazyLoad>

      <LazyLoad
        className="bg-gradient-right border-t-2 border-[#23272F] border-opacity-10 sm:h-screen flex items-center w-full overflow-hidden"
        data-aos={animation}
      >
        <Motion nosRef={references.results} />
      </LazyLoad>

      <LazyLoad
        className="bg-gradient-left border-t-2 border-[#23272F] border-opacity-10 sm:h-screen flex items-center w-full overflow-hidden"
        data-aos={animation}
      >
        <ColumnSwitcher
          leftData={nosServices}
          displayTitle={true}
          initialValue="sourcing"
          listType="list-disc"
        />
      </LazyLoad>

      <LazyLoad
        className="bg-gradient-right border-t-2 border-[#23272F] border-opacity-10 sm:h-screen flex items-center w-full overflow-hidden"
        data-aos={animation}
      >
        <Steps />
      </LazyLoad>

      <LazyLoad
        className="bg-blue-bg border-t-2 border-[#23272F] border-opacity-10 sm:min-h-screen flex items-center w-full overflow-hidden"
        data-aos={animation}
      >
        <TileWall />
      </LazyLoad>

      <LazyLoad
        className="bg-gradient-left border-t-2 border-[#23272F] border-opacity-10 sm:h-screen flex items-center w-full overflow-hidden"
        data-aos={animation}
      >
        <Rating evals={evals.results} />
      </LazyLoad>

      <LazyLoad
        className="bg-gradient-right border-t-2 border-[#23272F] border-opacity-10 sm:h-screen flex items-center w-full overflow-hidden"
        data-aos={animation}
      >
        <CTA />
      </LazyLoad>
    </main>
  )
}
