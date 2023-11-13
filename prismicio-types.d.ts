// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AccueilDocumentDataSlicesSlice =
  | CallToActionSlice
  | AlternateGridSlice
  | CustomerLogosSlice
  | HeroSlice;

/**
 * Content for Accueil documents
 */
interface AccueilDocumentData {
  /**
   * sujet du moment field in *Accueil*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: accueil.sujetmoment
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sujetmoment: prismic.RichTextField;

  /**
   * Video field in *Accueil*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: accueil.video
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video: prismic.EmbedField;

  /**
   * expertAvatar field in *Accueil*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: accueil.expertavatar
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  expertavatar: prismic.ImageField<never>;

  /**
   * Slice Zone field in *Accueil*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: accueil.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AccueilDocumentDataSlicesSlice> /**
   * Meta Description field in *Accueil*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: accueil.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Accueil*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: accueil.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Accueil*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: accueil.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Accueil document from Prismic
 *
 * - **API ID**: `accueil`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AccueilDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<AccueilDocumentData>,
    "accueil",
    Lang
  >;

type EquipeDocumentDataSlicesSlice = never;

/**
 * Content for Equipe documents
 */
interface EquipeDocumentData {
  /**
   * Photo field in *Equipe*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: equipe.photo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  photo: prismic.ImageField<never>;

  /**
   * Prenom field in *Equipe*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: equipe.prenom
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  prenom: prismic.KeyTextField;

  /**
   * Nom field in *Equipe*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: equipe.nom
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  nom: prismic.KeyTextField;

  /**
   * Titre field in *Equipe*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: equipe.titre
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titre: prismic.KeyTextField;

  /**
   * Parcours field in *Equipe*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: equipe.parcours
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  parcours: prismic.RichTextField;

  /**
   * Domaines de compétences field in *Equipe*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: equipe.domaines_de_competences
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  domaines_de_competences: prismic.RichTextField;

  /**
   * Slice Zone field in *Equipe*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: equipe.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<EquipeDocumentDataSlicesSlice> /**
   * Meta Description field in *Equipe*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: equipe.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Equipe*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: equipe.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Equipe*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: equipe.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Equipe document from Prismic
 *
 * - **API ID**: `equipe`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EquipeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<EquipeDocumentData>, "equipe", Lang>;

type EvalsDocumentDataSlicesSlice = never;

/**
 * Content for Evals documents
 */
interface EvalsDocumentData {
  /**
   * Logo field in *Evals*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: evals.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Prénom field in *Evals*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: evals.prenom
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  prenom: prismic.KeyTextField;

  /**
   * Date field in *Evals*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: evals.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField;

  /**
   * Avis field in *Evals*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: evals.avis
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  avis: prismic.RichTextField;

  /**
   * Note field in *Evals*
   *
   * - **Field Type**: Number
   * - **Placeholder**: min 0 / max 5
   * - **API ID Path**: evals.note
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  note: prismic.NumberField;

  /**
   * Slice Zone field in *Evals*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: evals.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<EvalsDocumentDataSlicesSlice> /**
   * Meta Description field in *Evals*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: evals.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Evals*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: evals.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Evals*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: evals.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Evals document from Prismic
 *
 * - **API ID**: `evals`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EvalsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<EvalsDocumentData>, "evals", Lang>;

type ReferencesDocumentDataSlicesSlice = never;

/**
 * Content for References documents
 */
interface ReferencesDocumentData {
  /**
   * Logo field in *References*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: references.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Titre field in *References*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: references.titre
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titre: prismic.KeyTextField;

  /**
   * Description field in *References*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: references.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Website field in *References*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: references.website
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  website: prismic.LinkField;

  /**
   * Slice Zone field in *References*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: references.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ReferencesDocumentDataSlicesSlice> /**
   * Meta Description field in *References*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: references.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *References*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: references.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *References*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: references.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * References document from Prismic
 *
 * - **API ID**: `references`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ReferencesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ReferencesDocumentData>,
    "references",
    Lang
  >;

export type AllDocumentTypes =
  | AccueilDocument
  | EquipeDocument
  | EvalsDocument
  | ReferencesDocument;

/**
 * Primary content in *AlternateGrid → Primary*
 */
export interface AlternateGridSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: alternate_grid.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *AlternateGrid → Items*
 */
export interface AlternateGridSliceDefaultItem {
  /**
   * title field in *AlternateGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for AlternateGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AlternateGridSliceDefaultPrimary>,
  Simplify<AlternateGridSliceDefaultItem>
>;

/**
 * Primary content in *AlternateGrid → Primary*
 */
export interface AlternateGridSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: alternate_grid.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *AlternateGrid → Items*
 */
export interface AlternateGridSliceImageRightItem {
  /**
   * title field in *AlternateGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *AlternateGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Image Right variation for AlternateGrid Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<AlternateGridSliceImageRightPrimary>,
  Simplify<AlternateGridSliceImageRightItem>
>;

/**
 * Slice variation for *AlternateGrid*
 */
type AlternateGridSliceVariation =
  | AlternateGridSliceDefault
  | AlternateGridSliceImageRight;

/**
 * AlternateGrid Shared Slice
 *
 * - **API ID**: `alternate_grid`
 * - **Description**: AlternateGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AlternateGridSlice = prismic.SharedSlice<
  "alternate_grid",
  AlternateGridSliceVariation
>;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * Image field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *CallToAction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Activ Savoirs
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * paragraph field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Un centre de formations sur mesure
   * - **API ID Path**: call_to_action.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Redirect URL for CTA button
   * - **API ID Path**: call_to_action.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * Nous Contacter field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Vers l'infini et au delà
   * - **API ID Path**: call_to_action.primary.buttonLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonLabel: prismic.KeyTextField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceAlignLeftPrimary {
  /**
   * Image field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *CallToAction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * paragraph field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * buttonLink field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Redirect URL for CTA button
   * - **API ID Path**: call_to_action.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * buttonLabel field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for CTA button
   * - **API ID Path**: call_to_action.primary.buttonLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonLabel: prismic.KeyTextField;
}

/**
 * AlignLeft variation for CallToAction Slice
 *
 * - **API ID**: `alignLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceAlignLeft = prismic.SharedSliceVariation<
  "alignLeft",
  Simplify<CallToActionSliceAlignLeftPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation =
  | CallToActionSliceDefault
  | CallToActionSliceAlignLeft;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Primary content in *CustomerLogos → Primary*
 */
export interface CustomerLogosSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  eyebrowHeadline: prismic.RichTextField;

