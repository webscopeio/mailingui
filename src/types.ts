export type CodeType = "htmlCode" | "mjmlCode" | "reactEmailCode";

export type EmailComponent = {
  title: string;
  htmlPreview: string;
  htmlCode: string;
  mjmlCode?: string;
  reactEmailCode?: string;
};

export type EmailCodes = {
  htmlCode: string;
  mjmlCode?: string;
  reactEmailCode?: string;
};
