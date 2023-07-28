import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { format } from "prettier";

export type PreviewTree = PreviewFolder[];

export type PreviewFolder = {
  id: string;
  name: string;
  label?: string;
  files: PreviewFile[];
};

export type PreviewFile = {
  id: string;
  name: string;
  label?: string;
};

const CONTENT_DIR = "src/emails";

export const getPreviewTree = (): PreviewTree => {
  const folders = getFolderList();
  return folders.map((folder) => loadFolder(folder));
};

const getFolderList = (): string[] => {
  const typePath = join(process.cwd(), CONTENT_DIR);
  const folders = readdirSync(typePath, { withFileTypes: true });
  return folders
    .filter((folder) => folder.isDirectory())
    .map((folder) => folder.name);
};

const loadFolder = (folderName: string): PreviewFolder => {
  const folderPath = join(process.cwd(), CONTENT_DIR, folderName);
  const files = readdirSync(folderPath, { withFileTypes: true });
  return {
    id: folderName,
    name: folderName,
    label: createLabel(folderName),
    files: files
      .filter((file) => file.isFile() && file.name.endsWith(".tsx"))
      .map((file) => ({
        id: file.name.replace(/.tsx/, ""),
        name: file.name,
        label: createLabel(file.name),
      })),
  };
};

export const getPreviewEmail = (folder: string, file: string) => {
  const filePath = join(process.cwd(), CONTENT_DIR, folder, file + ".tsx");
  return format(readFileSync(filePath, "utf8"), {
    parser: "typescript",
  });
};

const firstLetterToUpperCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
const hyphensToSpaces = (str: string) => str.replace(/-/g, " ");

function createLabel(fileName: string) {
  return firstLetterToUpperCase(hyphensToSpaces(fileName.replace(/.tsx/, "")));
}
