export type CodeType = "htmlCode" | "mjmlCode" | "reactEmailCode";

export type EmailCodes = {
  htmlCode: string;
  mjmlCode?: string;
  reactEmailCode?: string;
};
