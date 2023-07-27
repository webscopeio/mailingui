interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div className="pb-16 pt-8 md:pb-32 md:pt-16">{children}</div>;
}
