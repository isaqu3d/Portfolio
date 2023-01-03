import { Menu } from "@headlessui/react";
import { default as NextLink } from "next/link";
import { useRouter } from "next/router";
import { BiMenu } from "react-icons/bi";

const LinkItem = ({ href, children, ...props }) => {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <NextLink href={href} passHref scroll={false}>
      <a
        href={href}
        className={active ? "text-teal-500 " : "hover:underline"}
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
};
export function MenuItem() {
  return (
    <div className="md:hidden flex">
      <Menu>
        <Menu.Button className="border-[1.5px] border-gray-600 p-2 rounded-md text-xl">
          <BiMenu />
        </Menu.Button>
        <Menu.Items className="flex flex-col rounded-md absolute right-3 -bottom-32 bg-[#31384c] py-2 px-4  w-52 gap-[6px] text-white-100 animate-ToggleMenu">
          <Menu.Item>
            <LinkItem href="/">Sobre mim</LinkItem>
          </Menu.Item>

          <Menu.Item>
            <LinkItem href="/projects">Projetos</LinkItem>
          </Menu.Item>

          <Menu.Item>
            <LinkItem href="/skills">Habilidades</LinkItem>
          </Menu.Item>
          <Menu.Item>
            <LinkItem
              href="https://github.com/X-SpeedBlack-X/portfolio-chakra"
              target="_blank"
            >
              Código
            </LinkItem>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}
