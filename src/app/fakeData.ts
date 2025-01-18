import { Categories, Category } from "./types";

const nounSpreadObj = {
  color: Category.NOUN.color,
  category: Categories.NOUN,
  hide: false,
  parts: []
};
const particleSpreadObj = {
  color: Category.PARTICLE.color,
  category: Categories.PARTICLE,
  hide: false,
  parts: []
};
const verbSpreadObj = {
  color: Category.VERB.color,
  category: Categories.VERB,
  hide: false,
  parts: []
};

export const WORDS_DATA = [
  {
    ...nounSpreadObj,
    base: "كتاب",
    isOnCanvas: false,
    english: "Book",
    position: {
      x: 50,
      y: 100
    },
    id: "كتاب"
  },
  {
    ...nounSpreadObj,
    base: "بيت",
    isOnCanvas: false,
    english: "House",
    position: {
      x: 50,
      y: 200
    },
    id: "بيت"
  },
  {
    ...particleSpreadObj,
    base: "في",
    isOnCanvas: false,
    english: "In",
    position: {
      x: 50,
      y: 100
    },
    id: "في"
  },
  {
    ...particleSpreadObj,
    base: "على",
    isOnCanvas: false,
    english: "On",
    position: {
      x: 50,
      y: 200
    },
    id: "على"
  },
  {
    ...particleSpreadObj,
    base: "ال",
    isOnCanvas: false,
    english: "The",
    position: {
      x: 50,
      y: 300
    },
    id: "ال"
  },
  {
    ...verbSpreadObj,
    base: "ذهب",
    isOnCanvas: false,
    english: "Went",
    position: {
      x: 50,
      y: 100
    },
    id: "ذهب"
  },
  {
    ...verbSpreadObj,
    base: "قرأ",
    isOnCanvas: false,
    english: "Read",
    position: {
      x: 50,
      y: 200
    },
    id: "قرأ"
  }
];

// ASCII for the Arabic vowels for easy access
export const ARABIC_VOWELS = {
  fatha: "َ",
  damma: "ُ",
  kasra: "ِ",
  shadda: "ّ",
  sukun: "ْ",
  kasratain: "ٍ"
};
