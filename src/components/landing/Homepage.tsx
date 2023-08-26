import * as React from "react";
import { FC } from "react";
import { Resizable } from "re-resizable";
import SubscriptionSuccess from "./templates/you-are-subscribed";
import RegisterAnAccount from "./examples/register-an-account";
import TellUsWhatYouThink from "./templates/tell-us-what-you-think";
import DotBadges from "./examples/badges";
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
          <div className="flex flex-1 flex-col gap-4">
            <TemplateWrapper height={410}>
              <SubscriptionSuccess />
            </TemplateWrapper>
            <ExampleWrapper height={152} minWidth={190}>
              <RegisterAnAccount />
            </ExampleWrapper>
          </div>
          <div className="-mt-20 flex flex-1 flex-col gap-4">
            <TemplateWrapper height={410}>
              <TellUsWhatYouThink />
            </TemplateWrapper>
            <ExampleWrapper height={56} minWidth={245}>
              <DotBadges />
            </ExampleWrapper>
          </div>
          <div className="-mt-28 h-12 flex-1 bg-yellow-50"></div>
        </div>
      </div>
    </div>
  );
};

const TemplateWrapper: FC<{
  children: React.ReactNode;
  height: number;
}> = ({ children, height }) => {
  return (
    <div
      className="w-[330px] overflow-scroll rounded-lg bg-[#f6f9fc] p-2"
      style={{ height: height }}
    >
      {children}
    </div>
  );
};

const ExampleWrapper: FC<{
  children: React.ReactNode;
  height: number;
  minWidth?: number;
}> = ({ children, height, minWidth = 160 }) => {
  return (
    <div style={{ width: "330px" }}>
      <Resizable
        bounds="parent"
        minWidth={`${minWidth}px`}
        handleStyles={{
          right: {
            right: "initial",
            left: "100%",
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
            width: "330px",
            cursor: "ew-resize",
          },
        }}
        handleClasses={{
          right: "hidden sm:flex items-center",
        }}
        handleComponent={{
          right: <div className="h-8 w-1.5 rounded-full bg-stone-100" />,
        }}
      >
        <div style={{ height: height }}>{children}</div>
      </Resizable>
    </div>
  );
};
