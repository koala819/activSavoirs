"use client";
import { LuCopyleft } from "react-icons/lu";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import logo from "../public/images/logoFooter.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer className='text-gray-900 bg-gray-200 dark:bg-slate-700 dark:text-slate-300'>
      <div className='grid sm:grid-cols-3 sm:gap-12 lg:grid-cols-4 lg:gap-4 space-y-8 mb-16'>
        <section className='flex justify-center items-center mt-8'>
          <div className='text-center'>
            <div className='flex title-font font-medium items-center justify-center'>
              <Image src={logo} alt='Some text' height={60} />
              <span className='ml-3 text-xl'>Activ Savoirs</span>
            </div>
            <span>Activateur de compétences</span>
            <span className='inline-flex sm:ml-auto sm:mt-0 pt-4 justify-center sm:justify-start space-x-8'>
              <Link
                href='#'
                target='_blank'
                className='text-gray-500 dark:text-gray-200 dark:hover:text-blue-500'
              >
                <BsYoutube size={30} />
              </Link>

              <Link
                href='#'
                target='_blank'
                className='ml-3 text-gray-500 dark:text-gray-200 dark:hover:text-yellow-500'
              >
                <BsLinkedin size={24} />
              </Link>
            </span>
          </div>
        </section>

        <section className='flex justify-center items-center'>
          <nav className='flex flex-col items-center sm:items-start'>
            <h2 className='title-font font-medium tracking-widest text-xl mb-3 uppercase'>
              Service
            </h2>
            <Link
              href='#'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              Sourcing
            </Link>
            <Link
              href='#'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              Events
            </Link>
          </nav>
        </section>

        <section className='flex justify-center items-center'>
          <nav className='flex flex-col items-center sm:items-start'>
            <h2 className='title-font font-medium tracking-widest text-xl mb-3 uppercase'>
              Entreprise
            </h2>

            <Link
              href='/references'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              Références
            </Link>
            <Link
              href='/equipe'
              className='text-gray-600 hover:underline dark:text-zinc-300 capitalize'
            >
              equipe
            </Link>
          </nav>
        </section>

        <section className='flex justify-center items-center'>
          <nav className='flex flex-col items-center sm:items-start'>
            <h2 className='title-font font-medium tracking-widest text-xl mb-3 uppercase'>
              Contact
            </h2>

            <span className='text-gray-600 hover:underline dark:text-zinc-300'>
              contact@activsavoirs.com
            </span>
            <span className='text-gray-600 hover:underline dark:text-zinc-300'>
              +33 61 23 45 67
            </span>
          </nav>
        </section>
      </div>
      <div className='bg-gray-100 dark:bg-black'>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-row'>
          <div className='flex text-gray-500 items-center space-x-2 dark:text-gray-200'>
            <p className='flex'>
              2023 with
              <Link
                href='https://fr.wikipedia.org/wiki/Copyleft'
                target='_blank'
                className='flex hover:font-bold'
              >
                <span className='ml-2'>Copyleft licence</span>
                <LuCopyleft />
              </Link>
            </p>
            <p className='ml-2'>
              by{" "}
              <Link
                href='https://www.dix31.com'
                target='_blank'
                className='hover:font-bold'
              >
                DIX31.com
              </Link>
            </p>
          </div>
          <div className='ml-auto'>
            <p className='text-gray-500 items-center space-x-2 dark:text-gray-200'>
              Design by{" "}
              <Link href='' target='_blank' className='hover:font-bold'>
                Mounir
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