  /**
   * callToActionLabel field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Primary content in *CustomerLogos → Items*
 */
export interface CustomerLogosSliceDefaultItem {
  /**
   * image field in *CustomerLogos → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * link field in *CustomerLogos → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for CustomerLogos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerLogosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CustomerLogosSliceDefaultPrimary>,
  Simplify<CustomerLogosSliceDefaultItem>
>;

/**
 * Slice variation for *CustomerLogos*
 */
type CustomerLogosSliceVariation = CustomerLogosSliceDefault;

/**
 * CustomerLogos Shared Slice
 *
 * - **API ID**: `customer_logos`
 * - **Description**: CustomerLogos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CustomerLogosSlice = prismic.SharedSlice<
  "customer_logos",
  CustomerLogosSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Image Right variation for Hero Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<HeroSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceImageRight;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AccueilDocument,
      AccueilDocumentData,
      AccueilDocumentDataSlicesSlice,
      EquipeDocument,
      EquipeDocumentData,
      EquipeDocumentDataSlicesSlice,
      EvalsDocument,
      EvalsDocumentData,
      EvalsDocumentDataSlicesSlice,
      ReferencesDocument,
      ReferencesDocumentData,
      ReferencesDocumentDataSlicesSlice,
      AllDocumentTypes,
      AlternateGridSlice,
      AlternateGridSliceDefaultPrimary,
      AlternateGridSliceDefaultItem,
      AlternateGridSliceImageRightPrimary,
      AlternateGridSliceImageRightItem,
      AlternateGridSliceVariation,
      AlternateGridSliceDefault,
      AlternateGridSliceImageRight,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceAlignLeftPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      CallToActionSliceAlignLeft,
      CustomerLogosSlice,
      CustomerLogosSliceDefaultPrimary,
      CustomerLogosSliceDefaultItem,
      CustomerLogosSliceVariation,
      CustomerLogosSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceImageRightPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceImageRight,
    };
  }
}
