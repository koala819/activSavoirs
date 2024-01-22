'use client'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { menuItems } from '@/src/types/models'
import { thematics } from '@/src/types/thematics'

import whitelogo from '@/public/images/logo.png'
import { colorVariants } from '@/src/lib/colorVariants'

export function Top() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const router = useRouter()
  const path = usePathname()

  const menuItems: menuItems[] = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Thématiques' },
    ...thematics.map((item) => ({
      name: item.title,
      path: `/thematiques/${thematics.indexOf(item)}`,
      icon: item.icon,
    })),
    { name: 'Equipe pédagogique', path: '/equipe' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsScrolled(offset > 50) // Changez '50' selon le seuil souhaité
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className={`${
        isScrolled
          ? 'h-24 flex justify-center items-center pb-1'
          : 'h-[200px] sm:h-[150px] md:h-[200px] pb-8'
      } w-full bg-navbar-bg sticky top-0 z-50 transition-height duration-300 `}
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
    >
      <picture
        className={`${
          isScrolled ? 'h-[100px]' : 'h-[50px] sm:h-[150px] md:h-[200px]'
        } flex items-center justify-center w-full md:w-auto`}
      >
        <Link href="/" aria-current="page">
          <Image
            src={whitelogo}
            alt="Logo Activ Savoirs"
            className="object-fill"
            width={isScrolled ? 150 : 300}
            height={20}
          />
        </Link>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </picture>
      <NavbarContent className="hidden sm:block">
        <NavbarBrand>
          <div className="hidden sm:block">
            <Dropdown>
              <NavbarItem isActive={path.includes('/thematiques')}>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className={` ${
                      path.includes('#')
                        ? 'font-bold sm:text-xs lg:text-base data-[hover=true]:bg-transparent'
                        : 'p-0 sm:text-xs lg:text-base data-[hover=true]:bg-transparent hover:text-gray-600'
                    }`}
                    endContent={<FiChevronDown />}
                    radius="sm"
                    variant="light"
                  >
                    <span className="text-xs sm:text-sm lg:text-base">
                      Nos thématiques
                    </span>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu aria-label="Item_3" items={thematics}>
                {(thematique: any) => {
                  return (
                    <DropdownItem
                      key={thematique.title}
                      color={'undefined' as any}
                      variant="shadow"
                      className={`${
                        colorVariants[thematique.title]
                      } p-4 space-x-4`}
                      description={thematique.description}
                      startContent={thematique.icon}
                      onClick={() => router.push(thematique.path || '#')}
                    >
                      {thematique.title}
                    </DropdownItem>
                  )
                }}
              </DropdownMenu>
            </Dropdown>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem isActive={path.includes('/equipe')}>
          <Link
            href="/equipe"
            aria-current="page"
            color="foreground"
            className="hover:text-gray-600 text-xs sm:text-sm lg:text-base"
          >
            Equipe pédagogique
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path.includes('/contact')}>
          <Link
            href="/contact"
            aria-current="page"
            color="foreground"
            className="px-8 border rounded-l-full rounded-r-full border-gray-950 py-2 hover:text-gray-600 hover:border-gray-600 text-xs sm:text-sm lg:text-base"
          >
            Nous contacter
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {index === 1 && (
              <Link
                color="primary"
                className="hover:cursor-default font-bold ml-2"
                size="lg"
              >
                {item.name}
              </Link>
            )}
            {index >= 2 && index <= 10 && (
              <Link
                color="foreground"
                className="w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-1/2 ml-4"
                href={item.path}
                size="lg"
              >
                <div className="mr-2">{item.icon}</div>
                {item.name}
              </Link>
            )}
            {(index === 0 || index >= 11) && (
              <Link
                color="foreground"
                className="w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-1/2"
                href={item.path}
                size="lg"
              >
                {item.name}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
