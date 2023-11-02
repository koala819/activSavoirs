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
import { Thematique } from "@/src/types/models";
import { tags } from "@/src/types/tags";

export const thematiques: Thematique[] = [
  {
    advices: { tag: tags[5].name || "" },
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
  {
    advices: { tag: tags[1].name || "" },
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
  {
    advices: { tag: tags[3].name || "" },
    description: "IA Innovante",
    icon: <FaRobot size={20} />,
    path: "#",
    picture: {
      src: "images/intelligenceArtificielle.png",
      alt: "Bannière Intelligence Artificielle",
    },
    results: {
      text: "La formation en intelligence artificielle (IA) permet aux participants d'acquérir des compétences en IA, de comprendre ses applications, et de mettre en œuvre des solutions IA. Cela favorise l'innovation, l'automatisation des processus, l'analyse de données avancée, et améliore la prise de décision, ce qui stimule la compétitivité et la croissance de l'entreprise.",
    },
    supports: [
      { text: "Présentation PowerPoint" },
      { text: "Études de cas" },
      { text: "Jeux de rôle" },
      { text: "Vidéos de formation" },
    ],
    thematiques: [
      { text: "La programmation" },
      { text: "Le machine learning & la modélisation" },
      {
        text: "Le Big Data",
      },
      { text: "La robotique" },
      { text: "Le Cloud Computing" },
      { text: "L'apprentissage profond et les réseaux neuronaux" },
      { text: "L'automatisation des processus et des tâches" },
      { text: "L'éthique de l'intelligence artificielle" },
      { text: "L'analyse de données avancée et prédictive" },
      { text: "L'intégration de l'IA dans l'entreprise" },
    ],
    title: "Intelligence Artificielle",
  },
  {
    advices: { tag: tags[4].name || "" },
    description: "Gestion des Talents",
    icon: <FaUsersCog size={20} />,
    path: "#",
    picture: {
      src: "images/optimisationRH.png",
      alt: "Bannière Optimisation RH",
    },
    results: {
      text: "La formation en optimisation des ressources humaines (RH) conduit à une gestion plus stratégique des talents, à une amélioration de la rétention des employés et à des processus RH plus efficaces. Cela se traduit par une main-d'œuvre plus motivée et productive, une réduction des coûts de recrutement, et une meilleure adaptabilité aux besoins de l'entreprise.",
    },
    supports: [
      { text: "Présentation PowerPoint" },
      { text: "Études de cas" },
      { text: "Jeux de rôle" },
      { text: "Vidéos de formation" },
    ],
    thematiques: [
      {
        text: "Bonification des conditions de vie au travail (MQVT Management de la qualité de vie au travail)",
      },

      {
        text: "Développement du sens au travail et diminution de l’éco anxiété",
      },
      {
        text: "Renforcement de l’enthousiasme",
      },
      { text: "La définition et le partage de valeurs collaboratives" },
      { text: "Projet collaboratif" },
      { text: "La gestion de crise et de conflits" },
      {
        text: "L’audit social",
      },
      { text: "L’audit de compétences" },
      {
        text: "L’étude et la définition des nouveaux besoins de compétences",
      },
      { text: "Baisse de l’exposition à des situations dangereuses" },
      { text: "Optimisation du port d’EPI" },
    ],
    title: "Optimisation des Ressources Humaines",
  },
  {
    advices: { tag: tags[7].name || "" },
    description: "Croissance des Ventes",
    icon: <FaChartLine size={20} />,
    path: "#",
    picture: {
      src: "images/performanceCommerciale.png",
      alt: "Bannière Performance Commerciale",
    },
    results: {
      text: "La formation en performance commerciale renforce les compétences en vente, la connaissance des produits et la communication. Les participants voient une augmentation des ventes, une fidélisation client améliorée, et une meilleure performance des équipes de vente. Cela se traduit par une croissance des revenus et une plus grande compétitivité sur le marché.",
    },
    supports: [
      { text: "Présentation PowerPoint" },
      { text: "Études de cas" },
      { text: "Jeux de rôle" },
      { text: "Vidéos de formation" },
    ],
    thematiques: [
      {
        text: "La communication commerciale",
      },

      {
        text: "La prospection (physique, téléphonique et numérique)",
      },
      {
        text: "La PNL au service du savoir être commercial",
      },
      { text: "Les étapes essentielles de la vente" },
      { text: "La méthode de l’anti-vente" },
      { text: "Le questionnement productif" },
      {
        text: "L’écoute active",
      },
      { text: "Les méthodes de négociations " },
      { text: "Les techniques de conclusions" },
      { text: "Le développement du prix de vente moyen" },
      { text: "L’amélioration de la récurrence commerciale" },
    ],
    title: "Performance Commerciale",
  },
  {
    advices: { tag: tags[6].name || "" },
    description: "Normes Environnementales",
    icon: <FaLeaf size={20} />,
    path: "#",
    picture: {
      src: "images/qualiteEnvironnement.png",
      alt: "Bannière Qualite Environnement",
    },
    results: {
      text: "La formation sur la qualité et l'environnement conduit à une meilleure conformité aux normes de qualité et de durabilité. Cela se traduit par une réduction des déchets, des coûts, et des risques environnementaux. Les employés deviennent des agents de changement pour des pratiques plus respectueuses de l'environnement, améliorant ainsi la réputation de l'entreprise.",
    },
    supports: [
      { text: "Présentation PowerPoint" },
      { text: "Études de cas" },
      { text: "Jeux de rôle" },
      { text: "Vidéos de formation" },
    ],
    thematiques: [
      {
        text: "Le niveau d’exigence zéro défaut",
      },

      {
        text: "Les lunettes et tablettes connectées",
      },
      {
        text: "L’anticipation des dérives de production",
      },
      { text: "La diminution du taux de retour" },
      { text: "L’automatisation des contrôles qualités des produits finis" },
      { text: "L’amélioration continue de la qualité du produit" },
      {
        text: "L’intégration de solutions connectées pour développer les apports aux enjeux RSE",
      },
      {
        text: "L’optimisation de la rationalisation de l’utilisation des matières premières et des ressources de l’usine (eau, énergie, etc.)",
      },
    ],
    title: "Qualité et Environnement",
  },
  {
    advices: { tag: tags[2].name || "" },
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
  {
    advices: { tag: tags[0].name || "" },
    description: "Vision Stratégique",
    icon: <FaChessBoard size={20} />,
    path: "#",
    picture: {
      src: "images/strategieEntreprise.png",
      alt: "Bannière Stratégie Entreprise",
    },
    results: {
      text: "La formation en stratégie d'entreprise renforce la prise de décision, l'alignement organisationnel et la vision globale. Elle permet d'élaborer et de mettre en œuvre des stratégies efficaces, d'optimiser les ressources et de saisir les opportunités de marché. Résultat : une entreprise plus compétitive, agile et orientée vers la réussite à long terme.",
    },
    supports: [
      { text: "Présentation PowerPoint" },
      { text: "Études de cas" },
      { text: "Jeux de rôle" },
      { text: "Vidéos de formation" },
    ],
    thematiques: [
      {
        text: "Elaboration et/ou actualisation du plan stratégique d’entreprise",
      },

      { text: "Politique de développement" },
      {
        text: "Politique de R&D",
      },
      { text: "Politique financière" },
      { text: "Politique industrielle" },
      { text: "Politique RH" },
      {
        text: "Structuration du management stratégique",
      },
      { text: "Mise en place et/ou optimisation du COMEX" },
      { text: "Mise en place et/ou optimisation du CODIR" },
      { text: "Dynamique et intelligence collective" },
      { text: "Management de transition" },
    ],
    title: "Stratégie d'Entreprise",
  },
  {
    advices: { tag: tags[8].name || "" },
    description: "Stratégie en ligne",
    icon: <FaGlobe size={20} />,
    path: "#",
    picture: {
      src: "images/webMarketing.png",
      alt: "Bannière Web Marketing",
    },
    results: {
      text: "La formation en web marketing améliore la compréhension des stratégies en ligne, de l'optimisation des moteurs de recherche (SEO), du marketing sur les réseaux sociaux, et de la publicité en ligne. Cela se traduit par une augmentation du trafic Web, une meilleure visibilité en ligne, un engagement accru des clients, et des taux de conversion améliorés.",
    },
    supports: [
      { text: "Présentation PowerPoint" },
      { text: "Études de cas" },
      { text: "Jeux de rôle" },
      { text: "Vidéos de formation" },
    ],
    thematiques: [
      {
        text: "Définir sa stratégie Web marketing",
      },

      { text: "Optimiser le référencement de son site web" },
      {
        text: "L’e-mailing au service des actions commerciales",
      },
      { text: "L’écriture web au service de la performance numérique" },
      { text: "Médias sociaux : Engager les clients via les plateformes" },
      { text: "Analyse de données : Mesurer les résultats des campagnes" },
      {
        text: "Création de contenu : Générer du contenu pertinent",
      },
      { text: "Marketing d'influence : Collaborer avec les influenceurs" },
      { text: "Publicité ciblée : Atteindre des audiences spécifiques" },
    ],
    title: "Web Marketing",
  },
];
