import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="pb-16 pt-8 md:pb-32 md:pt-16">{children}</div>
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
}
