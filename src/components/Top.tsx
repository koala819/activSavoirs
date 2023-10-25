"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";
import { usePathname } from "next/navigation";
// import { ThemeSwitcher } from "@/src/components/util/ThemeSwitcher";
import Image from "next/image";
import whitelogo from "../../public/images/logo.png";
import blackLogo from "../../public/images/logoDM.png";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  FaChartLine,
  FaChessBoard,
  FaGlobe,
  FaHandshake,
  FaIndustry,
  FaLeaf,
  FaRobot,
  FaUserTie,
  FaUsersCog,
} from "react-icons/fa";

export function Top() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const { resolvedTheme } = useTheme();

  const logo = resolvedTheme === "dark" ? blackLogo : whitelogo;

  const menuItems = [
    { name: "Accueil", path: "/" },
    { name: "Nos Thématiques" },
    { name: "Stratégie d'entreprise", path: "#", icon: <FaChessBoard /> },
    { name: "Intelligence Artificielle", path: "#", icon: <FaRobot /> },
    { name: "Excellence Industrielle 4.0", path: "#", icon: <FaIndustry /> },
    {
      name: "Optimisation des Ressources Humaines",
      path: "#",
      icon: <FaUsersCog />,
    },
    { name: "Efficacité Manageriale", path: "#", icon: <FaUserTie /> },
    { name: "Performance Commerciale", path: "#", icon: <FaChartLine /> },
    { name: "Marketing Digital", path: "#", icon: <FaGlobe /> },
    { name: "Qualité et environnement", path: "#", icon: <FaLeaf /> },
    { name: "Soft Kills", path: "#", icon: <FaHandshake /> },
    { name: "Equipe pédagogique", path: "/equipe" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth='full'
      className='pb-4 bg-navbar-bg dark:bg-dark-navbar-bg'
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link
            href='/'
            aria-current='page'
            className='pt-2 md:mr-2 lg:mr-4 xl:mr-16'
          >
            <Image src={logo} alt='Logo Activ Savoirs' height={80} />
          </Link>
          <div className='hidden sm:block'>
            <Dropdown>
              <NavbarItem isActive={path.includes("#")}>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className={` ${
                      path.includes("#")
                        ? "font-bold sm:text-xs lg:text-base data-[hover=true]:bg-transparent"
                        : "p-0 sm:text-xs lg:text-base data-[hover=true]:bg-transparent hover:text-gray-600"
                    }`}
                    endContent={<FiChevronDown />}
                    radius='sm'
                    variant='light'
                  >
                    Nos thématiques
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label='Item_3'
                className='w-[340px]'
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key='di1'
                  description='Vision Stratégique'
                  startContent={<FaChessBoard />}
                  onClick={() => router.push("#")}
                >
                  Stratégie d&apos;entreprise
                </DropdownItem>
                <DropdownItem
                  key='di2'
                  description='IA Innovante'
                  startContent={<FaRobot />}
                  onClick={() => router.push("#")}
                >
                  Intelligence Artificielle
                </DropdownItem>
                <DropdownItem
                  key='di3'
                  description='Manufacture Numérique'
                  startContent={<FaIndustry />}
                  onClick={() => router.push("#")}
                >
                  Excellence Industrielle 4.0
                </DropdownItem>
                <DropdownItem
                  key='di4'
                  description='Gestion des Talents'
                  startContent={<FaUsersCog />}
                  onClick={() => router.push("#")}
                >
                  Optimisation des Ressources Humaines
                </DropdownItem>
                <DropdownItem
                  key='di5'
                  description='Leadership Performant'
                  startContent={<FaUserTie />}
                  onClick={() => router.push("#")}
                >
                  Efficacité Manageriale
                </DropdownItem>
                <DropdownItem
                  key='di6'
                  description='Croissance des Ventes'
                  startContent={<FaChartLine />}
                  onClick={() => router.push("#")}
                >
                  Performance Commerciale
                </DropdownItem>
                <DropdownItem
                  key='di7'
                  description='Stratégie en Ligne'
                  startContent={<FaGlobe />}
                  onClick={() => router.push("#")}
                >
                  Marketing Digital
                </DropdownItem>
                <DropdownItem
                  key='di8'
                  description='Normes Environnementales'
                  startContent={<FaLeaf />}
                  onClick={() => router.push("#")}
                >
                  Qualité et environnement
                </DropdownItem>
                <DropdownItem
                  key='di9'
                  description='Compétences Interpersonnelles'
                  startContent={<FaHandshake />}
                  onClick={() => router.push("#")}
                >
                  Soft Kills
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex' justify='end'>
        <NavbarItem isActive={path.includes("/equipe")}>
          <Link
            href='/equipe'
            aria-current='page'
            color='foreground'
            className='hover:text-gray-600'
          >
            Equipe pédagogique
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path.includes("/contact")}>
          <Link
            href='/contact'
            aria-current='page'
            color='foreground'
            className='px-8 border rounded-l-full rounded-r-full border-gray-950 py-2 hover:text-gray-600 hover:border-gray-600'
          >
            Nous contacter
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className='mt-8'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {index === 1 && (
              <Link
                color='primary'
                className='hover:cursor-default font-bold ml-2'
                size='lg'
              >
                {item.name}
              </Link>
            )}
            {index >= 2 && index <= 10 && (
              <Link
                color='foreground'
                className='w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-1/2 ml-4'
                href={item.path}
                size='lg'
              >
                <div className='mr-2'>{item.icon}</div>
                {item.name}
              </Link>
            )}
            {(index === 0 || index >= 11) && (
              <Link
                color='foreground'
                className='w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-1/2'
                href={item.path}
                size='lg'
              >
                {item.name}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
