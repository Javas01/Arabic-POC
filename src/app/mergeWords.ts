import { WordNode } from "./types";

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

  return [
    ..._words,
    {
      base: draggedWord.base + droppedWord.base + "ِ",
      english: "", // TODO: Add a way to add the english word
      color: "blue",
      category: "noun", // TODO: Add a way to add the category
      hide: false,
      parts: _parts,
      position: {
        x: draggedWord.position.x,
        y: draggedWord.position.y
      }
    }
  ];
}
