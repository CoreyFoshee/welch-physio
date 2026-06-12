import type { Metadata } from "next";
import { fraunces, robotoCondensed } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://welchphysio.com"),
  title: {
    default: "Concierge Physical Therapy in Tulsa, OK | Welch Physiotherapy and Wellness",
    template: "%s | Welch Physiotherapy and Wellness",
  },
  description:
    "One-on-one, doctor-led physical therapy that comes to your home, gym, or workplace in Tulsa. Book a free discovery call — no referral needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${robotoCondensed.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
