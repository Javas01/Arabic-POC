export type WordNode = {
  id: string;
  base: string;
  english: string;
  color: string;
  category: Categories;
  hide: boolean;
  parts: WordNode[];
  isOnCanvas: boolean;
  position: {
    x: number;
    y: number;
  };
};

enum CategoryToColor {
  NOUN = "green",
  PARTICLE = "blue",
  VERB = "red"
}

export enum Categories {
  NOUN = "noun",
  PARTICLE = "particle",
  VERB = "verb"
}

export const Category = {
  NOUN: {
    color: CategoryToColor.NOUN,
    name: "noun"
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
