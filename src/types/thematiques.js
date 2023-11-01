import {
  // FaChartLine,
  // FaChessBoard,
  // FaGlobe,
  // FaHandshake,
  // FaIndustry,
  // FaLeaf,
  // FaRobot,
  FaUserTie,
  // FaUsersCog,
} from "react-icons/fa";

export const thematiques = {
  efficaciteManageriale: {
    advices: { tag: "Savoir optimiser son efficacité commerciale" },
    description: "Leadership Performant",
    icon: <FaUserTie size={20} />,
    path: "#",
    picture: { src: "images/efficaciteManageriale.png", alt: "plouf" },
    results: {
      text: "Après avoir suivi la formation sur l'efficacité managériale, les participants sont mieux équipés pour prendre des décisions éclairées, améliorer la communication interne, résoudre les conflits, et motiver leurs équipes. La formation renforce leurs compétences en leadership et les prépare à relever les défis de la gestion avec succès.",
    },
    supports: [
      { text: "Présentation PowerPoint" },
      { text: "Études de cas" },
      { text: "Jeux de rôle" },
      { text: "Vidéos de formation" },
    ],
    thematiques: [
      {
        text: "Le renforcement du positionnement managérial au moyen des 4 étapes clefs",
      },

      { text: "Le développement du Leadership" },
      {
        text: "La communication et les décisions qui impliquent et fédèrent",
      },
      { text: "Le questionnement productif" },
      { text: "L’écoute active" },
      { text: "La négociation d’objectifs motivant et responsabilisant" },
      { text: "Le feedback constructif" },
      { text: "Le passage efficace de consigne" },
      { text: "Le recadrage positif et constructif" },
      { text: "L’entretien annuel et professionnel" },
      { text: "La conduite de briefing" },
      { text: "L’animation de réunion" },
      { text: "L’usage des techniques de créativité" },
    ],
    title: "Efficacité managériale",
  },
  excellenceIndustrielle: {},
};
