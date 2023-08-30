import * as React from "react";
import { ArrowRight } from "lucide-react";
import DotBadges from "./examples/badges";
import RegisterAnAccount from "./examples/register-an-account";
import ConnectWithUs from "./examples/connect-with-us";
import InlineCode from "./examples/inline-code";
import { CTA } from "@components/ui/CTA";
import { cn } from "@utils/cn";

export const Homepage = () => {
  return (
    <>
      {/* GRADIENT BLOB */}
      <div
        className="absolute inset-y-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] scale-150 bg-gradient-to-tr from-[#80afff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl space-y-24 pt-16 lg:pt-32">
        <div className="h-full w-full">
          <div className="space-y-8">
            <header className="space-y-4">
              <h1 className="text-6xl font-semibold tracking-tighter">
                Create{" "}
                <span className="brand-gradient bg-clip-text text-transparent">
                  beautiful
                </span>{" "}
                emails with React.
              </h1>
              <p className="text-gray-400 lg:max-w-xl">
                Build emails effortlessly with our stunning open-sourced
                components and templates that you can copy and paste into your
                apps.
              </p>
            </header>
            <CTA className="w-full md:w-fit" href="/docs/guide/introduction">
              Get Started
            </CTA>
          </div>
          {/* COMPOENT GRID */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-1 flex-col gap-4">
              <Wrapper>
                <InlineCode />
              </Wrapper>
              <Wrapper>
                <RegisterAnAccount />
              </Wrapper>
              <Wrapper>
                <ConnectWithUs />
              </Wrapper>
              <Wrapper>
                <RegisterAnAccount />
              </Wrapper>
            </div>
            <div className="flex flex-1 flex-col gap-4 md:-mt-20">
              <Wrapper>
                <RegisterAnAccount />
              </Wrapper>
              <Wrapper>
                <DotBadges />
              </Wrapper>
              <Wrapper>
                <RegisterAnAccount />
              </Wrapper>
              <Wrapper>
                <ConnectWithUs />
              </Wrapper>
              <Wrapper>
                <DotBadges />
              </Wrapper>
            </div>
            <div className="hidden flex-1 flex-col gap-4 lg:-mt-28 lg:flex">
              <Wrapper>
                <DotBadges />
              </Wrapper>
              <Wrapper>
                <RegisterAnAccount />
              </Wrapper>
              <Wrapper>
                <ConnectWithUs />
              </Wrapper>
              <Wrapper>
                <RegisterAnAccount />
              </Wrapper>
            </div>
          </div>
          <div className="mt-8 flex w-full justify-end">
            <CTA secondary href="/docs/components/overview" className="w-fit">
              Explore Components
              <ArrowRight />
            </CTA>
          </div>
        </div>
      </div>
    </>
  );
};

const Wrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
  height?: number;
}> = ({ children, height, className }) => {
  return (
    <div
      className={cn("overflow-hidden rounded-lg bg-white p-2", className)}
      style={{ height: height ?? "fit-content" }}
    >
      {children}
    </div>
  );
};
