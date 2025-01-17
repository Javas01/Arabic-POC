"use client";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable, useDroppable } from "@dnd-kit/core";

type WordBlockProps = {
  children?: React.ReactNode;
  id: string;
  color: string;
  position: {
    x: number;
    y: number;
  };
};

const WordBlock = (props: WordBlockProps) => {
  const {
    attributes,
    listeners,
    setNodeRef: setDraggableNodeRef,
    transform
  } = useDraggable({
    id: props.id
  });
  const { over, setNodeRef: setDroppableNodeRef } = useDroppable({
    id: props.id
  });

  const canConnect = over && over.id === props.id;
  const style = {
    transform: CSS.Translate.toString(transform),
    background: props.color,
    padding: "1rem",
    borderRadius: "0.5rem",
    fontSize: "1.5rem",
    borderLeft: canConnect ? "5px solid white" : "",
    borderRight: canConnect ? "5px solid white" : "",
    position: "absolute" as const,
    left: `${props.position.x}px`,
    top: `${props.position.y}px`
  };

  return (
    <div
      ref={(node) => {
        setDraggableNodeRef(node);
        setDroppableNodeRef(node);
      }}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </div>
  );
};

WordBlock.displayName = "WordBlock";

export default WordBlock;
