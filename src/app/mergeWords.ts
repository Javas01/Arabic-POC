import { Categories, Category, WordNode } from "./types";

export function mergeWords(
  draggedWord: WordNode,
  droppedWord: WordNode,
  allWords: WordNode[],
  customCombinedWord?: string
) {
  const _words = allWords.filter((word) => {
    if (word.base === draggedWord.base || word.base === droppedWord.base)
      return false;
  });
  const _parts = [
    ...(draggedWord.parts.length > 0 ? [...draggedWord.parts] : [draggedWord]),
    ...(droppedWord.parts.length > 0 ? [...droppedWord.parts] : [droppedWord])
  ];

  const newWord = getNewWord(draggedWord, droppedWord);

  console.log("newWord", [
    ..._words,
    {
      base: customCombinedWord ?? newWord,
      id: (customCombinedWord ?? newWord) + Date.now(),
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
  ]);

  return [
    ..._words,
    {
      base: customCombinedWord ?? newWord,
      id: (customCombinedWord ?? newWord) + Date.now(),
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

type Structure = "posessive" | "sentence" | "adjective";
export function getNewWord(
  draggedWord: WordNode,
  droppedWord: WordNode,
  structure?: Structure
) {
  if (
    draggedWord.category === Categories.NOUN &&
    droppedWord.category === Categories.NOUN
  )
    switch (structure) {
      case "posessive":
        return draggedWord.base + "ُ ال" + droppedWord.base + "ِ";
      case "sentence":
        return "ال" + draggedWord.base + "ُ " + droppedWord.base + "ٌ";
      case "adjective":
        return "ال" + draggedWord.base + "ُ " + droppedWord.base + "ُ";
    }

  // default
  return draggedWord.base + droppedWord.base;
}
