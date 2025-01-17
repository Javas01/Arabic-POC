import { Toast } from "@/hooks/use-toast";
import { WordNode } from "./types";

export function canMerge(
  node1: WordNode,
  node2: WordNode,
  showToast: (toast: Toast) => void
): boolean {
  // Example rules
  if (node1.category === "preposition" && node2.category === "noun") {
    return true; // Preposition + Noun
  }

  if (node1.category === "article" && node2.category === "noun") {
    return true; // Article + Noun
  }

  // Add more grammar rules as needed
  showToast({
    title: "Invalid Merge",
    description: `Can't merge a ${node1.category} and a ${node2.category}`,
    variant: "destructive"
  });
  return false; // Default: Nodes can't merge
}
