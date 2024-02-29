"use client";
import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-2">
      <div className="flex xl:items-start lg:text-start xl:text-start text-center flex-col xl:px-9 xl:py-[100px] lg:px-9 lg:py-[100px] md:px-[120px] px-[20px] py-[50px] lg:gap-5 gap-4">
        <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold lg:leading-snug leading-tight xl:w-[60%]">
          <span className="text-blue-500">Digitalisasi</span>
          <br />
          <span>Bisnis Anda</span>
          <br />
          <span>Sekarang Juga!</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-300 xl:w-[80%] xl:text-base text-sm">
          Nukuweb menawarkan Anda untuk dapat mengembangkan sektor digital yang
          tangguh. Ciptakan website yang eksklusif untuk bisnis Anda, kembangkan
          aplikasi mobile untuk memperluas jangkauan, dan susun sistem internal
          terintegrasi demi optimalisasi operasional bisnis Anda sendiri!.
        </p>
        <div className="flex w-full justify-center xl:justify-start lg:justify-start">
          <Button variant={"main"} className="md:w-[50%]">
            Lihat lebih lanjut
          </Button>
        </div>
        <div className="welcome-code xl:mt-5 w-full md:h-[300px] h-[400px]"></div>
      </div>
      <Hero />
    </main>
  );
}
