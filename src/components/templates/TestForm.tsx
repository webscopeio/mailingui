import * as React from "react";
import { CheckIcon, Loader2Icon } from "lucide-react";
import { email, safeParse, string } from "valibot";
import { CTA } from "@components/ui/CTA";

export const TestForm: React.FC<{ html: string }> = ({ html }) => {
  const [form, setForm] = React.useState({
    subject: "Hello from MailingUI",
    email: "",
    isValid: true,
  });
  const [testState, setTestState] = React.useState<
    "IDLE" | "PENDING" | "SUCCESS"
  >("IDLE");

  React.useEffect(() => {
    if (testState !== "SUCCESS") return;
    const timerId = setTimeout(() => {
      setTestState("IDLE");
    }, 3500);

    return () => {
      clearTimeout(timerId);
    };
  }, [testState]);

  const onFormSubmit = async (e: React.FormEvent, html: string) => {
    e.preventDefault();
    const res = safeParse(string([email()]), form.email);
    if (!res.success) {
      setForm({ ...form, isValid: false });
      return;
    }
    setTestState("PENDING");
    try {
      const response = await fetch("https://react.email/api/send/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: form.email,
          subject: form.subject,
          html,
        }),
      });
      if (response.status === 429) {
        const { error } = await response.json();
        alert(error);
      }
      setTestState("SUCCESS");
      setForm({ ...form, email: "" });
    } catch (e) {
      alert("Something went wrong. Please try again.");
    } finally {
      setTestState("IDLE");
    }
  };

  return (
    <form
      onSubmit={(e) => onFormSubmit(e, html)}
      className="flex w-full flex-col items-center py-2"
      method="post"
    >
      <div className="w-full space-y-3 lg:max-w-sm">
        <div className="w-full space-y-3 lg:max-w-sm">
          <label>Subject</label>
          <input
            className="h-12 w-full rounded-xl border border-gray-400 bg-stone-900 p-4 text-sm"
            type="text"
            name="subject"
            placeholder="Your subject"
            aria-label="subject"
            value={form.subject}
            onChange={(e) => {
              setForm({
                ...form,
                subject: e.target.value,
              });
            }}
          />
        </div>
        <div className="w-full space-y-3 lg:max-w-sm">
          <label>Email</label>
          <input
            className="h-12 w-full rounded-xl border border-gray-400 bg-stone-900 p-4 text-sm"
            type="text"
            name="email_address"
            placeholder="Your email"
            aria-label="email"
            value={form.email}
            onChange={(e) => {
              setForm({
                ...form,
                email: e.target.value,
                isValid: true,
              });
            }}
          />
        </div>
        <p
          className={`text-sm font-medium ${
            form.isValid ? "text-gray-400" : "text-pink-600"
          }`}
        >
          {form.isValid
            ? "Powered by React.email"
            : "Please provide a valid email address."}
        </p>
        <CTA compact className="sm:w-fit" disabled={!form.isValid}>
          {testState === "PENDING" && <Loader2Icon className="animate-spin" />}
          {testState === "SUCCESS" && <CheckIcon />}
          Send
        </CTA>
      </div>
    </form>
  );
};
