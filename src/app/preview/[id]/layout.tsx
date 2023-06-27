import { readdirSync } from "fs";
import { join } from "path";
import * as React from "react";
import { PreviewShell } from "@components/EmailPreview";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const files = getFiles();
  return (
    <PreviewShell files={files} paramsId={params.id}>
      {children}
    </PreviewShell>
  );
}

const getFiles = () => {
  const CONTENT_DIR = "src/emails";
  const typePath = join(process.cwd(), CONTENT_DIR);
  const files = readdirSync(typePath);
  return files.map((file) => ({
    id: file.replace(/.tsx/, ""),
    fileName: file,
  }));
};
