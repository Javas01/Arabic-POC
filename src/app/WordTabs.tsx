"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { WORDS_DATA } from "./fakeData";
import { Categories, CategoryToColor, WordNode } from "./types";
import PartsTooltip from "./PartsTooltip";
import WordBlock from "./WordBlock";
import dynamic from "next/dynamic";
import { createId } from "./createId";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { verbData } from "./verbData";

const WordCategoryTab = dynamic(() => import("./WordCategoryTab"), {
  ssr: false
});

class WordNodeClass implements WordNode {
  constructor(
    public id: string,
    public base: string,
    public english: string[],
    public color: string,
    public category: Categories,
    public hide: boolean,
    public parts: WordNode[],
    public isOnCanvas: boolean,
    public position: { x: number; y: number }
  ) {}
}

function getVerbStructure(
  form: string,
  tense: string,
  voice: string,
  doer: string
) {
  return verbData
    .filter((verb) => verb.form === form)
    .filter((verb) => verb.tense === tense)
    .filter((verb) => verb.voice === voice)
    .filter((verb) => verb.doer === doer)
    .map(
      (verb) =>
        new WordNodeClass(
          verb.arabic,
          verb.arabic,
          [verb.english],
          CategoryToColor.VERB,
          Categories.VERB,
          false, // will likely remove this
          [],
          false,
          { x: 0, y: 0 }
        )
    );
}

const WordTabs = ({
  setScrollRef
}: {
  setScrollRef: (node: HTMLElement | null) => void;
}) => {
  const [verbStructure, setVerbStructure] = useState<{
    [key in SelectKey]: string;
  }>({
    form: "",
    tense: "",
    voice: "",
    doer: ""
  });

  console.log(verbStructure);

  console.log(
    getVerbStructure(
      verbStructure.form,
      verbStructure.tense,
      verbStructure.voice,
      verbStructure.doer
    )
  );
  return (
    <Tabs defaultValue="noun" className="relative mr-4 flex flex-col">
      <TabsList className="text-center">
        <TabsTrigger value="particle">Particles</TabsTrigger>
        <TabsTrigger value="verb">Verbs</TabsTrigger>
        <TabsTrigger value="noun">Nouns</TabsTrigger>
      </TabsList>
      {Object.values(Categories).map((category) => (
        <TabsContent key={category} value={category}>
          <WordCategoryTab
            setScrollRef={setScrollRef}
            category={category}
            key={category}
          >
            <>
              {category === "verb" && (
                <SelectRow
                  onValueChange={(key, newValue) => {
                    setVerbStructure((prev) => ({
                      ...prev,
                      [key]: newValue
                    }));
                  }}
                />
              )}
              {category === "verb" &&
                getVerbStructure(
                  verbStructure.form,
                  verbStructure.tense,
                  verbStructure.voice,
                  verbStructure.doer
                ).map((verb) => (
                  <div key={verb.id}>
                    {verb.parts.length > 0 ? (
                      <PartsTooltip word={verb} />
                    ) : (
                      <WordBlock
                        word={verb}
                        id={verb.base + createId()}
                        styleOverride={{
                          position: "relative",
                          left: "unset",
                          top: "unset",
                          margin: "0.5rem 0",
                          zIndex: 1
                        }}
                      >
                        {verb.base}
                      </WordBlock>
                    )}
                  </div>
                ))}
              {category !== "verb" &&
                WORDS_DATA.filter(
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
                        id={word.base + createId()}
                        styleOverride={{
                          position: "relative",
                          left: "unset",
                          top: "unset",
                          margin: "0.5rem 0",
                          zIndex: 1
                        }}
                      >
                        {word.base}
                      </WordBlock>
                    )}
                  </div>
                ))}
            </>
          </WordCategoryTab>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default WordTabs;

const forms = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠"];
const tenses = ["Imperfect", "Perfect", "Command"];
const voices = ["Active", "Passive"];
const doers = [
  "أنا", // I (1st person singular)
  "نحن", // We (1st person plural/dual)
  "أنتَ", // You (2nd person singular masculine)
  "أنتِ", // You (2nd person singular feminine)
  "أنتما", // You (2nd person dual masculine/feminine)
  "أنتم", // You (2nd person plural masculine)
  "أنتن", // You (2nd person plural feminine)
  "هو", // He (3rd person singular masculine)
  "هي", // She (3rd person singular feminine)
  "هما (m)", // They (dual masculine)
  "هما (f)", // They (dual feminine)
  "هم", // They (plural masculine)
  "هن" // They (plural feminine)
];

enum SelectKey {
  form = "form",
  tense = "tense",
  voice = "voice",
  doer = "doer"
}

const SelectRow = ({
  onValueChange
}: {
  onValueChange: (key: SelectKey, newValue: string) => void;
}) => {
  return (
    <div className="flex w-[100%] justify-between bg-black text-white">
      <Select
        onValueChange={(newValue) => {
          onValueChange(SelectKey.form, newValue);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Form" />
        </SelectTrigger>
        <SelectContent>
          {forms.map((form) => (
            <SelectItem key={form} value={form}>
              {form}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={(newValue) => {
          onValueChange(SelectKey.tense, newValue);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Tense" />
        </SelectTrigger>
        <SelectContent>
          {tenses.map((tense) => (
            <SelectItem key={tense} value={tense}>
              {tense}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={(newValue) => {
          onValueChange(SelectKey.voice, newValue);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Voice" />
        </SelectTrigger>
        <SelectContent>
          {voices.map((voice) => (
            <SelectItem key={voice} value={voice}>
              {voice}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={(newValue) => {
          onValueChange(SelectKey.doer, newValue);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Doer" />
        </SelectTrigger>
        <SelectContent>
          {doers.map((doer) => (
            <SelectItem key={doer} value={doer}>
              {doer}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
