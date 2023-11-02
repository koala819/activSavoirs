"use client";
import { LuCopyleft } from "react-icons/lu";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";
import logo from "@/public/images/logoFooter.png";
import dix31 from "@/public/images/DIX31.png";
// import dix32 from "@/public/images/@t.gif";
import { Article } from "@/src/components/molecules/Article";
import { FooterColumn } from "@/src/components/molecules/FooterColumn";
import { DoubleColumn } from "@/src/components/molecules/DoubleColumn";

import Image from "next/image";

export function Footer() {
  return (
    <footer className='bg-black-bg text-white pt-8 w-full'>
      <nav className='space-y-8 md:space-y-0 md:flex md:flex-row lg:px-0 xl:px-4 mb-12'>
        <aside className='flex justify-center md:basis-1/2'>
          <DoubleColumn
            sectionClassName='md:flex w-full'
            leftClassName='w-full'
            rightClassName='flex justify-center'
            left={
              <picture className='w-full flex justify-center md:justify-end'>
                <Image src={logo} alt='Logo Activ Savoirs' height={80} />
              </picture>
            }
            right={
              <div className='flex flex-col items-center md:items-start'>
                <Article
                  title='Activ Savoirs'
                  classNameTitle='md:text-xl lg:text-3xl'
                  description='Activateur de compétences'
                  classNameDescription='md:text-xs lg:text-md xl:text-xl'
                  button={{ display: false }}
                />
                <picture className='flex space-x-4 items-center mt-2'>
                  <Link
                    href='https://www.youtube.com/@reseauabp2026'
                    target='_blank'
                    className='text-gray-500 hover:text-red-500 flex items-center bg-white rounded-2xl p-2'
                  >
                    <BsYoutube size={32} />
                  </Link>

                  <Link
                    href='https://www.linkedin.com/in/vincent-declercq-685494151'
                    target='_blank'
                    className='text-gray-500 hover:text-blue-500 flex items-center justify-center bg-white rounded-2xl p-2 w-12 h-12'
                  >
                    <BsLinkedin size={22} />
                  </Link>
                  <Link
                    href='#'
                    target='_blank'
                    className='text-gray-500 hover:text-rose-500 flex items-center justify-center bg-white rounded-2xl p-2 w-12 h-12'
                  >
                    <FiInstagram size={28} />
                  </Link>
                </picture>
              </div>
            }
          />
        </aside>
        <aside className='md:basis-1/4 flex justify-center'>
          <FooterColumn
            title='service'
            items={[
              { text: "thématiques", link: "/thematiques" },
              // { text: "sourcing", link: "#" },
              // { text: "events", link: "#" },
            ]}
          />
        </aside>
        <aside className='md:basis-1/4 flex justify-center'>
          <FooterColumn
            title='entreprise'
            items={[
              { text: "Equipe", link: "/equipe" },
              { text: "références", link: "/references" },
              { text: "Avis Clients", link: "/evaluations" },
            ]}
          />
        </aside>
        <aside className='md:basis-1/4 flex justify-center'>
          <FooterColumn
            title='contact'
            items={[
              {
                text: "contact@activ-savoirs.com",
                link: "mailto:contact@activ-savoirs.com",
              },
              { text: "+33 6 07 83 18 23", link: "tel:+33607831823" },
            ]}
          />
        </aside>
      </nav>
      <legend className='bg-[#47464D]'>
        <div className='py-4 flex flex-col md:flex-row space-y-2 md:space-y-0'>
          <aside className='flex w-full md:w-1/2 justify-center md:ml-auto text-sm tracking-widest'>
            2023 Created by
            <Link
              href='https://www.dix31.com'
              target='_blank'
              className='mx-1 hover:underline'
            >
              {/* DIX31.com */}
              <picture className='w-full flex justify-center md:justify-end text-white pr-1 mt-1'>
                <Image
                  src={dix31}
                  alt='Logo DIX31.com'
                  height={15}
                  className='text-white'
                />
              </picture>
            </Link>
            with
            <Link
              href='https://fr.wikipedia.org/wiki/Copyleft'
              target='_blank'
              className='flex mx-1 hover:underline'
            >
              Copyleft license
              <LuCopyleft />
            </Link>
          </aside>
          <aside className='flex w-full md:w-1/2  justify-center md:ml-auto text-sm tracking-widest'>
            Design by
            <Link
              href='https://www.linkedin.com/in/mounirhcini/'
              target='_blank'
              className='ml-1 hover:underline'
            >
              Mounir
            </Link>
          </aside>
        </div>
      </legend>
    </footer>
  );
}
