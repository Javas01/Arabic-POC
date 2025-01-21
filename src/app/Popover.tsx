"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { getNewWord } from "./mergeWords";
import { WordNode } from "./types";

type PopoverProps = {
  position: { x: number; y: number };
  words: WordNode[];
  onChoice: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Popover = ({ position, words, onChoice }: PopoverProps) => {
  return (
    <div
      className="p-[0.1rem] rounded-md bg-white text-black border-2 border-black text-center mb-4 absolute z-[1000] flex flex-row gap-4"
      style={{
        top: position.y,
        left: position.x
      }}
    >
      <Button onClick={onChoice} className="text-2xl" size="lg" variant="ghost">
        {getNewWord(words[0], words[1], "posessive")}
      </Button>
      <Button onClick={onChoice} className="text-2xl" size="lg" variant="ghost">
        {getNewWord(words[0], words[1], "adjective_indefinite")}
      </Button>
      <Button onClick={onChoice} className="text-2xl" size="lg" variant="ghost">
        {getNewWord(words[0], words[1], "adjective_definite")}
      </Button>
      <Button onClick={onChoice} className="text-2xl" size="lg" variant="ghost">
        {getNewWord(words[0], words[1], "sentence")}
      </Button>
    </div>
  );
};

export default Popover;
