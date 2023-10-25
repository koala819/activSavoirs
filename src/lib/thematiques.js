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

export const thematiques = [
  {
    name: "Stratégie d'entreprise",
    path: "#",
    icon: <FaChessBoard />,
  },
  {
    name: "Intelligence Artificielle",
    path: "#",
    icon: <FaRobot />,
  },
  {
    name: "Excellence Industrielle 4.0",
    path: "#",
    icon: <FaIndustry />,
  },
  {
    name: "Optimisation des Ressources Humaines",
    path: "#",
    icon: <FaUsersCog />,
  },
  {
    name: "Efficacité Manageriale",
    path: "#",
    icon: <FaUserTie />,
  },
  {
    name: "Performance Commerciale",
    path: "#",
    icon: <FaChartLine />,
  },
  { name: "Marketing Digital", path: "#", icon: <FaGlobe /> },
  {
    name: "Qualité et environnement",
    path: "#",
    icon: <FaLeaf />,
  },
  { name: "Soft Kills", path: "#", icon: <FaHandshake /> },
];
