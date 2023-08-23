import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Confetti from "react-confetti";
import useMeasure from "react-use-measure";
import { Dialog, DialogContent } from "./ui/Dialog";
import { CTA } from "./ui/CTA";

export const Newsletter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ref, { width, height }] = useMeasure();
  const searchParams = useSearchParams();
  const sub = searchParams.get("sub");
  const router = useRouter();

  React.useEffect(() => {
    if (sub === "pending" || sub === "success") {
      setIsOpen(true);
    }
  }, [sub]);

  return (
    <div ref={ref}>
      {sub === "success" && <Confetti width={width} height={height} />}
      <Dialog
        open={isOpen}
        onOpenChange={(isOpen) => {
          setIsOpen(isOpen);
          router.push("/");
        }}
      >
        <DialogContent>
          <div className="space-y-4 py-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-slate-100">
                {sub === "pending"
                  ? "Check your email to confirm!"
                  : "🥳 Subscription confirmed!"}
              </h1>
              <p className="text-gray-400">
                {sub === "pending"
                  ? "We have sent you an email to confirm your subscription to our newsletter! Just in case, check the spam folder!"
                  : "Thank you for joining! We will keep you posted on updates!"}
              </p>
            </div>
            <footer className="flex flex-col items-center justify-end gap-2 lg:flex-row">
              <CTA
                compact
                onClick={() => {
                  setIsOpen(false);
                  router.push("/");
                }}
              >
                Back Home
              </CTA>
              <CTA
                secondary
                compact
                onClick={() => {
                  setIsOpen(false);
                  router.push("/docs");
                }}
              >
                Explore Docs
              </CTA>
            </footer>
          </div>
        </DialogContent>
      </Dialog>
      {children}
    </div>
  );
};
