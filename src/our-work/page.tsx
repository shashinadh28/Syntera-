import type { Metadata } from "next";
import OurWorkClient from "./OurWorkClient";

export const metadata: Metadata = {
  title: "Our Work | Featured Portfolio & Case Studies",
  description:
    "Explore NexeraTech's portfolio of custom software development, AI/ML engineering, UI/UX redesigns, mobile apps, and enterprise platforms across healthcare, fintech, edtech, and industrial sectors.",
};

export default function OurWorkPage() {
  return <OurWorkClient />;
}
