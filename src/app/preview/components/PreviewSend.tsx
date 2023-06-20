"use client";

import { CTA } from "@components/CTA";
import { cn } from "@utils/cn";

export const PreviewSend = ({ html }: { html?: string }) => {
  // We need to create a popover and a form to submit this
  // For testing please use your email here
  async function handleClick(html?: string) {
    if (!html) return;
    const response = await fetch("https://react.email/api/send/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "sosa@webscope.io",
        subject: "Testing from MailingUI",
        html,
      }),
    });

    if (response.status === 429) {
      const { error } = await response.json();
      alert(error);
    }
  }

  return (
    <CTA
      color="white"
      className={cn("px-4 py-3", !html && "pointer-events-none opacity-75")}
      onClick={() => handleClick(html)}
    >
      Send Test
    </CTA>
  );
};
