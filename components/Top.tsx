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
  // Image,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";
// import { AiFillChrome } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";
import whitelogo from "../public/images/logo.png";
import blackLogo from "../public/images/Blacklogo.png";
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
    { name: "Item_1", path: "/" },
    { name: "Item_2", path: "#" },
    { name: "Item_3", path: "#" },
    { name: "Contact", path: "#" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className='pb-4'
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
      <NavbarContent justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link href='/' aria-current='page' color='foreground'>
            <Image src={logo} alt='Some text' height={60} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex ' justify='center'>
        <Dropdown>
          <NavbarItem isActive={path.includes("#")}>
            <DropdownTrigger>
              <Button
                disableRipple
                className={` ${
                  path.includes("#")
                    ? "font-bold text-base data-[hover=true]:bg-transparent"
                    : "p-0 text-base data-[hover=true]:bg-transparent hover:text-gray-600"
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
        <NavbarItem isActive={path.includes("/equipe")}>
          <Link href='/equipe' aria-current='page' color='foreground'>
            Equipe
          </Link>
        </NavbarItem>

        <NavbarItem isActive={path.includes("/references")}>
          <Link href='/references' aria-current='page' color='foreground'>
            Références
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem isActive={path.includes("/contact")}>
          <Link href='/contact' aria-current='page' color='foreground'>
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className='mt-8'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              // color={
              //   index === 2
              //     ? "primary"
              //     : index === menuItems.length - 1
              //     ? "danger"
              //     : "foreground"
              // }
              className='w-full hover:bg-rose-500 hover:text-white p-2 hover:rounded-xl hover:w-1/2 '
              href={item.path}
              size='lg'
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
