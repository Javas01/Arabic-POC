"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { WORDS_DATA } from "./fakeData";
import { Categories } from "./types";
import PartsTooltip from "./PartsTooltip";
import WordBlock from "./WordBlock";
import dynamic from "next/dynamic";

const WordCategoryTab = dynamic(() => import("./WordCategoryTab"), {
  ssr: false
});

const WordTabs = () => {
  return (
    <Tabs defaultValue="noun" className="w-1/5 relative">
      <TabsList>
        <TabsTrigger value="particle">Particles</TabsTrigger>
        <TabsTrigger value="verb">Verbs</TabsTrigger>
        <TabsTrigger value="noun">Nouns</TabsTrigger>
      </TabsList>
      {Object.values(Categories).map((category) => (
        <TabsContent key={category} value={category}>
          <WordCategoryTab category={category} key={category}>
            {WORDS_DATA.filter(
              (word) =>
                word.category === category ||
                (word.category === "definite" && category === "noun") ||
                (word.category === "pronoun" && category === "noun")
            ).map((word) => (
              <div key={word.id}>
                {word.parts.length > 0 ? (
                  <PartsTooltip word={word} />
                ) : (
                  <WordBlock
                    word={word}
                    id={word.base + Date.now()}
                    styleOverride={{
                      position: "relative",
                      left: "unset",
                      top: "unset",
                      width: "100px",
                      margin: "0.5rem 0"
                    }}
                  >
                    {word.base}
                  </WordBlock>
                )}
              </div>
            ))}
          </WordCategoryTab>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default WordTabs;
