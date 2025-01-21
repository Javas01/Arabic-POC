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

  if (
    node1.category === Categories.VERB &&
    node2.category === Categories.PARTICLE
  )
    return true; // Verb + Particle

  if (node1.category === Categories.VERB && node2.category === Categories.NOUN)
    return true; // Verb + Noun

  if (node1.category === Categories.NOUN && node2.category === Categories.NOUN)
    return true; // Noun + Noun

  if (
    node1.category === Categories.DEFINITE &&
    node2.category === Categories.NOUN
  )
    return true; // Definite + Noun

  if (
    (node1.category === Categories.PRONOUN &&
      node2.category === Categories.NOUN) ||
    (node1.category === Categories.NOUN &&
      node2.category === Categories.PRONOUN)
  )
    return true; // Noun + Definite

  if (
    node1.category === Categories.PARTICLE &&
    node2.category === Categories.PRONOUN
  )
    return true; // Particle + Pronoun

  // Add more grammar rules as needed
  showToast({
    title: "Invalid Merge",
    description: `Can't merge a ${node1.category} and a ${node2.category}`,
    variant: "destructive"
  });
  return false; // Default: Nodes can't merge
}
