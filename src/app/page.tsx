"use client";
import Hero from "@/components/layout/Hero";
import MainPage from "@/components/layout/Main";
import { Services } from "@/components/organism/Services";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <MainPage />
        <Hero />
      </div>
      <div>
        <Services />
      </div>
    </main>
  );
}
