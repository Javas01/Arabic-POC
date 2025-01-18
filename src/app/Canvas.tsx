"use client";
import React from "react";
import { useDroppable } from "@dnd-kit/core";

type CanvasProps = {
  children: React.ReactNode;
};
const Canvas = ({ children }: CanvasProps) => {
  const { over, setNodeRef } = useDroppable({
    id: "canvas"
  });

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
      }}
      className="relative w-4/5 h-100vh mt-10 z-10"
      style={{
        // highlight the drop area
        background:
          over?.id === "canvas"
            ? "rgb(55 65 81 / var(--tw-bg-opacity, 1))" // Darker gray for dark mode
            : "rgb(31 41 55 / var(--tw-bg-opacity, 1))" // Even darker background for contrast
      }}
    >
      {children}
    </div>
  );
};

export default Canvas;
