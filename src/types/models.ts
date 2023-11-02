import { ImageField, KeyTextField, RichTextField } from "@prismicio/types";

export interface displayComponents {
  [key: string]: JSX.Element;
}

export interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  msg: string;
  society: string;
  tel: string;
}

export interface menuItems {
  name: string;
  path?: string;
  icon?: any;
}

export type Params = { uid: string };

export interface RefProp {
  data: {
    website: any;
    logo: any;
    description: KeyTextField;
    titre: KeyTextField;
  };
}
[];

export interface SelectedType {
  advices: {
    tag: string;
  };
  description: string;
  icon: any;
  path: string;
  picture: {
    src: string;
    alt: string;
  };
  results: {
    text: string;
  };
  supports: {
    text: string;
  }[];
  thematiques: {
    text: string;
  }[];
  title: string;
}

export interface TeamProp {
  domaines_de_competences: RichTextField;
  nom: KeyTextField;
  parcours: RichTextField;
  photo: ImageField;
  prenom: KeyTextField;
  titre: KeyTextField;
  [key: string]: any;
}
[];

export interface Thematique {
  advices: { tag: string };
  description: string;
  icon: JSX.Element;
  path: string;
  picture: {
    src: string;
    alt: string;
  };
  results: {
    text: string;
  };
  supports: { text: string }[];
  thematiques: { text: string }[];
  title: string;
}
