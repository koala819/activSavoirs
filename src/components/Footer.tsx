"use client";
import { LuCopyleft } from "react-icons/lu";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";
import logo from "../../public/images/logoFooter.png";
import { Article } from "@/src/components/molecules/Article";
import { FooterColumn } from "@/src/components/molecules/FooterColumn";
import { DoubleColumn } from "@/src/components/organisms/DoubleColumn";

import Image from "next/image";

export function Footer() {
  return (
    <footer className='bg-[#141414] text-white pt-8 w-full'>
      <div className='space-y-8 md:space-y-0 md:flex md:flex-row lg:px-0 xl:px-4 mb-12'>
        <section className='flex justify-center md:basis-1/2'>
          <DoubleColumn
            sectionClassName='md:flex'
            leftClassName='flex justify-center md:block'
            left={<Image src={logo} alt='Logo Activ Savoirs' height={60} />}
            right={
              <>
                <Article
                  title='Activ Savoirs'
                  description='Activateur de compétences'
                  button={{ display: false }}
                />
                <section className='flex space-x-4 items-center'>
                  <Link
                    href='#'
                    target='_blank'
                    className='text-gray-500 hover:text-red-500 flex items-center'
                  >
                    <BsYoutube size={32} />
                  </Link>

                  <Link
                    href='#'
                    target='_blank'
                    className='text-gray-500 hover:text-blue-500'
                  >
                    <BsLinkedin size={22} />
                  </Link>
                  <Link
                    href='#'
                    target='_blank'
                    className='text-gray-500 hover:text-rose-500'
                  >
                    <FiInstagram size={28} />
                  </Link>
                </section>
              </>
            }
          />
        </section>
        <section className='md:basis-1/4 flex justify-center'>
          <FooterColumn
            title='service'
            items={[
              { text: "thématiques", link: "#" },
              { text: "sourcing", link: "#" },
              { text: "events", link: "#" },
            ]}
          />
        </section>
        <section className='md:basis-1/4 flex justify-center'>
          <FooterColumn
            title='entreprise'
            items={[
              { text: "A propos de nous", link: "#" },
              { text: "références", link: "/references" },
              { text: "clients", link: "#" },
            ]}
          />
        </section>
        <section className='md:basis-1/4 flex justify-center'>
          <FooterColumn
            title='contact'
            items={[
              {
                text: "contact@activ-savoirs.com",
                link: "mailto:contact@activ-savoirs.com",
              },
              { text: "+33 1 47 47 47", link: "tel:+331474747" },
            ]}
          />
        </section>
      </div>
      <div className='bg-[#47464D]'>
        <div className='py-4 flex flex-col md:flex-row space-y-2 md:space-y-0'>
          <aside className='flex w-full md:w-1/2 justify-center md:ml-auto text-sm tracking-widest'>
            2023 with
            <Link
              href='https://fr.wikipedia.org/wiki/Copyleft'
              target='_blank'
              className='flex mx-1 hover:underline'
            >
              Copyleft license
              <LuCopyleft />
            </Link>
            <Link
              href='https://www.dix31.com'
              target='_blank'
              className='mx-1 hover:underline'
            >
              DIX31.com
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
      </div>
    </footer>
  );
}
