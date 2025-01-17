export type WordNode = {
  base: string;
  english: string;
  color: string;
  category: string;
  hide: boolean;
  parts: WordNode[];
  position: {
    x: number;
    y: number;
  };
};
