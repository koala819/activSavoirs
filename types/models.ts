import { ImageField, KeyTextField, RichTextField } from "@prismicio/types";

export interface TeamProp {
  domaines_de_competences: RichTextField;
  nom: KeyTextField;
  parcours: RichTextField;
  photo: ImageField;
  prenom: KeyTextField;
  titre: KeyTextField;
}
