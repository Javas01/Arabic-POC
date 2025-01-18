import { Categories, Category, WordNode } from "./types";

export function mergeWords(
  draggedWord: WordNode,
  droppedWord: WordNode,
  allWords: WordNode[]
) {
  const _words = allWords.map((word) => {
    if (word.base === draggedWord.base || word.base === droppedWord.base)
      return { ...draggedWord, hide: true };
    return { ...word };
  });
  const _parts = [
    ...(draggedWord.parts.length > 0 ? [...draggedWord.parts] : [draggedWord]),
    ...(droppedWord.parts.length > 0 ? [...droppedWord.parts] : [droppedWord])
  ];

  const newWord = getNewWord(draggedWord, droppedWord);

  return [
    ..._words,
    {
      base: newWord,
      id: newWord,
      english: "", // TODO: Add a way to add the english word
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

export function getNewWord(draggedWord: WordNode, droppedWord: WordNode) {
  // Noun + Noun (Posessive)
  // if (
  //   draggedWord.category === Categories.NOUN &&
  //   droppedWord.category === Categories.NOUN
  // )
  //   return draggedWord.base + "ُ ال" + droppedWord.base + "ِ";
  // Noun + Noun (Sentence)
  // if (
  //   draggedWord.category === Categories.NOUN &&
  //   droppedWord.category === Categories.NOUN
  // )
  //   return "ال" + draggedWord.base + "ُ " + droppedWord.base + "ٌ";
  // Noun + Noun (Adjective)
  if (
    draggedWord.category === Categories.NOUN &&
    droppedWord.category === Categories.NOUN
  )
    return "ال" + draggedWord.base + "ُ " + "ال" + droppedWord.base + "ُ ";

  // default
  return draggedWord.base + droppedWord.base;
}
