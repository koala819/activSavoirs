import { ImageField, KeyTextField, RichTextField } from "@prismicio/types";

export interface RefProp {
  data: {
    website: any;
    logo: any;
    description: KeyTextField;
    titre: KeyTextField;
  };
}
[];

export type ServiceComponents = {
  [key: string]: JSX.Element;
};

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

export type Params = { uid: string };
