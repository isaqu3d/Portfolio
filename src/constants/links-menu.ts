import { v4 as uuidv4 } from "uuid";

export const LINKS_ITEMS = [
  { id: uuidv4(), key: "about", href: "/" },
  { id: uuidv4(), key: "projects", href: "/projects" },
  { id: uuidv4(), key: "experiences", href: "/work-experiences" },
  { id: uuidv4(), key: "skills", href: "/skills" },
  { id: uuidv4(), key: "code", href: "https://github.com/isaqu3d/Portfolio" },
];
