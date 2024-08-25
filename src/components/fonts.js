import { Inter, Prompt } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export { inter, prompt };
