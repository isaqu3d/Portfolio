import { v4 as uuidv4 } from "uuid";

export const LINKS_ITEMS = [
  {
    id: uuidv4(),
    name: "Sobre mim",
    href: "/",
  },
  { id: uuidv4(), name: "Projetos", href: "/projects" },
  { id: uuidv4(), name: "Experiências", href: "/work-experiences" },
  { id: uuidv4(), name: "Habilidades", href: "/skills" },
  {
    id: uuidv4(),
    name: "Código",
    href: "https://github.com/isaqu3d/Portfolio",
  },
];
