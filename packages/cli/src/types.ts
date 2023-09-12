export type Component = {
  type: string;
  filename: string;
  dependencies: string[];
  exports: string[];
  file: string;
};