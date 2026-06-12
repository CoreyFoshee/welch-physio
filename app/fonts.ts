import { Fraunces, Roboto_Condensed } from "next/font/google";

// TODO: swap to Recline via Adobe Fonts kit when client provides ID
export const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-roboto-condensed",
  display: "swap",
});
