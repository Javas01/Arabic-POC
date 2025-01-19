"use client";
import { TabsContent } from "@/components/ui/tabs";
import { Categories } from "./types";
import { useDroppable } from "@dnd-kit/core";
import React from "react";

const WordCategoryTab = React.memo(
  ({
    category,
    children
  }: {
    category: Categories;
    children: React.ReactNode;
  }) => {
    const { over, setNodeRef } = useDroppable({
      id: `wordtab-${category}`
    });

    return (
      <TabsContent
        ref={(node) => {
          setNodeRef(node);
        }}
        value={category}
        style={{
          height: "calc(90vh - 2rem)",
          width: "15rem",
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "none",
          border: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background:
            (over?.id as string)?.split("-")[0] === "wordtab"
              ? "rgb(55 65 81 / var(--tw-bg-opacity, 1))" // Dark gray for dark mode
              : "rgb(31 41 55 / var(--tw-bg-opacity, 1))" // Even darker gray
        }}
      >
        {children}
      </TabsContent>
    );
  }
);

WordCategoryTab.displayName = "WordCategoryTab";

export default WordCategoryTab;
