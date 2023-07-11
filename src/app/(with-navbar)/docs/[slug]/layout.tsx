import { SideNav } from "@components/SideNav";
import { docsItems } from "@constants";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full flex-row">
      <div className="w-60 border-r border-solid border-dark-700">
        <SideNav items={docsItems} />
      </div>
      <div className="grow">{children}</div>
    </div>
  );
}
