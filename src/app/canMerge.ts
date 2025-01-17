import { Toast } from "@/hooks/use-toast";
import { Categories, WordNode } from "./types";

export function canMerge(
  node1: WordNode,
  node2: WordNode,
  showToast: (toast: Toast) => void
): boolean {
  // Example rules
  if (
    node1.category === Categories.PARTICLE &&
    node2.category === Categories.NOUN
  )
    return true; // Preposition + Noun

  if (node1.category === Categories.NOUN && node2.category === Categories.VERB)
    return true; // Noun + Verb

  if (node1.category === Categories.NOUN && node2.category === Categories.NOUN)
    return true; // Noun + Noun

  // Add more grammar rules as needed
  showToast({
    title: "Invalid Merge",
    description: `Can't merge a ${node1.category} and a ${node2.category}`,
    variant: "destructive"
  });
  return false; // Default: Nodes can't merge
}
