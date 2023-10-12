import { ImageField, KeyTextField, RichTextField } from "@prismicio/types";

export interface RefProp {
  data: {
    website: any;
    logo: ImageField;
    description: KeyTextField;
    titre: KeyTextField;
  };
}
[];

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
