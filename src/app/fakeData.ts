import { Categories, Category } from "./types";

const definiteSpreadObj = {
  color: Category.DEFINITE.color,
  category: Categories.DEFINITE,
  hide: false,
  parts: []
};
const nounSpreadObj = {
  color: Category.NOUN.color,
  category: Categories.NOUN,
  hide: false,
  parts: []
};
const proNounSpreadObj = {
  color: Category.PRONOUN.color,
  category: Categories.PRONOUN,
  hide: false,
  parts: []
};
const particleSpreadObj = {
  color: Category.PARTICLE.color,
  category: Categories.PARTICLE,
  hide: false,
  parts: []
};
// const verbSpreadObj = {
//   color: Category.VERB.color,
//   category: Categories.VERB,
//   hide: false,
//   parts: []
// };

export const WORDS_DATA = [
  {
    ...definiteSpreadObj,
    base: "ال",
    // rootLetters: ["ا", "ل"],
    isOnCanvas: false,
    isDefinite: true,
    english: ["The"],
    position: {
      x: 0,
      y: 0
    },
    id: "ال"
  },
  {
    ...nounSpreadObj,
    base: "اسْمٌ",
    isOnCanvas: false,
    english: ["Name"],
    position: {
      x: 0,
      y: 0
    },
    id: "اسْمٌ"
  },
  {
    ...nounSpreadObj,
    base: "اللهُ",
    isOnCanvas: false,
    english: ["Allah"],
    position: {
      x: 0,
      y: 0
    },
    id: "اللهُ"
  },
  {
    ...nounSpreadObj,
    base: "كتابٌ",
    isOnCanvas: false,
    english: ["Book"],
    position: {
      x: 0,
      y: 0
    },
    id: "كتابٌ"
  },
  {
    ...nounSpreadObj,
    base: "بيتٌ",
    isOnCanvas: false,
    english: ["House"],
    position: {
      x: 0,
      y: 0
    },
    id: "بيتٌ"
  },
  {
    ...nounSpreadObj,
    base: "ربٌّ",
    isOnCanvas: false,
    english: ["Lord"],
    position: {
      x: 0,
      y: 0
    },
    id: "ربٌّ"
  },
  {
    ...nounSpreadObj,
    base: "نَاسٌ",
    isOnCanvas: false,
    english: ["Mankind"],
    position: {
      x: 0,
      y: 0
    },
    id: "نَاسٌ"
  },
  {
    ...nounSpreadObj,
    base: "إِلَٰهٌ",
    isOnCanvas: false,
    english: ["god"],
    position: {
      x: 0,
      y: 0
    },
    id: "إِلَٰهٌ"
  },
  {
    ...nounSpreadObj,
    base: "شَرٌّ",
    isOnCanvas: false,
    english: ["Evil"],
    position: {
      x: 0,
      y: 0
    },
    id: "شَرٌّ"
  },
  {
    ...nounSpreadObj,
    base: "وَسْوَاسٌ",
    isOnCanvas: false,
    english: ["Whisperer"],
    position: {
      x: 0,
      y: 0
    },
    id: "وَسْوَاسٌ"
  },
  {
    ...nounSpreadObj,
    base: "خَنَّاسٌ",
    isOnCanvas: false,
    english: ["Withdrawer"],
    position: {
      x: 0,
      y: 0
    },
    id: "خَنَّاسٌ"
  },
  {
    ...nounSpreadObj,
    base: "مَلِكٌ",
    isOnCanvas: false,
    english: ["Ruler"],
    position: {
      x: 0,
      y: 0
    },
    id: "مَلِكٌ"
  },
  {
    ...nounSpreadObj,
    base: "صُدُورٌ",
    isOnCanvas: false,
    english: ["Heart"],
    position: {
      x: 0,
      y: 0
    },
    id: "صُدُورٌ"
  },
  {
    ...nounSpreadObj,
    base: "جِنَّةٌ",
    isOnCanvas: false,
    english: ["Jinn"],
    position: {
      x: 0,
      y: 0
    },
    id: "جِنَّةٌ"
  },
  {
    ...proNounSpreadObj,
    base: "هُوَ",
    isOnCanvas: false,
    english: ["He"],
    // the attached forms
    forms: {
      nominative: "هُوَ",
      accusative: "هُ",
      genitive: "هُ",
      special: "هِ"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "هُوَ"
  },
  {
    ...proNounSpreadObj,
    base: "هُمَاْ",
    isOnCanvas: false,
    english: ["They (2)"],
    forms: {
      nominative: "هُمَاْ",
      accusative: "هُمَاْ",
      genitive: "هُمَاْ",
      special: "هِمَاْ"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "هُمَاْ"
  },
  {
    ...proNounSpreadObj,
    base: "هُمْ",
    isOnCanvas: false,
    english: ["They (3+)"],
    forms: {
      nominative: "هُمْ",
      accusative: "هُمْ",
      genitive: "هُمْ",
      special: "هِمْ"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "هُمْ"
  },
  {
    ...proNounSpreadObj,
    base: "هِيَ",
    isOnCanvas: false,
    english: ["She"],
    forms: {
      nominative: "هِيَ",
      accusative: "هَا",
      genitive: "هَا"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "هِيَ"
  },
  {
    ...proNounSpreadObj,
    base: "هُنَّ",
    isOnCanvas: false,
    english: ["They (3+)"],
    forms: {
      nominative: "هُنَّ",
      accusative: "هُنَّ",
      genitive: "هُنَّ",
      special: "هِنَّ"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "هُنَّ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنْتَ",
    isOnCanvas: false,
    english: ["You"],
    forms: {
      nominative: "أَنْتَ",
      accusative: "كَ",
      genitive: "كَ"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "أَنْتَ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنْتُمَاْ",
    isOnCanvas: false,
    english: ["You (2)"],
    forms: {
      nominative: "أَنْتُمَاْ",
      accusative: "كُمَاْ",
      genitive: "كُمَاْ"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "أَنْتُمَاْ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنْتُمْ",
    isOnCanvas: false,
    english: ["You (3+)"],
    forms: {
      nominative: "أَنْتُمْ",
      accusative: "كُمْ",
      genitive: "كُمْ"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "أَنْتُمْ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنْتِ",
    isOnCanvas: false,
    english: ["You"],
    forms: {
      nominative: "أَنْتِ",
      accusative: "كِ",
      genitive: "كِ"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "أَنْتِ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنْتُنَّ",
    isOnCanvas: false,
    english: ["You (3+)"],
    forms: {
      nominative: "أَنْتُنَّ",
      accusative: "كُنَّ",
      genitive: "كُنَّ"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "أَنْتُنَّ"
  },
  {
    ...proNounSpreadObj,
    base: "أَنَاْ",
    isOnCanvas: false,
    english: ["I"],
    forms: {
      nominative: "أَنَاْ",
      accusative: "يْ",
      genitive: "يْ"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "أَنَاْ"
  },
  {
    ...proNounSpreadObj,
    base: "نَحْنُ",
    isOnCanvas: false,
    english: ["We"],
    forms: {
      nominative: "نَحْنُ",
      accusative: "نَاْ",
      genitive: "نَاْ"
    },
    position: {
      x: 0,
      y: 0
    },
    id: "نَحْنُ"
  },
  {
    ...particleSpreadObj,
    base: "فيْ",
    isOnCanvas: false,
    english: ["In"],
    effects: ["genitive"],
    position: {
      x: 0,
      y: 0
    },
    id: "فيْ"
  },
  {
    ...particleSpreadObj,
    base: "علىْ",
    isOnCanvas: false,
    english: ["On"],
    effects: ["genitive"],
    position: {
      x: 0,
      y: 0
    },
    id: "علىْ"
  },
  {
    ...particleSpreadObj,
    base: "مِنْ",
    isOnCanvas: false,
    english: ["From"],
    effects: ["genitive"],
    position: {
      x: 0,
      y: 0
    },
    id: "مِنْ"
  },
  {
    ...particleSpreadObj,
    base: "إنَّ",
    isOnCanvas: false,
    english: ["Certainly"],
    effects: ["accusative"],
    position: {
      x: 0,
      y: 0
    },
    id: "إنَّ"
  },
  {
    ...particleSpreadObj,
    base: "وَ",
    isOnCanvas: false,
    english: ["And", "By"],
    effects: ["nominative", "genitive"],
    position: {
      x: 0,
      y: 0
    },
    id: "وَ"
  },
  {
    ...particleSpreadObj,
    base: "لَيْسَ",
    isOnCanvas: false,
    english: ["Perhaps"],
    effects: ["accusative"],
    position: {
      x: 0,
      y: 0
    },
    id: "لَيْسَ"
  },
  {
    ...particleSpreadObj,
    base: "لِ",
    isOnCanvas: false,
    english: ["For"],
    effects: ["genitive"],
    special: "لَ",
    attached: true,
    position: {
      x: 0,
      y: 0
    },
    id: "لِ"
  },
  {
    ...particleSpreadObj,
    base: "بِ",
    isOnCanvas: false,
    english: ["With"],
    effects: ["genitive"],
    attached: true,
    position: {
      x: 0,
      y: 0
    },
    id: "بِ"
  },
  {
    ...particleSpreadObj,
    base: "عَنْ",
    isOnCanvas: false,
    english: ["About"],
    effects: ["genitive"],
    position: {
      x: 0,
      y: 0
    },
    id: "عَنْ"
  },
  {
    ...particleSpreadObj,
    base: "مَعَ",
    isOnCanvas: false,
    english: ["With"],
    effects: ["genitive"],
    position: {
      x: 0,
      y: 0
    },
    id: "مَعَ"
  }
  // {
  //   ...verbSpreadObj,
  //   base: "ذهب",
  //   isOnCanvas: false,
  //   english: ["He went"],
  //   position: {
  //     x: 0,
  //     y: 0
  //   },
  //   id: "ذهب"
  // },
  // {
  //   ...verbSpreadObj,
  //   base: "قرأ",
  //   isOnCanvas: false,
  //   english: ["He read"],
  //   position: {
  //     x: 0,
  //     y: 0
  //   },
  //   id: "قرأ"
  // },
  // {
  //   ...verbSpreadObj,
  //   base: "قَوَلَ",
  //   isOnCanvas: false,
  //   english: ["He said"],
  //   position: {
  //     x: 0,
  //     y: 0
  //   },
  //   id: "قَوَلَ"
  // },
  // {
  //   ...verbSpreadObj,
  //   base: "عَوَذَ",
  //   isOnCanvas: false,
  //   english: ["He sought refuge"],
  //   position: {
  //     x: 0,
  //     y: 0
  //   },
  //   id: "عَوَذَ"
  // },
  // {
  //   ...verbSpreadObj,
  //   base: "وَسْوَسَ",
  //   isOnCanvas: false,
  //   english: ["He whispered"],
  //   position: {
  //     x: 0,
  //     y: 0
  //   },
  //   id: "وَسْوَسَ"
  // }
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
