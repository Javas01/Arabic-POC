"use client";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Categories, WordNode } from "./types";
import { canMerge } from "./canMerge";
import { WORDS_DATA } from "./fakeData";
import { mergeWords } from "./mergeWords";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PartsTooltip } from "./PartsTooltip";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WordCategoryTab from "./WordCategoryTab";
import Popover from "./Popover";

const WordBlock = dynamic(() => import("./WordBlock"), { ssr: false });

type Popover = {
  words: WordNode[];
  position: { x: number; y: number };
};

export default function Home() {
  const { toast } = useToast();
  const [canvasWords, setCanvasWords] = useState<WordNode[]>([]);
  const [popover, setPopover] = useState<Popover | null>(null);

  function handleDragEnd(event: DragEndEvent) {
    const { over, active, delta } = event;
    const draggedWord = active.data.current as WordNode;
    const droppedWord = over?.data.current as WordNode;

    if (draggedWord.isOnCanvas || droppedWord?.isOnCanvas) {
      if (over) {
        if (over.id === active.id) return;
        // Attempt to merge the dragged word with the word it was dropped on
        if (
          draggedWord.category === Categories.NOUN &&
          droppedWord.category === Categories.NOUN
        ) {
          setPopover({
            words: [droppedWord, draggedWord],
            position: {
              x: droppedWord.position.x + 200,
              y: droppedWord.position.y - 50
            }
          });
          setCanvasWords((oldWords) =>
            oldWords
              .filter((word) => word.id !== draggedWord.id)
              .concat({
                ...draggedWord,
                position: {
                  x: droppedWord.position.x + 100,
                  y: droppedWord.position.y
                }
              })
          );
          return;
        }

        if (!canMerge(draggedWord, droppedWord, toast)) return;

        const newWords = mergeWords(
          {
            ...draggedWord,
            position: {
              x: droppedWord.position.x,
              y: droppedWord.position.y
            }
          },
          droppedWord,
          canvasWords
        );
        setCanvasWords(newWords);
      } else {
        // Move the dragged word to the new position
        setCanvasWords((oldWords) =>
          oldWords.map((word) =>
            word.id === draggedWord.id
              ? {
                  ...word,
                  position: {
                    x: draggedWord.position.x + delta.x,
                    y: draggedWord.position.y + delta.y
                  }
                }
              : word
          )
        );
      }
    } else {
      // Move the dragged word to the new position
      setCanvasWords((x) => [
        ...x,
        {
          ...draggedWord,
          id: draggedWord.base + Date.now(),
          position: {
            x: draggedWord.position.x + delta.x,
            y: draggedWord.position.y + delta.y
          },
          isOnCanvas: true
        }
      ]);
    }
  }

  function handlePopoverChoice(event: React.MouseEvent<HTMLButtonElement>) {
    if (!popover) return;
    if (!event.target) return;
    const newWords = mergeWords(
      popover.words[0],
      popover.words[1],
      canvasWords,
      (event.target as HTMLElement).innerText
    );
    setCanvasWords(newWords);
  }

  return (
    <TooltipProvider delayDuration={0}>
      <main
        className="flex flex-row min-h-screen py-2"
        onClick={() => setPopover(null)} // TODO: create a backdrop component to handle this
      >
        {popover && (
          <Popover
            position={popover.position}
            words={popover.words}
            onChoice={handlePopoverChoice}
          />
        )}
        <DndContext onDragEnd={handleDragEnd}>
          <Tabs defaultValue="noun" className="w-1/5 relative top-0 left-0">
            <TabsList>
              <TabsTrigger value="particle">Particles</TabsTrigger>
              <TabsTrigger value="verb">Verbs</TabsTrigger>
              <TabsTrigger value="noun">Nouns</TabsTrigger>
            </TabsList>
            <WordCategoryTab
              words={WORDS_DATA} // Pass the non stateful data
              category={Categories.PARTICLE}
            />
            <WordCategoryTab
              words={WORDS_DATA} // Pass the non stateful data
              category={Categories.VERB}
            />
            <WordCategoryTab
              words={WORDS_DATA} // Pass the non stateful data
              category={Categories.NOUN}
            />
          </Tabs>
          <div className="relative w-4/5 h-100vh mt-10 bg-gray-100">
            {canvasWords
              .filter((word) => !word.hide)
              .map((word) => (
                <div key={word.id}>
                  {word.parts.length > 0 ? (
                    <PartsTooltip word={word} />
                  ) : (
                    <WordBlock word={word} id={word.id}>
                      {word.base}
                    </WordBlock>
                  )}
                </div>
              ))}
          </div>
        </DndContext>
        <Toaster />
      </main>
    </TooltipProvider>
  );
}
