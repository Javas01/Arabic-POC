import {
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from "@radix-ui/react-tooltip";
import React from "react";
import WordBlock from "./WordBlock";
import { WordNode } from "./types";

type PartsTooltipProps = {
  base: string;
  color: string;
  position: {
    x: number;
    y: number;
  };
  parts: WordNode[];
};

export const PartsTooltip = ({
  base,
  color,
  position,
  parts
}: PartsTooltipProps) => {
  return (
    <Tooltip key={base}>
      <WordBlock id={base} color={color} position={position}>
        <TooltipTrigger>{base}</TooltipTrigger>
      </WordBlock>
      <TooltipContent side="top" align="center" sideOffset={30}>
        <div className="flex flex-row-reverse text-2xl justify-between w-20">
          {parts.map((part, i) => (
            <span
              style={{
                color: part.color
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
