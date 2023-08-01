import Link from "next/link";
import type {
  PreviewTree,
  PreviewFolder,
  PreviewFile,
} from "@utils/emailPreview";
import { cn } from "@utils/cn";

const PreviewListFolder = ({
  folder,
  activeFileId,
  activeFolderId,
}: {
  folder: PreviewFolder;
  activeFileId?: string;
  activeFolderId?: string;
}) => {
  const isActive = activeFolderId === folder.id;

  return (
    <li>
      <Link
        href={`/preview/${folder.name}`}
        className={cn(
          "gap-2 tracking-wide flex py-2 items-center w-full font-medium text-lg text-neutral-500 hover:text-neutral-200",
          isActive && "font-bold text-pink-text hover:text-pink-text",
          "before:content-['├──'] before:opacity-70"
        )}
        prefetch={false}
      >
        <span>{folder.label ?? folder.name}</span>
      </Link>
      {isActive && (
        <ul>
          {folder.files.map((file) => (
            <PreviewListFile
              key={file.id}
              folder={folder}
              file={file}
              activeFileId={activeFileId}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const PreviewListFile = ({
  folder,
  file,
  activeFileId,
}: {
  folder: PreviewFolder;
  file: PreviewFile;
  activeFileId?: string;
}) => {
  const isActive = activeFileId === file.id;

  return (
    <li>
      <Link
        href={`/preview/${folder.name}/${file.id}`}
        className={cn(
          "gap-2 tracking-wide flex items-center w-full relative rounded-lg px-2 py-2 text-neutral-500 hover:text-neutral-200 hover:bg-neutral-200/20 hover:cursor-pointer",
          isActive &&
            "bg-pink-text/20 hover:bg-pink-text/20 text-pink-text hover:text-pink-text font-semibold",
          "before:content-['└──'] before:opacity-70"
        )}
        prefetch={false}
      >
        <span>{file.label ?? file.name}</span>
      </Link>
    </li>
  );
};

export const PreviewList = ({
  fileTree,
  activeFileId,
  activeFolderId,
}: {
  fileTree: PreviewTree;
  activeFileId?: string;
  activeFolderId?: string;
}) => {
  return (
    <>
      <h1 className="mb-4 text-base font-medium uppercase text-neutral-500">
        Preview Mode
      </h1>
      <Link href={`/preview`} prefetch={false}>
        <span className="text-lg font-bold hover:opacity-70">src/emails</span>
      </Link>

      <ul className="">
        {fileTree.map((folder) => (
          <PreviewListFolder
            key={folder.id}
            folder={folder}
            activeFileId={activeFileId}
            activeFolderId={activeFolderId}
          />
        ))}
      </ul>
    </>
  );
};
