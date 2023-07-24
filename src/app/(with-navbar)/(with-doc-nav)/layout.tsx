import { SideNav } from "@components/SideNav";
import { docsItems } from "@constants";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full w-full flex-row">
      <div className="hidden w-60 shrink-0 border-r border-solid border-dark-700 lg:block">
        <SideNav items={docsItems} />
      </div>
      <div className="grow overflow-auto">{children}</div>
    </div>
  );
}
