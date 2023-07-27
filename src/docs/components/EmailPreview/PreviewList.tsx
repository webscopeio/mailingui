import Link from "next/link";
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
  return (
    <div>
      <Link
        href={`preview/${folder.name}`}
        className={cn(
          "rounded-xl px-4 py-3.5 block w-full font-medium text-sm",
          activeFolderId === folder.id && "bg-dark-700"
        )}
      >
        /{folder.name}
      </Link>
      {folder.id === activeFolderId && (
        <ul className={cn("mt-4")}>
          {folder.files.map(({ id: fileId, name: fileName }) => (
            <PreviewListFile
              key={fileId}
              folder={folder}
              file={{ id: fileId, name: fileName }}
              activeFileId={activeFileId}
            />
          ))}
        </ul>
      )}
    </div>
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
  return (
    <li>
      <Link
        href={`preview/${folder.name}/${file.id}`}
        className={cn(
          "rounded-xl px-4 py-3.5 block w-full font-medium text-sm",
          activeFileId === file.id && "bg-dark-700"
        )}
      >
        {file.name}
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
      <div>
        <h1 className="text-base font-bold uppercase text-dark-300">
          Preview Mode
        </h1>
        <span className="text-xl font-bold">src/emails</span>
      </div>

      {fileTree.map((folder) => (
        <PreviewListFolder
          key={folder.id}
          folder={folder}
          activeFileId={activeFileId}
          activeFolderId={activeFolderId}
        />
      ))}
    </>
  );
};
