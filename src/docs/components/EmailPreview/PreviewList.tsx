import Link from "next/link";
import { ChevronRightIcon } from "@components/Icons";
import type { PreviewTree, PreviewFolder, PreviewFile } from "@utils/preview";
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
          "tracking-wide flex px-3 py-2 w-full font-medium text-lg text-neutral-500 hover:text-neutral-200",
          isActive && "font-bold text-pink-text hover:text-pink-text"
        )}
        prefetch={false}
      >
        <ChevronRightIcon className="h-6 w-6" />
        {folder.label ?? folder.name}
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
      <div className="mb-4">
        <h1 className="text-base font-bold uppercase text-dark-300">
          Preview Mode
        </h1>
        <span className="text-xl font-bold">Categories</span>
      </div>

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
