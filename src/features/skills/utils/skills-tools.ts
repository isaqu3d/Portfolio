import {
  SiGithub,
  SiInsomnia,
  SiLinux,
  SiNotion,
  SiPostman,
  SiSpotify,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { v4 as uuidv4 } from "uuid";

export const SKILLS_TOOLS = [
  {
    id: uuidv4(),
    icon: SiVisualstudiocode,
    color: "#23A7F2",
  },

  {
    id: uuidv4(),
    icon: SiVercel,
  },

  {
    id: uuidv4(),
    icon: SiLinux,
  },

  {
    id: uuidv4(),
    icon: SiInsomnia,
    color: "#4d00c8",
  },

  {
    id: uuidv4(),
    icon: SiPostman,
    color: "#fb7505",
  },
  {
    id: uuidv4(),
    icon: SiGithub,
  },

  {
    id: uuidv4(),
    icon: SiNotion,
  },

  {
    icon: SiSpotify,
    id: uuidv4(),
    color: "#1DB954",
  },
];
