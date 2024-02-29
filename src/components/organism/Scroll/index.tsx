import * as React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";

export interface indexProps {
  descBot: string;
  image: string;
  classDiv: string;
  classP: string;
  Desc1: string;
  Desc2: string;
}

export const items: indexProps[] = [
  {
    descBot: "Pembuatan layanan kilat",
    image: "https://i.ibb.co/0GdT13f/1-items-2.png",
    classDiv:
      "p-2 overflow-hidden rounded-md py-2 bg-[#FFDD95] dark:bg-[#FF9B9B]",
    classP:
      "px-4 py-2 text-2xl font-semibold text-[#3468C0] dark:text-[#FFFEC4]",
    Desc1: "Pelayanan",
    Desc2: "Cepat",
  },
  {
    descBot: "Respon admin ramah",
    image: "https://i.ibb.co/1fPtWbq/1-items-4.png",
    classDiv: "overflow-hidden rounded-md py-2 bg-[#C7DCA7]",
    classP: "px-6 py-2 text-2xl font-semibold text-[#61A3BA]",
    Desc1: "Admin",
    Desc2: "Responsive",
  },
  {
    descBot: "Pelangan senang hati tenang",
    image: "https://i.ibb.co/NFRDc2G/1-items-3.png",
    classDiv: "overflow-hidden rounded-md py-2 bg-[#75C2F6]",
    classP: "px-4 py-2 text-2xl font-semibold text-[#FBEEAC]",
    Desc1: "Happy",
    Desc2: "Customer",
  },
  {
    descBot: "Vladimir Malyavko",
    image: "https://i.ibb.co/NFRDc2G/1-items-5.png",
    classDiv: "overflow-hidden rounded-md py-2 bg-[#75C2F6]",
    classP: "px-4 py-2 text-2xl font-semibold text-foreground",
    Desc1: "Pelayanan",
    Desc2: "Cepat",
  },
];

export function ScrollEl() {
  return (
    <ScrollArea className="bg-gray-200 dark:bg-slate-700 w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-0">
        {items.map((item) => (
          <figure key={item.descBot} className="shrink-0">
            <div className={item.classDiv}>
              <p className={item.classP}>
                {item.Desc1} <br /> {item.Desc2}{" "}
              </p>
              <Image
                src={item.image}
                alt={`Photo by ${item.descBot}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={500}
                height={500}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">
                {item.descBot}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
