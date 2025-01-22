interface ArabicVerb {
  arabic: string; // Arabic Verb, e.g., "قُلتُ"
  form: string; // Form of the verb, e.g., "1"
  tense: "Perfect" | "Imperfect" | "Command"; // Verb tense
  voice: "Active" | "Passive"; // Verb voice
  english: string; // English meaning of the verb
  doer: string; // Doer in Arabic, e.g., "أنا"
}

export const verbData: ArabicVerb[] = [
  {
    arabic: "قُلتُ",
    form: "١",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قَالَ",
    form: "١",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قَالَتْ",
    form: "١",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قُلْنَا",
    form: "١",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلْتُمْ",
    form: "١",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قَالُوا",
    form: "١",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قِيلَ",
    form: "١",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قِيلَتْ",
    form: "١",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قِيلْتُ",
    form: "١",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قِيلْنَا",
    form: "١",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "يَقُولُ",
    form: "١",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تَقُولُ",
    form: "١",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "أَقُولُ",
    form: "١",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نَقُولُ",
    form: "١",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "١",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "١",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "يُقَالُ",
    form: "١",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تُقَالُ",
    form: "١",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "تُقُولْتُ",
    form: "١",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نُقَالُ",
    form: "١",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "١",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "١",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قُلْ",
    form: "١",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنت"
  },
  {
    arabic: "قُولِي",
    form: "١",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتِ"
  },
  {
    arabic: "قُولَا",
    form: "١",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتما"
  },
  {
    arabic: "قُولُوا",
    form: "١",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قُلْنَا",
    form: "١",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلتُ",
    form: "٢",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قَالَ",
    form: "٢",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قَالَتْ",
    form: "٢",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قُلْنَا",
    form: "٢",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلْتُمْ",
    form: "٢",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قَالُوا",
    form: "٢",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قِيلَ",
    form: "٢",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قِيلَتْ",
    form: "٢",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قِيلْتُ",
    form: "٢",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قِيلْنَا",
    form: "٢",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "يَقُولُ",
    form: "٢",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تَقُولُ",
    form: "٢",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "أَقُولُ",
    form: "٢",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نَقُولُ",
    form: "٢",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٢",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٢",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "يُقَالُ",
    form: "٢",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تُقَالُ",
    form: "٢",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "تُقُولْتُ",
    form: "٢",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نُقَالُ",
    form: "٢",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٢",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٢",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قُلْ",
    form: "٢",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنت"
  },
  {
    arabic: "قُولِي",
    form: "٢",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتِ"
  },
  {
    arabic: "قُولَا",
    form: "٢",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتما"
  },
  {
    arabic: "قُولُوا",
    form: "٢",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قُلْنَا",
    form: "٢",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلتُ",
    form: "٣",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قَالَ",
    form: "٣",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قَالَتْ",
    form: "٣",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قُلْنَا",
    form: "٣",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلْتُمْ",
    form: "٣",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قَالُوا",
    form: "٣",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قِيلَ",
    form: "٣",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قِيلَتْ",
    form: "٣",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قِيلْتُ",
    form: "٣",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قِيلْنَا",
    form: "٣",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "يَقُولُ",
    form: "٣",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تَقُولُ",
    form: "٣",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "أَقُولُ",
    form: "٣",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نَقُولُ",
    form: "٣",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٣",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٣",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "يُقَالُ",
    form: "٣",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تُقَالُ",
    form: "٣",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "تُقُولْتُ",
    form: "٣",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نُقَالُ",
    form: "٣",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٣",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٣",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قُلْ",
    form: "٣",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنت"
  },
  {
    arabic: "قُولِي",
    form: "٣",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتِ"
  },
  {
    arabic: "قُولَا",
    form: "٣",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتما"
  },
  {
    arabic: "قُولُوا",
    form: "٣",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قُلْنَا",
    form: "٣",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلتُ",
    form: "٤",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قَالَ",
    form: "٤",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قَالَتْ",
    form: "٤",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قُلْنَا",
    form: "٤",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلْتُمْ",
    form: "٤",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قَالُوا",
    form: "٤",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قِيلَ",
    form: "٤",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قِيلَتْ",
    form: "٤",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قِيلْتُ",
    form: "٤",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قِيلْنَا",
    form: "٤",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "يَقُولُ",
    form: "٤",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تَقُولُ",
    form: "٤",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "أَقُولُ",
    form: "٤",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نَقُولُ",
    form: "٤",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٤",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٤",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "يُقَالُ",
    form: "٤",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تُقَالُ",
    form: "٤",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "تُقُولْتُ",
    form: "٤",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نُقَالُ",
    form: "٤",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٤",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٤",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قُلْ",
    form: "٤",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنت"
  },
  {
    arabic: "قُولِي",
    form: "٤",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتِ"
  },
  {
    arabic: "قُولَا",
    form: "٤",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتما"
  },
  {
    arabic: "قُولُوا",
    form: "٤",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قُلْنَا",
    form: "٤",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلتُ",
    form: "٥",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قَالَ",
    form: "٥",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قَالَتْ",
    form: "٥",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قُلْنَا",
    form: "٥",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلْتُمْ",
    form: "٥",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قَالُوا",
    form: "٥",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قِيلَ",
    form: "٥",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قِيلَتْ",
    form: "٥",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قِيلْتُ",
    form: "٥",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قِيلْنَا",
    form: "٥",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "يَقُولُ",
    form: "٥",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تَقُولُ",
    form: "٥",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "أَقُولُ",
    form: "٥",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نَقُولُ",
    form: "٥",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٥",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٥",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "يُقَالُ",
    form: "٥",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تُقَالُ",
    form: "٥",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "تُقُولْتُ",
    form: "٥",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نُقَالُ",
    form: "٥",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٥",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٥",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قُلْ",
    form: "٥",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنت"
  },
  {
    arabic: "قُولِي",
    form: "٥",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتِ"
  },
  {
    arabic: "قُولَا",
    form: "٥",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتما"
  },
  {
    arabic: "قُولُوا",
    form: "٥",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قُلْنَا",
    form: "٥",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلتُ",
    form: "٦",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قَالَ",
    form: "٦",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قَالَتْ",
    form: "٦",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قُلْنَا",
    form: "٦",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلْتُمْ",
    form: "٦",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قَالُوا",
    form: "٦",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قِيلَ",
    form: "٦",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قِيلَتْ",
    form: "٦",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قِيلْتُ",
    form: "٦",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قِيلْنَا",
    form: "٦",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "يَقُولُ",
    form: "٦",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تَقُولُ",
    form: "٦",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "أَقُولُ",
    form: "٦",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نَقُولُ",
    form: "٦",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٦",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٦",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "يُقَالُ",
    form: "٦",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تُقَالُ",
    form: "٦",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "تُقُولْتُ",
    form: "٦",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نُقَالُ",
    form: "٦",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٦",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٦",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قُلْ",
    form: "٦",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنت"
  },
  {
    arabic: "قُولِي",
    form: "٦",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتِ"
  },
  {
    arabic: "قُولَا",
    form: "٦",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتما"
  },
  {
    arabic: "قُولُوا",
    form: "٦",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قُلْنَا",
    form: "٦",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلتُ",
    form: "٧",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قَالَ",
    form: "٧",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قَالَتْ",
    form: "٧",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قُلْنَا",
    form: "٧",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلْتُمْ",
    form: "٧",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قَالُوا",
    form: "٧",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قِيلَ",
    form: "٧",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قِيلَتْ",
    form: "٧",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قِيلْتُ",
    form: "٧",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قِيلْنَا",
    form: "٧",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "يَقُولُ",
    form: "٧",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تَقُولُ",
    form: "٧",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "أَقُولُ",
    form: "٧",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نَقُولُ",
    form: "٧",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٧",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٧",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "يُقَالُ",
    form: "٧",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تُقَالُ",
    form: "٧",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "تُقُولْتُ",
    form: "٧",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نُقَالُ",
    form: "٧",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٧",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٧",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قُلْ",
    form: "٧",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنت"
  },
  {
    arabic: "قُولِي",
    form: "٧",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتِ"
  },
  {
    arabic: "قُولَا",
    form: "٧",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتما"
  },
  {
    arabic: "قُولُوا",
    form: "٧",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قُلْنَا",
    form: "٧",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلتُ",
    form: "٨",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قَالَ",
    form: "٨",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قَالَتْ",
    form: "٨",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قُلْنَا",
    form: "٨",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلْتُمْ",
    form: "٨",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قَالُوا",
    form: "٨",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قِيلَ",
    form: "٨",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قِيلَتْ",
    form: "٨",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قِيلْتُ",
    form: "٨",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قِيلْنَا",
    form: "٨",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "يَقُولُ",
    form: "٨",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تَقُولُ",
    form: "٨",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "أَقُولُ",
    form: "٨",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نَقُولُ",
    form: "٨",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٨",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٨",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "يُقَالُ",
    form: "٨",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تُقَالُ",
    form: "٨",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "تُقُولْتُ",
    form: "٨",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نُقَالُ",
    form: "٨",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٨",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٨",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قُلْ",
    form: "٨",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنت"
  },
  {
    arabic: "قُولِي",
    form: "٨",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتِ"
  },
  {
    arabic: "قُولَا",
    form: "٨",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتما"
  },
  {
    arabic: "قُولُوا",
    form: "٨",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قُلْنَا",
    form: "٨",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلتُ",
    form: "٩",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قَالَ",
    form: "٩",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قَالَتْ",
    form: "٩",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قُلْنَا",
    form: "٩",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلْتُمْ",
    form: "٩",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قَالُوا",
    form: "٩",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قِيلَ",
    form: "٩",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قِيلَتْ",
    form: "٩",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قِيلْتُ",
    form: "٩",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قِيلْنَا",
    form: "٩",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "يَقُولُ",
    form: "٩",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تَقُولُ",
    form: "٩",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "أَقُولُ",
    form: "٩",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نَقُولُ",
    form: "٩",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٩",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٩",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "يُقَالُ",
    form: "٩",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تُقَالُ",
    form: "٩",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "تُقُولْتُ",
    form: "٩",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نُقَالُ",
    form: "٩",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "٩",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "٩",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قُلْ",
    form: "٩",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنت"
  },
  {
    arabic: "قُولِي",
    form: "٩",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتِ"
  },
  {
    arabic: "قُولَا",
    form: "٩",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتما"
  },
  {
    arabic: "قُولُوا",
    form: "٩",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قُلْنَا",
    form: "٩",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلتُ",
    form: "١٠",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قَالَ",
    form: "١٠",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قَالَتْ",
    form: "١٠",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قُلْنَا",
    form: "١٠",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "قُلْتُمْ",
    form: "١٠",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قَالُوا",
    form: "١٠",
    tense: "Perfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قِيلَ",
    form: "١٠",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "قِيلَتْ",
    form: "١٠",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "قِيلْتُ",
    form: "١٠",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "قِيلْنَا",
    form: "١٠",
    tense: "Perfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "يَقُولُ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تَقُولُ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "أَقُولُ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نَقُولُ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Active",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "يُقَالُ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هو"
  },
  {
    arabic: "تُقَالُ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هي"
  },
  {
    arabic: "تُقُولْتُ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنا"
  },
  {
    arabic: "نُقَالُ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "نحن"
  },
  {
    arabic: "تَقُولُونَ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "يَقُولُونَ",
    form: "١٠",
    tense: "Imperfect",
    voice: "Passive",
    english: "To say",
    doer: "هم"
  },
  {
    arabic: "قُلْ",
    form: "١٠",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنت"
  },
  {
    arabic: "قُولِي",
    form: "١٠",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتِ"
  },
  {
    arabic: "قُولَا",
    form: "١٠",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتما"
  },
  {
    arabic: "قُولُوا",
    form: "١٠",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "أنتم"
  },
  {
    arabic: "قُلْنَا",
    form: "١٠",
    tense: "Command",
    voice: "Active",
    english: "To say",
    doer: "نحن"
  }
];
