'use client'

import ReactPlayer from 'react-player'

import Image from 'next/image'

// import { WhiteBox } from '@/src/components/atoms/WhiteBox'
import dataDock from '@/public/images/dataDock.png'

export function YouTube({ video }: { video: any }) {
  return (
    <section className="flex justify-center items-center">
      <div className="w-2/3 sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 relative h-[400px] rounded-xl">
        {/* <WhiteBox
          number={4850}
          text='Elèves formés'
          className='top-28 -left-16'
        />
        <WhiteBox
          number={2368}
          text='Formations'
          className='top-8 -right-8 sm:-right-16'
        /> */}

        <div className="w-full h-full absolute">
          <ReactPlayer
            controls={true}
            url={video.data.video.html || ''}
            width="100%"
            height="100%"
          />
        </div>
        <Image
          src={dataDock}
          alt="logo dataDock"
          className="absolute -bottom-4 md:-bottom-8 -right-16 "
          width={50}
          height={100}
        />
      </div>
    </section>
  )
}
