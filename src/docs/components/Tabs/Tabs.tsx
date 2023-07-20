"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@utils/cn";

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn(
      "data-[orientation=vertical]:grid data-[orientation=vertical]:grid-cols-[1fr_3fr]",
      className
    )}
    {...props}
  />
));
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      [
        "inline-flex items-center gap-1 rounded-md p-1.5 h-fit bg-dark-800",
        "data-[orientation=vertical]:inline-grid",
      ],
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      [
        "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium text-dark-100 transition-all duration-300",
        /** Hover styles */
        "hover:bg-dark-800 hover:text-white",
        /** Focus styles */
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-400 focus-visible:ring-offset-2 ring-offset-dark-800",
        /** Active styles */
        "data-[state=active]:bg-pink-to-purple-gradient data-[state=active]:text-white",
        /** Disabled styles */
        "disabled:pointer-events-none disabled:opacity-50",
      ],
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    tabIndex={-1}
    className={cn(
      "focus-visible:outline-none data-[orientation=horizontal]:mt-2 data-[orientation=vertical]:ml-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
