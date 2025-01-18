"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    <Tabs defaultValue="noun" className="w-1/5 relative top-0 left-0">
      <TabsList>
        <TabsTrigger value="particle">Particles</TabsTrigger>
        <TabsTrigger value="verb">Verbs</TabsTrigger>
        <TabsTrigger value="noun">Nouns</TabsTrigger>
      </TabsList>
      {Object.values(Categories).map((category) => (
        <WordCategoryTab category={category} key={category}>
          {WORDS_DATA.filter((word) => word.category === category).map(
            (word) => (
              <div key={word.id}>
                {word.parts.length > 0 ? (
                  <PartsTooltip word={word} />
                ) : (
                  <WordBlock word={word} id={word.base + Date.now()}>
                    {word.base}
                  </WordBlock>
                )}
              </div>
            )
          )}
        </WordCategoryTab>
      ))}
    </Tabs>
  );
};

export default WordTabs;
