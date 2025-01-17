"use client";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import dynamic from "next/dynamic";
import { useState } from "react";
import { WordNode } from "./types";
import { canMerge } from "./canMerge";
import { WORDS_DATA } from "./fakeData";
import { mergeWords } from "./mergeWords";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PartsTooltip } from "./PartsTooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

const WordBlock = dynamic(() => import("./WordBlock"), { ssr: false });

export default function Home() {
  const { toast } = useToast();
  const [words, setWords] = useState<WordNode[]>(WORDS_DATA);
  const [showPopover, setShowPopover] = useState(true);

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;

    if (over) {
      // Attempt to merge the dragged word with the word it was dropped on
      const draggedWord = words.find(
        (word) => word.base === event.active.id
      ) as (typeof words)[0];
      draggedWord.position.x = over.rect.left + over.rect.width;
      draggedWord.position.y = over.rect.top;
      const droppedWord = words.find(
        (word) => word.base === over.id
      ) as (typeof words)[0];

      if (!canMerge(draggedWord, droppedWord, toast)) return;

      const newWords = mergeWords(draggedWord, droppedWord, words);
      setWords(newWords);
    } else {
      // Move the dragged word to the new position
      const draggedWord = words.find(
        (word) => word.base === event.active.id
      ) as (typeof words)[0];
      draggedWord.position.x += event.delta.x;
      draggedWord.position.y += event.delta.y;

      setWords((oldWords) =>
        oldWords.map((word) =>
          word.base === draggedWord.base ? draggedWord : word
        )
      );
    }
  }

  return (
    <TooltipProvider delayDuration={0}>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <DndContext onDragEnd={handleDragEnd}>
          {words
            .filter((word) => !word.hide)
            .map(({ base, color, position, parts }) =>
              parts.length > 0 ? (
                <PartsTooltip
                  key={base}
                  base={base}
                  color={color}
                  position={position}
                  parts={parts}
                />
              ) : (
                <WordBlock
                  key={base}
                  id={base}
                  color={color}
                  position={position}
                >
                  {base}
                </WordBlock>
              )
            )}
        </DndContext>
        <Toaster />
      </main>
    </TooltipProvider>
  );
}
