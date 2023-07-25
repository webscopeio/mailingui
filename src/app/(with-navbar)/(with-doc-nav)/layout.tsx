import { SideNav } from "@components/SideNav";
import { MobileDocsNav } from "@components/MobileDocsNav";
import { docsItems } from "@constants";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto h-full w-full max-w-6xl flex-row pb-16 lg:flex lg:pb-32 lg:pt-16">
      <div className="block lg:hidden">
        <MobileDocsNav items={docsItems} />
      </div>
      <div className="sticky top-4 hidden max-h-[calc(100vh-1rem)] w-60 shrink-0 border-r border-solid border-dark-700 lg:block">
        <SideNav items={docsItems} />
      </div>
      <div className="grow overflow-auto">{children}</div>
    </div>
  );
}
