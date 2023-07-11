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
  success?: boolean;
}> = ({ isOpen = false, onOpenChange, success = false }) => {
  return (
    <AlertDialog defaultOpen={false} open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-black">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-xl font-semibold md:text-3xl">
            Thanks for subscribing to <br /> MailingUI&apos;s newsletter!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-lg text-neutral-500 md:mt-6 md:text-xl">
            {success ? (
              <>Thank you for signing up for the Mailingui newsletter.</>
            ) : (
              <>
                Don&apos;t forget to check your email to confirm your
                subscription. If you don&apos;t see the email in a few minutes,
                please check your <b>spam</b> + folder.
              </>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <CTA
              onClick={() => onOpenChange(!isOpen)}
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
