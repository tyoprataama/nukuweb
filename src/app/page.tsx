import Hero from "@/components/layout/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen md:grid-cols-2">
      <div className="bg-slate-500 md:p-6 p-3">
        <h1 className="text-2xl font-semibold">This is main</h1>
      </div>
      <Hero />
    </main>
  );
}
