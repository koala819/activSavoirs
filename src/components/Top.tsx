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
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import whitelogo from "../../public/images/logo.png";
import blackLogo from "../../public/images/logoDM.png";
import { thematiques } from "@/src/lib/thematiques";
import { menuItems } from "@/src/types/models";
import { FiChevronDown } from "react-icons/fi";

export function Top() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const { resolvedTheme } = useTheme();

  const logo = resolvedTheme === "dark" ? blackLogo : whitelogo;

  const menuItems: menuItems[] = [
    { name: "Accueil", path: "/" },
    { name: "Nos Thématiques" },
    ...thematiques.map((item) => ({
      name: item.name,
      path: item.path,
      icon: item.icon,
    })),
    { name: "Equipe pédagogique", path: "/equipe" },
    { name: "Contact", path: "/contact" },
  ];

  const colorVariants: { [key: string]: string } = {
    "Stratégie d'entreprise": "bg-[#C7B4FF]",
    "Intelligence Artificielle": "bg-[#FF9C64]",
    "Excellence Industrielle 4.0": "bg-[#FFEA9E]",
    "Optimisation des Ressources Humaines": "bg-[#B9C0FF]",
    "Efficacité Manageriale": "bg-[#D994FA]",
    "Performance Commerciale": "bg-[#E3FF92]",
    "Marketing Digital": "bg-[#FFB9E7]",
    "Qualité et environnement": "bg-[#81D6A8]",
    "Soft Kills": "bg-[#D1E4E2]",
  };

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
              <NavbarItem isActive={path.includes("/thematiques")}>
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
                    <span className='text-base'>Nos thématiques</span>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu aria-label='Item_3' items={thematiques}>
                {(thematique: any) => {
                  return (
                    <DropdownItem
                      key={thematique.name}
                      color='primary'
                      variant='shadow'
                      className={`${
                        colorVariants[thematique.name]
                      } p-4 space-x-4`}
                      description={thematique.description}
                      startContent={thematique.icon}
                      onClick={() => router.push(thematique.path || "#")}
                    >
                      {thematique.name}
                    </DropdownItem>
                  );
                }}
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

      <NavbarMenu>
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
