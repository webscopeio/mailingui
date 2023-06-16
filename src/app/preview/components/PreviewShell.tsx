import * as React from "react";
import Link from "next/link";
import { cn } from "@utils/cn";

export const PreviewShell = ({
  children,
  files,
  paramsId,
}: {
  children: React.ReactNode;
  files: {
    id: string;
    fileName: string;
  }[];
  paramsId?: string;
}) => {
  return (
    <section className="flex h-screen overflow-hidden">
      <aside className="min-w-[300px] overflow-y-scroll p-8">
        <div>
          <h1 className="text-base font-bold uppercase text-dark-300">
            Preview Mode
          </h1>
          <span className="text-xl font-bold">src/emails</span>
        </div>
        <ul className="mt-4">
          {files.map(({ id, fileName }) => (
            <li key={id}>
              <Link
                href={`preview/${id}`}
                className={cn(
                  "rounded-xl px-4 py-3.5 block w-full font-medium text-sm",
                  paramsId === id && "bg-dark-700"
                )}
              >
                /{fileName}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex h-full flex-1 flex-col">{children}</div>
    </section>
  );
};
