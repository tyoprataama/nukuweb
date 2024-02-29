"use client";
import Hero from "@/components/layout/Hero";
import MainPage from "@/components/layout/Main";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-2">
      <MainPage />
      <Hero />
    </main>
  );
}
