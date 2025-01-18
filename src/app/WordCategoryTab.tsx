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
          height: "calc(100vh - 2rem)",
          width: "15rem",
          overflowY: "auto",
          overflowX: "hidden",
          scrollbarWidth: "none",
          border: "1px solid #ccc",
          // highlight the drop area?
          background:
            (over?.id as string)?.split("-")[0] === "wordtab"
              ? "rgb(229 231 235 / var(--tw-bg-opacity, 1))"
              : "rgb(243 244 246 / var(--tw-bg-opacity, 1))"
        }}
      >
        {children}
      </TabsContent>
    );
  }
);

WordCategoryTab.displayName = "WordCategoryTab";

export default WordCategoryTab;
