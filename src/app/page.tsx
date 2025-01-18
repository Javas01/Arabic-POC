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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WordBlock = dynamic(() => import("./WordBlock"), { ssr: false });

export default function Home() {
  const { toast } = useToast();
  const [canvasWords, setCanvasWords] = useState<WordNode[]>([]);
  const [showPopover, setShowPopover] = useState<WordNode[]>([]);

  function showNounNounPopover(id: WordNode, id2: WordNode) {
    setShowPopover([id, id2]);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    const draggedWord = active.data.current as WordNode;
    const droppedWord = over?.data.current as WordNode;
    if (draggedWord.isOnCanvas || droppedWord?.isOnCanvas) {
      if (over) {
        if (over.id === active.id) return;
        // Attempt to merge the dragged word with the word it was dropped on
        draggedWord.position.x = over.rect.left + over.rect.width;
        draggedWord.position.y = over.rect.top;

        if (
          draggedWord.category === Categories.NOUN &&
          droppedWord.category === Categories.NOUN
        ) {
          showNounNounPopover(droppedWord, draggedWord);
          return;
        }

        if (!canMerge(draggedWord, droppedWord, toast)) return;

        const newWords = mergeWords(draggedWord, droppedWord, canvasWords);
        setCanvasWords(newWords);
      } else {
        // Move the dragged word to the new position
        setCanvasWords((oldWords) =>
          oldWords.map((word) =>
            word.id === draggedWord.id
              ? {
                  ...word,
                  position: {
                    x: draggedWord.position.x + event.delta.x,
                    y: draggedWord.position.y + event.delta.y
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
            x: draggedWord.position.x + event.delta.x,
            y: draggedWord.position.y + event.delta.y
          },
          isOnCanvas: true
        }
      ]);
    }
  }

  return (
    <TooltipProvider delayDuration={0}>
      <main className="flex flex-row min-h-screen py-2">
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
              showPopover={showPopover}
              setShowPopover={setShowPopover}
            />
            <WordCategoryTab
              words={WORDS_DATA} // Pass the non stateful data
              category={Categories.VERB}
              showPopover={showPopover}
              setShowPopover={setShowPopover}
            />
            <WordCategoryTab
              words={WORDS_DATA} // Pass the non stateful data
              category={Categories.NOUN}
              showPopover={showPopover}
              setShowPopover={setShowPopover}
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
                    <WordBlock
                      word={word}
                      id={word.id}
                      showPopover={showPopover}
                      setShowPopover={setShowPopover}
                    >
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

function WordCategoryTab({
  words,
  category,
  showPopover,
  setShowPopover
}: {
  words: WordNode[];
  category: Categories;
  showPopover: WordNode[];
  setShowPopover: (value: React.SetStateAction<WordNode[]>) => void;
}) {
  return (
    <TabsContent
      value={category}
      style={{
        height: "calc(100vh - 2rem)",
        width: "15rem",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none",
        border: "1px solid #ccc"
      }}
    >
      {words
        .filter((word) => !word.hide)
        .filter((word) => word.category === category)
        .map((word) => (
          <div key={word.id}>
            {word.parts.length > 0 ? (
              <PartsTooltip word={word} />
            ) : (
              <WordBlock
                word={word}
                id={word.base + Date.now()}
                showPopover={showPopover}
                setShowPopover={setShowPopover}
              >
                {word.base}
              </WordBlock>
            )}
          </div>
        ))}
    </TabsContent>
  );
}
