"use client";
import React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const Root = TabsPrimitive.Root;

const List = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>, "className">
>(({ ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={
      "inline-flex items-center justify-center rounded-3xl bg-dark-800 p-1"
    }
    {...props}
  />
));
List.displayName = TabsPrimitive.List.displayName;

const Trigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  Omit<
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    "className"
  >
>(({ ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={
      "inline-flex h-8 min-w-[7rem] items-center justify-center rounded-2xl px-3 py-2 text-sm text-dark-100 data-[state=active]:bg-pink-to-purple-gradient data-[state=active]:text-white"
    }
    {...props}
  />
));
Trigger.displayName = TabsPrimitive.Trigger.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ ...props }, ref) => <TabsPrimitive.Content ref={ref} {...props} />);
Content.displayName = TabsPrimitive.Content.displayName;

export const Tabs = { Root, List, Trigger, Content };
