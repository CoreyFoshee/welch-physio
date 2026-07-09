import type { Metadata } from "next";
import { rootMetadataExtras } from "@/lib/metadata";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/site";
import { fraunces, robotoCondensed } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  ...rootMetadataExtras(),
  title: {
    default: `Concierge Physical Therapy in Tulsa, OK | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
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
