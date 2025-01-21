"use client";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { WordNode } from "./types";

type WordBlockProps = {
  children?: React.ReactNode;
  word: WordNode;
  id: string;
  onRightClick?: () => void;
  styleOverride?: React.CSSProperties;
};

const WordBlock = (props: WordBlockProps) => {
  const id = props.id;
  const styleOverride = props.styleOverride;
  const { color, position } = props.word;
  const {
    attributes,
    listeners,
    setNodeRef: setDraggableNodeRef,
    transform,
    active
  } = useDraggable({
    id,
    data: props.word
  });
  const { over, setNodeRef: setDroppableNodeRef } = useDroppable({
    id,
    data: props.word
  });

  const canConnect = over && over.id === id && id !== active?.id;
  const style = {
    transform: CSS.Translate.toString(transform),
    position: "absolute" as const,
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: 999
  };

  return (
    <div
      ref={(node) => {
        setDraggableNodeRef(node);
        setDroppableNodeRef(node);
      }}
      style={{
        ...style,
        ...styleOverride
      }}
      {...listeners}
      {...attributes}
    >
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          props.onRightClick?.();
        }}
        style={{
          background: color,
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1.5rem",
          borderLeft: canConnect ? "5px solid white" : "",
          borderRight: canConnect ? "5px solid white" : "",
          textAlign: "center",
          minWidth: "100px"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

WordBlock.displayName = "WordBlock";

export default WordBlock;
