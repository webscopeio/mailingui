import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="pb-16 md:pb-32">{children}</div>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
}
