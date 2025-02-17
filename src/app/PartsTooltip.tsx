"use client";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@radix-ui/react-tooltip";
import React from "react";
import WordBlock from "./WordBlock";
import { WordNode } from "./types";

type PartsTooltipProps = {
  word: WordNode;
  onRightClick?: () => void;
};

export const PartsTooltip = ({ word, onRightClick }: PartsTooltipProps) => {
  return (
    <Tooltip key={word.id}>
      <WordBlock id={word.id} word={word} onRightClick={onRightClick}>
        <TooltipTrigger>{word.base}</TooltipTrigger>
      </WordBlock>
      <TooltipContent side="top" align="center" sideOffset={30}>
        <div className="flex flex-row-reverse text-2xl justify-between min-w-20">
          {word.parts.map((part, i) => (
            <span
              style={{
                color: part.color,
                margin: "0 0.25rem"
              }}
              key={i}
            >
              {part.base}
            </span>
          ))}
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default PartsTooltip;
