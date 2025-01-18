import { TabsContent } from "@/components/ui/tabs";
import PartsTooltip from "./PartsTooltip";
import { WordNode, Categories } from "./types";
import WordBlock from "./WordBlock";

export default function WordCategoryTab({
  words,
  category
}: {
  words: WordNode[];
  category: Categories;
}) {
  return (
    <TabsContent
      value={category}
      style={{
        height: "calc(100vh - 2rem)",
        width: "15rem",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none",
        border: "1px solid #ccc"
      }}
    >
      {words
        .filter((word) => !word.hide)
        .filter((word) => word.category === category)
        .map((word) => (
          <div key={word.id}>
            {word.parts.length > 0 ? (
              <PartsTooltip word={word} />
            ) : (
              <WordBlock word={word} id={word.base + Date.now()}>
                {word.base}
              </WordBlock>
            )}
          </div>
        ))}
    </TabsContent>
  );
}
