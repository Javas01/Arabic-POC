import { create } from "zustand";
import { WordNode } from "./types";

type Store = {
  canvasWords: WordNode[];
  editing: string;
  setEditing: (id: string) => void;
  setCanvasWords: (updateFn: (words: WordNode[]) => WordNode[]) => void;
  editCanvasWord: (id: string, newText: string) => void;
};

export const useStore = create<Store>((set) => ({
  canvasWords: [],
  editing: "",
  setEditing: (id: string) => set({ editing: id }),
  setCanvasWords: (updateFn) =>
    set((state) => ({ canvasWords: updateFn(state.canvasWords) })),
  editCanvasWord: (id: string, newText: string) => {
    set((state) => ({
      canvasWords: state.canvasWords.map((word) =>
        word.id === id ? { ...word, base: newText } : word
      )
    }));
  }
}));
