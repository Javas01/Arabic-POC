import { Categories, Category, WordNode } from "./types";

export function mergeWords(
  draggedWord: WordNode,
  droppedWord: WordNode,
  allWords: WordNode[],
  customCombinedWord?: string
) {
  const _words = allWords.filter((word) =>
    word.id === draggedWord.id || word.id === droppedWord.id ? false : true
  );
  const _parts = [
    ...(draggedWord.parts.length > 0 ? [...draggedWord.parts] : [draggedWord]),
    ...(droppedWord.parts.length > 0 ? [...droppedWord.parts] : [droppedWord])
  ];

  const newWord = getNewWord(draggedWord, droppedWord);

  return [
    ..._words,
    {
      base: customCombinedWord ?? newWord,
      id: (customCombinedWord ?? newWord) + Date.now(),
      english: [""], // TODO: Add a way to add the english word
      isOnCanvas: true,
      color: Category.NOUN.color, // TODO: Add a way to add the color
      category: Categories.NOUN, // TODO: Add a way to add the category
      hide: false,
      parts: _parts,
      position: {
        x: draggedWord.position.x,
        y: draggedWord.position.y
      }
    }
  ];
}

type Structure = "posessive" | "sentence" | "adjective_indefinite" | "adjective_definite";
export function getNewWord(
  draggedWord: WordNode,
  droppedWord: WordNode,
  structure?: Structure
) {
  if (
    draggedWord.category === Categories.DEFINITE &&
    droppedWord.category === Categories.NOUN
  ) {
    return "ال" + droppedWord.base; // Removed a space between the definite article and noun
  }

  if (
    draggedWord.category === Categories.PRONOUN &&
    droppedWord.category === Categories.NOUN
  ) {
    return draggedWord.forms?.nominative + " " + droppedWord.base;
  }

  if (
    draggedWord.category === Categories.NOUN &&
    droppedWord.category === Categories.PRONOUN
  ) {
    return draggedWord.base + droppedWord.forms?.genitive;
  }

  if (
    draggedWord.category === Categories.PARTICLE &&
    droppedWord.category === Categories.PRONOUN
  ) {
    if (!draggedWord.effects) {
      console.error("No effects found for the particle");
      return "";
    }

    if (draggedWord.effects.length > 1) {
      console.error("Multiple effects found for the particle");
      return "";
    }

    if (draggedWord.special) {
      let specialWord = draggedWord.special + droppedWord.forms?.genitive;
      if (new RegExp(/(ُيْ|َيْ)/g).test(specialWord)) {
        specialWord = specialWord.replace(/(ُيْ|َيْ)/g, "ِيْ");
      }
      return specialWord;
    }
    const lastLetter = draggedWord.base.split("")[draggedWord.base.length - 1];
    if (
      droppedWord.forms?.special &&
      (new RegExp("(يْ|ىْ)$").test(draggedWord.base) || lastLetter === "ِ")
    )
      return draggedWord.base + droppedWord.forms?.special;

    const effectKey = draggedWord.effects[0] as keyof typeof droppedWord.forms;
    let newWord = draggedWord.base + droppedWord.forms?.[effectKey];

    if (new RegExp("ىْيْ|يْيْ", "g").test(newWord)) {
      newWord = newWord.replace(/ىْيْ|يْيْ/g, "يَّ");
    } else if (new RegExp("ْيْ", "g").test(newWord)) {
      newWord = newWord.replace(/ْيْ$/, "ِّيْ");
    } else if (new RegExp("نْنَ", "g").test(newWord)) {
      newWord = newWord.replace(/نْنَ/, "نَّ");
    } else if (new RegExp(/(ُيْ|َيْ)/g).test(newWord)) {
      newWord = newWord.replace(/(ُيْ|َيْ)/g, "ِيْ");
    }

    return newWord;
  }

  if (
    draggedWord.category === Categories.NOUN &&
    droppedWord.category === Categories.NOUN
  )
    switch (structure) {
      case "posessive":
        return draggedWord.base.replace(/^ال/,"") + " " + "ال" + droppedWord.base.replace(/^ال/,"") + "ِ";
      case "sentence":
        return "ال" + draggedWord.base.replace(/^ال/,"") + "ُ " + droppedWord.base.replace(/^ال/,"") + "ٌ";
      case "adjective_definite":
        return "ال" + draggedWord.base.replace(/^ال/,"") + "ُ " + "ال" + droppedWord.base.replace(/^ال/,"") + "ُ";
      case "adjective_indefinite":
        return draggedWord.base.replace(/^ال/,"") + "ُ " + droppedWord.base.replace(/^ال/,"") + "ُ";  
    }

  // default
  return draggedWord.base + " " + droppedWord.base;
}
