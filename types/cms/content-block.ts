export type ContentBlockTypes = "text" | "image";

export interface ContentBlock {
  id: string;
  type: ContentBlockTypes;
}
