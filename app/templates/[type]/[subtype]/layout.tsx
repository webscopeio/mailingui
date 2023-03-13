import { ReactNode } from "react";
import { emailTemplates } from "@/utils/constants";

import Link from "next/link";

type Props = {
  children: ReactNode;
  params: {
    type: string;
    subtype: string;
  };
};

export default function TemplateLayout({
  children,
  params: { type, subtype },
}: Props) {
  const { templates, title } =
    emailTemplates.find((template) => template.type === type) || {};

  return (
    <div className="flex w-full">
      <aside className="min-w-[300px] border-r border-solid border-dark-700 p-8">
        <h4 className="text-base font-bold uppercase text-dark-300">{title}</h4>
        <h2 className="text-2xl font-bold">Available emails</h2>
        <ul className="mt-4 flex w-full flex-col">
          {templates?.map(({ title, route }) => (
            <li
              className={`w-full cursor-pointer rounded-xl ${
                subtype === route ? "bg-dark-800" : ""
              }`}
              key={route}
            >
              <Link
                href={`/templates/${type}/${route}`}
                className="block py-3.5 px-4 text-base"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      {children}
    </div>
  );
}
