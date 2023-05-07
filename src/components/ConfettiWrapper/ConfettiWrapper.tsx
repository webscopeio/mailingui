"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import Confetti from "react-confetti";
import useMeasure from "react-use-measure";
import { SubscriptionDialog } from "@components/SubscriptionDialog";

export const ConfettiWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [hasSub, setHasSub] = React.useState(false);
  const [ref, { width, height }] = useMeasure();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const hasSubSearchParam = searchParams.has("sub");
    if (hasSubSearchParam) {
      setHasSub((hasSub) => !hasSub);
    }
  }, [searchParams]);

  return (
    <div ref={ref}>
      {hasSub && <Confetti width={width} height={height} />}
      <SubscriptionDialog isOpen={hasSub} />
      {children}
    </div>
  );
};
