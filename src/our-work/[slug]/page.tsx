import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ourWorkItems, getWorkBySlug, getAllWorkSlugs } from "@/lib/our-work-data";
import OurWorkDetailClient from "./OurWorkDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return {};

  return {
    title: `${item.title} | Our Work`,
    description: item.summary,
  };
}

export default async function OurWorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);

  if (!item) {
    notFound();
  }

  return <OurWorkDetailClient item={item} />;
}
