"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const fieldCls =
  "w-full rounded-lg border bg-transparent px-4 py-3 text-sm placeholder:opacity-70 transition-colors";

export function ContactForm({
  variant = "full",
  button = "Send message",
  successMessage = "Got it — I'll be in touch shortly, usually the same day.",
  errorMessage = "Something went wrong sending your message. Call or text (903) 918-2611 instead.",
}: {
  /** "full" = olive card (FAQ page); "mini" = light card (home closing strip) */
  variant?: "full" | "mini";
  button?: string;
  successMessage?: string;
  errorMessage?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const light = variant === "full";
  const inputCls = light
    ? `${fieldCls} border-cream/30 bg-bone/10 text-bone placeholder:text-cream/70 focus:border-leaf`
    : `${fieldCls} border-olive/25 text-ink placeholder:text-ink/50 focus:border-olive`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("company") as string)?.length) return; // honeypot

    const name = (data.get("name") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim() ?? "";
    const email = (data.get("email") as string)?.trim() ?? "";
    const contact = (data.get("contact") as string)?.trim() ?? "";
    if (!name || !(phone || email || contact)) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      // 1. Netlify Forms (static form lives in public/__forms.html)
      const netlify = fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Object.fromEntries(data) as Record<string, string>,
        ).toString(),
      }).then((r) => r.ok);

      // 2. Serverless email relay (Resend)
      const api = fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      }).then((r) => r.ok);

      const results = await Promise.allSettled([netlify, api]);
      const anyOk = results.some(
        (r) => r.status === "fulfilled" && r.value === true,
      );
      if (anyOk) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="company"
      onSubmit={onSubmit}
      className="space-y-3"
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out: <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {variant === "full" ? (
        <>
          <label className="sr-only" htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" placeholder="Name" required autoComplete="name" className={inputCls} />
          <label className="sr-only" htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" name="phone" type="tel" placeholder="Phone" autoComplete="tel" className={inputCls} />
          <label className="sr-only" htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" placeholder="Email" autoComplete="email" className={inputCls} />
          <label className="sr-only" htmlFor="cf-message">What&apos;s going on? (optional)</label>
          <textarea
            id="cf-message"
            name="message"
            placeholder="What's going on? (optional)"
            rows={4}
            className={inputCls}
          />
        </>
      ) : (
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="cf-mini-name">Name</label>
          <input id="cf-mini-name" name="name" placeholder="Name" required autoComplete="name" className={inputCls} />
          <label className="sr-only" htmlFor="cf-mini-contact">Phone or email</label>
          <input id="cf-mini-contact" name="contact" placeholder="Phone or email" required className={inputCls} />
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 disabled:opacity-60 sm:w-auto ${
          light ? "bg-leaf text-ink hover:bg-mint" : "bg-olive text-bone hover:bg-ink"
        }`}
      >
        {status === "sending" ? "Sending…" : button}
        <span aria-hidden="true" className="transition-transform duration-300 motion-safe:group-hover:translate-x-1">
          →
        </span>
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className={`text-sm font-medium ${light ? "text-leaf" : "text-olive"}`}>
            {successMessage}
          </p>
        )}
        {status === "error" && (
          <p className={`text-sm font-medium ${light ? "text-cream" : "text-ink"}`}>
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
