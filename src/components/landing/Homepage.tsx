import * as React from "react";
import SubscriptionSuccess from "./examples/you-are-subscribed";
import { CTA } from "@components/ui/CTA";

export const Homepage = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-24 pt-16">
      <div className="h-full w-full">
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold tracking-tighter">
            Create{" "}
            <span className="brand-gradient-to-r bg-clip-text text-transparent">
              beautiful
            </span>{" "}
            emails with React.
          </h1>
          <p className="mt-4 text-gray-400 md:max-w-[600px]">
            Build emails effortlessly with our stunning open-sourced components
            and templates that you can copy and paste into your apps.
          </p>
          <div className="mt-10 flex flex-col gap-2 lg:flex-row">
            <CTA href="/docs/guide/introduction">Get Started</CTA>
          </div>
        </div>
        <div className="mt-9 flex w-full gap-4">
          <div className="flex-1">
            <ExampleWrapper>
              <SubscriptionSuccess />
            </ExampleWrapper>
          </div>
          <div className="-mt-20 h-12 flex-1 bg-green-50"></div>
          <div className="-mt-28 h-12 flex-1 bg-yellow-50"></div>
        </div>
      </div>
    </div>
  );
};

const ExampleWrapper = ({
  children,
  height = 420,
}: {
  children: React.ReactNode;
  height?: number;
}) => {
  return (
    <div
      className="w-[330px] overflow-scroll rounded-lg bg-[#f6f9fc] p-2"
      style={{ height: height }}
    >
      {children}
    </div>
  );
};
