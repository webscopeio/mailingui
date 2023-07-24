"use client";
import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Confetti from "react-confetti";
import useMeasure from "react-use-measure";
import { SubscriptionDialog } from "@components/SubscriptionDialog";

export const ConfettiWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ref, { width, height }] = useMeasure();
  const searchParams = useSearchParams();
  const router = useRouter();

  const sub = searchParams.get("sub");
  React.useEffect(() => {
    if (sub === "pending" || sub === "success") {
      setIsOpen(true);
    }
  }, [sub]);

  return (
    <div ref={ref}>
      {sub === "success" && <Confetti width={width} height={height} />}
      <SubscriptionDialog
        isOpen={isOpen}
        onOpenChange={(isOpen) => {
          setIsOpen(isOpen);
          router.push("/");
        }}
        success={sub === "success"}
      />
      {children}
    </div>
  );
};
