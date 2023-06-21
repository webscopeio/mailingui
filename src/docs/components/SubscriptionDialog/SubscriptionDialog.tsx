"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { CTA } from "@components/CTA";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@components/AlertDialog";

export const SubscriptionDialog: React.FC<{
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}> = ({ isOpen = false, onOpenChange }) => {
  const router = useRouter();
  return (
    <AlertDialog defaultOpen={false} open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-xl font-semibold md:text-3xl">
            Thanks for subscribing to <br /> MailingUI&apos;s newsletter!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-lg text-neutral-500 md:mt-6 md:text-xl">
            Don&apos;t forget to check your email to confirm your subscription.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <CTA
              onClick={() => {
                router.push("/");
                onOpenChange(!isOpen);
              }}
              color="white"
              className="w-full md:w-auto"
            >
              Continue
            </CTA>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
