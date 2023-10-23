"use client";
import { Hero } from "@/src/components/Homepage/Hero";
import { Proposition } from "@/src/components/Homepage/Proposition";

export function Homepage({ page }: { page: any }) {
  return (
    <>
      <Hero page={page} />
      <Proposition />
    </>
  );
}
