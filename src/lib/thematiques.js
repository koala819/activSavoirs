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
    description: "Vision Stratégique",
    path: "#",
    icon: <FaChessBoard size={20} />,
  },
  {
    name: "Intelligence Artificielle",
    description: "IA Innovante",
    path: "#",
    icon: <FaRobot size={20} />,
  },
  {
    name: "Excellence Industrielle 4.0",
    description: "Manufacture Numérique",
    path: "#",
    icon: <FaIndustry size={20} />,
  },
  {
    name: "Optimisation des Ressources Humaines",
    description: "Gestion des Talents",
    path: "#",
    icon: <FaUsersCog size={20} />,
  },
  {
    name: "Efficacité Manageriale",
    description: "Leadership Performant",
    path: "#",
    icon: <FaUserTie size={20} />,
  },
  {
    name: "Performance Commerciale",
    description: "Croissance des Ventes",
    path: "#",
    icon: <FaChartLine size={20} />,
  },
  {
    name: "Marketing Digital",
    description: "Stratégie en Ligne",
    path: "#",
    icon: <FaGlobe size={20} />,
  },
  {
    name: "Qualité et environnement",
    description: "Normes Environnementales",
    path: "#",
    icon: <FaLeaf size={20} />,
  },
  {
    name: "Soft Kills",
    description: "Compétences Interpersonnelles",
    path: "#",
    icon: <FaHandshake size={20} />,
  },
];
