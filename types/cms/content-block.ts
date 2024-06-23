export interface BaseContentBlock {
  id: string;
}

export type ContentBlockNone = BaseContentBlock & {
  type: "none";
};

export type TextBlock = {
  text: string;
};
export type ContentBlockText = BaseContentBlock & {
  type: "text";
} & TextBlock;

export type ImageBlock = {
  url: string;
};
export type ContentBlockImage = BaseContentBlock & {
  type: "image";
} & ImageBlock;

export type ContentBlock =
  | ContentBlockNone
  | ContentBlockText
  | ContentBlockImage;

export type ContentBlockTypes = ContentBlock["type"];
