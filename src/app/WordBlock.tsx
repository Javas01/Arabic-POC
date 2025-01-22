"use client";
import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { WordNode } from "./types";
import { Input } from "@/components/ui/input";
import { useStore } from "./store";

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

  const canConnect =
    over && over.id === id && id !== active?.id && props.word.isOnCanvas;

  const style = {
    transform: CSS.Translate.toString(transform),
    position: "absolute" as const,
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: 999
  };

  const editCanvasWord = useStore((state) => state.editCanvasWord);
  const isEditing = useStore((state) => state.editing === id);
  const setEditing = useStore((state) => state.setEditing);

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
          fontSize: "2.5rem",
          borderLeft: canConnect ? "5px solid white" : "",
          borderRight: canConnect ? "5px solid white" : "",
          textAlign: "center",
          minWidth: "150px"
        }}
        onClick={(e) => {
          if (e.shiftKey) {
            setEditing(props.id as string);
            return;
          }
        }}
      >
        {isEditing ? (
          <Input
            autoFocus
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              border: "none"
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Escape") {
                setEditing("");
              }
            }}
            size={10}
            dir="rtl"
            value={props.word.base}
            onChange={(e) => {
              const input = e.target;
              // Allow only Arabic characters
              input.value = input.value.replace(/[^\u0600-\u06FF\s]/g, "");
              editCanvasWord(props.word.id, input.value);
            }}
          />
        ) : (
          props.children
        )}
      </div>
    </div>
  );
};

WordBlock.displayName = "WordBlock";

export default WordBlock;
