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
    english: "Book",
    position: {
      x: 0,
      y: 0
    }
  },
  {
    ...nounSpreadObj,
    base: "بيت",
    english: "House",
    position: {
      x: 0,
      y: 400
    }
  },
  {
    ...particleSpreadObj,
    base: "في",
    english: "In",
    position: {
      x: 0,
      y: 100
    }
  },
  {
    ...particleSpreadObj,
    base: "على",
    english: "On",
    position: {
      x: 0,
      y: 500
    }
  },
  {
    ...particleSpreadObj,
    base: "ال",
    english: "The",
    position: {
      x: 0,
      y: 200
    }
  },
  {
    ...verbSpreadObj,
    base: "ذهب",
    english: "Went",
    position: {
      x: 0,
      y: 600
    }
  },
  {
    ...verbSpreadObj,
    base: "قرأ",
    english: "Read",
    position: {
      x: 0,
      y: 700
    }
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
