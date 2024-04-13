import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
});
