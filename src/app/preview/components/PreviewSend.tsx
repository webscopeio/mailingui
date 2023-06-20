"use client";

import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { CTA } from "@components/CTA";
import { cn } from "@utils/cn";
import { CrossIcon, CheckIcon } from "@components/Icons";

export const PreviewSend = ({ html }: { html?: string }) => {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("Testing from MailingUI");
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "error" | "success"
  >("idle");

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    if (!html) return;

    const response = await fetch("https://react.email/api/send/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: email,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      // Log error?
      // const { error } = await response.json();
      setStatus("error");
    } else {
      setStatus("success");
    }
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <CTA
          color="white"
          className={cn("px-4 py-3", !html && "pointer-events-none opacity-75")}
        >
          Send Test
        </CTA>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="end"
          alignOffset={8}
          sideOffset={16}
          className="w-80 rounded-xl bg-black p-4 text-white"
        >
          <form onSubmit={onSubmitHandler}>
            <div className="grid w-full gap-4">
              <div className="grid w-full items-center gap-2">
                <label
                  htmlFor="email_address"
                  className="text-sm font-semibold leading-none"
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setStatus("idle");
                    setEmail(e.target.value);
                  }}
                  className="w-full rounded-xl border border-solid border-dark-700 bg-dark-800 px-4 py-3 text-sm font-medium text-white placeholder:text-dark-300"
                  type="email"
                  name="email_address"
                  id="email_address"
                  placeholder="Your email"
                  aria-label="email"
                  disabled={status === "sending"}
                  required
                />
              </div>

              <div className="grid w-full max-w-sm items-center gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold leading-none"
                >
                  Subject
                </label>
                <input
                  value={subject}
                  onChange={(e) => {
                    setStatus("idle");
                    setSubject(e.target.value);
                  }}
                  className="w-full rounded-xl border border-solid border-dark-700 bg-dark-800 px-4 py-3 text-sm font-medium text-white placeholder:text-dark-300"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  aria-label="subject"
                  disabled={status === "sending"}
                />
              </div>

              <div className="grid grid-cols-3 items-center">
                <p className="col-span-2 text-sm">
                  Powered by{" "}
                  <a
                    className="font-semibold hover:opacity-70"
                    href="https://react.email/"
                  >
                    react.email
                  </a>
                </p>
                <CTA
                  color="white"
                  type="submit"
                  className="flex items-center justify-center gap-1 px-3 py-2 disabled:opacity-75"
                  disabled={status !== "idle"}
                >
                  {status === "idle" && "Send"}
                  {status === "error" && (
                    <>
                      <CrossIcon /> Error
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckIcon /> Sent
                    </>
                  )}
                  {status === "sending" && (
                    <span className="animate-bounce">...</span>
                  )}
                </CTA>
              </div>
            </div>
          </form>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
