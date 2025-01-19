export type WordNode = {
  id: string;
  base: string;
  english: string[];
  color: string;
  category: Categories;
  hide: boolean;
  parts: WordNode[];
  isOnCanvas: boolean;
  isDefinite?: boolean;
  forms?: {
    nominative: string;
    accusative: string;
    genitive: string;
    special?: string;
  };
  special?: string;
  effects?: string[];
  position: {
    x: number;
    y: number;
  };
};

enum CategoryToColor {
  PRONOUN = "lightgreen",
  NOUN = "green",
  PARTICLE = "blue",
  VERB = "red",
  DEFINITE = "purple"
}

export enum Categories {
  NOUN = "noun",
  PARTICLE = "particle",
  VERB = "verb",
  DEFINITE = "definite",
  PRONOUN = "pronoun"
}

export const Category = {
  NOUN: {
    color: CategoryToColor.NOUN,
    name: "noun"
  },
  PRONOUN: {
    color: CategoryToColor.PRONOUN,
    name: "pronoun"
  },
  DEFINITE: {
    color: CategoryToColor.DEFINITE,
    name: "definite"
  },
  PARTICLE: {
    color: CategoryToColor.PARTICLE,
    name: "particle"
  },
  VERB: {
    color: CategoryToColor.VERB,
    name: "verb"
  }
};
type CategoryKey = keyof typeof CategoryToColor;

type CategoryDefinition = {
  color: CategoryToColor;
  name: string;
};

export type CategoryMap = Record<CategoryKey, CategoryDefinition>;
