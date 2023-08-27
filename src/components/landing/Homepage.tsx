import * as React from "react";
import { FC } from "react";
import dynamic from "next/dynamic";
import { Resizable } from "re-resizable";
import { ArrowRight } from "lucide-react";
import SubscriptionSuccess from "./templates/you-are-subscribed";
import DotBadges from "./examples/badges";
import RegisterAnAccount from "./examples/register-an-account";
import MinimalDiscountCode from "./templates/discount-code";
import TellUsWhatYouThink from "./templates/tell-us-what-you-think";
import UpcomingEvents from "./templates/upcoming-events";
import ConnectWithUs from "./examples/connect-with-us";
import { CTA } from "@components/ui/CTA";
import { cn } from "@utils/cn";

export const Homepage = () => {
  // TODO - fix hydration issue and import normally - check console errors on landing page
  const CombinedLists = dynamic(() => import("./examples/list"), {
    ssr: false,
  });
  return (
    <div className="mx-auto max-w-5xl space-y-24 pt-4 lg:pt-16">
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
          <div className="mt-10 flex flex-row gap-2">
            <CTA href="/docs/guide/introduction" className="w-fit">
              Get Started
            </CTA>
          </div>
        </div>
        {/* 1024px+ view */}
        <div className="mt-9 hidden h-[774px] w-full gap-4 lg:flex lg:h-[662px]">
          <div className="flex flex-1 flex-col gap-4">
            <TemplateWrapper height={410}>
              <SubscriptionSuccess />
            </TemplateWrapper>
            <ExampleWrapper minWidth={190}>
              <RegisterAnAccount />
            </ExampleWrapper>
          </div>
          <div className="flex flex-1 flex-col gap-4 lg:-mt-20">
            <TemplateWrapper height={310}>
              <TellUsWhatYouThink />
            </TemplateWrapper>
            <ExampleWrapper minWidth={245}>
              <DotBadges />
            </ExampleWrapper>
            <TemplateWrapper height={210}>
              <MinimalDiscountCode />
            </TemplateWrapper>
          </div>
          <div className="flex flex-1 flex-col gap-4 lg:-mt-28">
            <ExampleWrapper minWidth={222}>
              <CombinedLists />
            </ExampleWrapper>
            <TemplateWrapper height={300}>
              <UpcomingEvents />
            </TemplateWrapper>
            <ExampleWrapper minWidth={225}>
              <ConnectWithUs />
            </ExampleWrapper>
          </div>
        </div>
        {/* smaller than 1024px view */}
        <div className="mb-6 mt-16 columns-1 gap-4 space-y-4 md:mt-12 md:h-[850px] md:columns-2 lg:hidden">
          <TemplateWrapper height={210}>
            <MinimalDiscountCode />
          </TemplateWrapper>
          <ExampleWrapper minWidth={225}>
            <ConnectWithUs />
          </ExampleWrapper>
          <TemplateWrapper height={310}>
            <TellUsWhatYouThink />
          </TemplateWrapper>
          <ExampleWrapper minWidth={245}>
            <DotBadges />
          </ExampleWrapper>
          <ExampleWrapper minWidth={190}>
            <RegisterAnAccount />
          </ExampleWrapper>
          <TemplateWrapper height={360}>
            <SubscriptionSuccess />
          </TemplateWrapper>
          <ExampleWrapper minWidth={222}>
            <CombinedLists />
          </ExampleWrapper>
        </div>
        <div className="flex w-full justify-end">
          <CTA secondary href="/docs/components/overview" className="w-fit">
            More Examples
            <ArrowRight />
          </CTA>
        </div>
      </div>
    </div>
  );
};

const TemplateWrapper: FC<{
  children: React.ReactNode;
  className?: string;
  height: number;
}> = ({ children, height, className }) => {
  return (
    <div
      className={cn("overflow-scroll rounded-lg bg-[#f6f9fc] p-2", className)}
      style={{ height: height }}
    >
      {children}
    </div>
  );
};

const ExampleWrapper: FC<{
  children: React.ReactNode;
  minWidth?: number;
  className?: string;
}> = ({ children, minWidth = 160, className }) => {
  return (
    <div style={{ width: "auto" }} className={className}>
      <Resizable
        bounds="parent"
        minWidth={`${minWidth}px`}
        handleStyles={{
          right: {
            right: "initial",
            left: "100%",
            paddingLeft: "0.25rem",
            paddingRight: "0.25rem",
            width: "auto",
            cursor: "ew-resize",
          },
        }}
        enable={{
          top: false,
          right: true,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        handleClasses={{
          right: "hidden sm:flex items-center",
        }}
        handleComponent={{
          right: <div className="h-8 w-1.5 rounded-full bg-stone-100" />,
        }}
        className="!h-auto"
      >
        <div style={{ height: "auto" }}>{children}</div>
      </Resizable>
    </div>
  );
};
