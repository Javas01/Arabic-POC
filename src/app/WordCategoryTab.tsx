"use client";
import { TabsContent } from "@/components/ui/tabs";
import { Categories } from "./types";
import React from "react";
import { useDroppable } from "@dnd-kit/core";

const WordCategoryTab = React.memo(
  ({
    category,
    setScrollRef,
    children
  }: {
    category: Categories;
    setScrollRef: (node: HTMLElement | null) => void;
    children: React.ReactNode;
  }) => {
    const { over, setNodeRef } = useDroppable({
      id: `wordtab`
    });

    return (
      <TabsContent
        ref={(node) => {
          setNodeRef(node);
          setScrollRef(node);
        }}
        value={category}
        style={{
          height: "93vh",
          width: "20rem",
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
