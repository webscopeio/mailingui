import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Confetti from "react-confetti";
import useMeasure from "react-use-measure";
import { Dialog, DialogContent } from "./ui/Dialog";
import { CTA } from "./ui/CTA";

const NEWSLETTER_COPY = {
  pending: {
    title: "Confirm your newsletter subscription",
    message:
      "Thank you for joining us! Just one more step: check your email (including spam) to confirm your subscription and join our community.",
  },
  success: {
    title: "🥳 Subscription confirmed!",
    message:
      "Welcome to the MailingUI community. Get ready for the latest updates, tips, and more, straight to your inbox. Your journey with us starts now.",
  },
};

export const Newsletter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ref, { width, height }] = useMeasure();
  const searchParams = useSearchParams();
  const sub = searchParams?.get("sub");
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
          <div className="flex flex-col gap-y-4 p-2">
            <h1 className="text-2xl font-bold tracking-tight text-slate-100">
              {sub === "pending"
                ? NEWSLETTER_COPY.pending.title
                : NEWSLETTER_COPY.success.title}
            </h1>
            <p className="text-gray-400">
              {sub === "pending"
                ? NEWSLETTER_COPY.pending.message
                : NEWSLETTER_COPY.success.message}
            </p>
            <footer className="mt-2 flex justify-end">
              <CTA
                compact
                onClick={() => {
                  setIsOpen(false);
                  router.push("/");
                }}
              >
                Back Home
              </CTA>
            </footer>
          </div>
        </DialogContent>
      </Dialog>
      {children}
    </div>
  );
};
