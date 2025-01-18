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
            ? "rgb(229 231 235 / var(--tw-bg-opacity, 1))"
            : "rgb(243 244 246 / var(--tw-bg-opacity, 1))"
      }}
    >
      {children}
    </div>
  );
};

export default Canvas;
