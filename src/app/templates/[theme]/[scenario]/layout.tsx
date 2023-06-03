import { ReactNode } from "react";
import Link from "next/link";
import { emailTemplates } from "@constants";


type Props = {
  children: ReactNode;
  params: {
    theme: string;
    scenario: string;
  };
};

export default function TemplateLayout({
  children,
  params: { theme, scenario },
}: Props) {
  const { templates, title } =
    emailTemplates.find((template) => template.type === theme) || {};

  return (
    <div className="flex w-full">
      <aside className="min-w-[300px] border-r border-solid border-dark-700 p-8">
        <h1>
          <div className="text-base font-bold uppercase text-dark-300">
            {title}
          </div>
          <div className="text-2xl font-bold">Available emails</div>
        </h1>
        <ul className="mt-4">
          {templates?.map(({ title, route }) => (
            <li
              className={`rounded-xl ${scenario === route ? "bg-dark-800" : ""
                }`}
              key={route}
            >
              <Link
                href={`/templates/${theme}/${route}`}
                className="block px-4 py-3.5"
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
