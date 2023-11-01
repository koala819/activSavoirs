import {
  // FaChartLine,
  // FaChessBoard,
  // FaGlobe,
  FaHandshake,
  FaIndustry,
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
    picture: {
      src: "images/efficaciteManageriale.png",
      alt: "Bannière Efficacité Manageriale",
    },
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
    title: "Efficacité Managériale",
  },
  excellenceIndustrielle: {
    advices: { tag: "Maîtriser la prospection immobilière de terrain" },
    description: "Manufacture Numérique",
    icon: <FaIndustry size={20} />,
    path: "#",
    picture: {
      src: "images/excellenceIndustrielle.png",
      alt: "Bannière Excellence Industrielle",
    },
    results: {
      text: "La formation en excellence industrielle conduit à une amélioration significative de l'efficacité opérationnelle, la réduction des coûts et l'augmentation de la qualité des produits. Les participants apprennent à optimiser les processus, à minimiser les déchets et à mettre en œuvre des pratiques de gestion efficaces pour atteindre une excellence opérationnelle durable.",
    },
    supports: [
      { text: "Présentation PowerPoint" },
      { text: "Études de cas" },
      { text: "Jeux de rôle" },
      { text: "Vidéos de formation" },
    ],
    thematiques: [
      {
        text: "L’optimisation des chaînes d’approvisionnement et de production",
      },

      { text: "L’amélioration de la maintenance préventive et prédictive" },
      {
        text: "Le développement des performances industrielles",
      },
      { text: "La réduction des défaillances" },
      { text: "L’écoute active" },
      { text: "L’automatisation des contrôles qualité" },
      { text: "L’aide à la décision" },
      { text: "L’optimisation des procédés de production" },
      { text: "La réduction de consommation de matière ou d’énergie" },
    ],
    title: "Excellence Industrielle 4.0",
  },
  softKills: {
    advices: { tag: "Piges et prospection téléphonique" },
    description: "Compétences Interpersonnelles",
    icon: <FaHandshake size={20} />,
    path: "#",
    picture: {
      src: "images/softKills.png",
      alt: "Bannière Soft Kills",
    },
    results: {
      text: 'La formation sur les compétences "soft skills" améliore la communication, la résolution de conflits, le leadership, et renforce la collaboration dans l\'environnement de travail. Cela se traduit par des relations interpersonnelles plus harmonieuses, une meilleure productivité, et une équipe plus engagée et efficace, favorisant ainsi la réussite organisationnelle.',
    },
    supports: [
      { text: "Présentation PowerPoint" },
      { text: "Études de cas" },
      { text: "Jeux de rôle" },
      { text: "Vidéos de formation" },
    ],
    thematiques: [
      {
        text: "L’autonomie ",
      },

      { text: "La capacité d'adaptation" },
      {
        text: "La résolution de problèmes complexes",
      },
      { text: "L’esprit critique (constructive)" },
      { text: "La créativité" },
      { text: "L’esprit d’équipe" },
      {
        text: "Les intelligences: émotionnelle, relationnelle et situationnelle",
      },
      { text: "Le jugement et la prise de décision" },
      { text: "Le sens du service" },
      { text: "La négociation" },
      { text: "La flexibilité" },
      { text: "La communication de conquête" },
    ],
    title: "Soft Kills",
  },
};
