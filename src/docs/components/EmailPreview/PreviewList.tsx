import Link from "next/link";
import { ChevronRightIcon, ChevronDownIcon } from "@components/Icons";
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
    <li className={cn(isActive && "mb-4")}>
      <Link
        href={`/preview/${folder.name}`}
        className={cn(
          "gap-2 tracking-wide flex py-2 items-center w-full font-medium text-lg text-neutral-500 hover:text-neutral-200",
          isActive && "font-bold text-pink-text hover:text-pink-text"
        )}
        prefetch={false}
      >
        {isActive ? (
          <ChevronDownIcon className="h-6 w-6" />
        ) : (
          <ChevronRightIcon className="h-6 w-6" />
        )}
        <span>{folder.label ?? folder.name}</span>
      </Link>
      {isActive && (
        <ul className="ml-2.5 border-l border-neutral-700 pl-2.5">
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
          "tracking-wide block w-full relative rounded-lg px-3 py-2 text-neutral-500 hover:text-neutral-200 hover:bg-neutral-200/20 hover:cursor-pointer",
          isActive &&
            "bg-pink-text/20 hover:bg-pink-text/20 text-pink-text hover:text-pink-text font-semibold"
        )}
        prefetch={false}
      >
        {file.label ?? file.name}
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
      <Link href={`/preview`} prefetch={false}>
        <h1 className="mb-4 text-base font-medium uppercase hover:opacity-70">
          Preview Mode
        </h1>
      </Link>
      <span className="text-lg font-bold text-neutral-500">Categories</span>

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
