"use client";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@radix-ui/react-tooltip";
import React from "react";
import WordBlock from "./WordBlock";
import { WordNode } from "./types";

type EnglishTooltipProps = {
  word: WordNode;
};

export const EnglishTooltip = ({ word }: EnglishTooltipProps) => {
  return (
    <Tooltip key={word.id}>
      <WordBlock id={word.id} word={word}>
        <TooltipTrigger>{word.base}</TooltipTrigger>
      </WordBlock>
      <TooltipContent side="top" align="center" sideOffset={30}>
        <div className="flex flex-row-reverse text-2xl justify-between min-w-20">
          {word.english.map((definition, i) => (
            <span
              style={{
                color: "white",
                margin: "0 0.25rem"
              }}
              key={i}
            >
              {i > 0 ? `${definition} | ` : definition}
            </span>
          ))}
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default EnglishTooltip;
