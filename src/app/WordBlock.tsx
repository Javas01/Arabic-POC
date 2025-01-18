"use client";
import React, { Dispatch, SetStateAction } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable, useDroppable } from "@dnd-kit/core";
// import { getNewWord } from "./mergeWords";
import { WordNode } from "./types";

type WordBlockProps = {
  children?: React.ReactNode;
  word: WordNode;
  id: string;
  showPopover?: WordNode[];
  setShowPopover?: Dispatch<SetStateAction<WordNode[]>>;
};

const WordBlock = (props: WordBlockProps) => {
  const id = props.id;
  const { color, position } = props.word;
  const {
    attributes,
    listeners,
    setNodeRef: setDraggableNodeRef,
    transform
  } = useDraggable({
    id,
    data: props.word
  });
  const { over, setNodeRef: setDroppableNodeRef } = useDroppable({
    id,
    data: props.word
  });

  const canConnect = over && over.id === id;
  const style = {
    transform: CSS.Translate.toString(transform),
    position: "absolute" as const,
    left: `${position.x}px`,
    top: `${position.y}px`,
    zIndex: 1
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
      {/* {props.showPopover.find((x) => x.id === props.id) && (
        <div
          style={{
            padding: "1rem",
            borderRadius: "0.5rem",
            fontSize: "1.5rem",
            background: "white",
            color: "black",
            border: "2px solid black",
            textAlign: "center",
            marginBottom: "1rem",
            width: "400px",
            marginLeft: "-150px"
          }}
        >
          <button>
            {getNewWord(props.showPopover[0], props.showPopover[1])}
          </button>
        </div>
      )} */}
      <div
        style={{
          background: color,
          padding: "1rem",
          borderRadius: "0.5rem",
          fontSize: "1.5rem",
          borderLeft: canConnect ? "5px solid white" : "",
          borderRight: canConnect ? "5px solid white" : "",
          textAlign: "center",
          width: "100px"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

WordBlock.displayName = "WordBlock";

export default WordBlock;
