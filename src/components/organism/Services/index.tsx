import Image from "next/image";
import { FC } from "react";

interface indexProps {
  key: number;
  imageItem: string;
  desc: string;
}

export const serviceItem: indexProps[] = [
  {
    key: 1,
    imageItem: "service-1",
    desc: "Design Grafis",
  },
  {
    key: 2,
    imageItem: "service-3",
    desc: "Joki Tugas",
  },
  {
    key: 3,
    imageItem: "service-2",
    desc: "Web dan Pemrograman",
  },
  {
    key: 4,
    imageItem: "service-4",
    desc: "Hosting dan SSL",
  },
];
export const Services = () => {
  return (
    <div className="dark:bg-slate-900 xl:mt-6 p-6 bg-slate-100">
      <h1 className="text-3xl font-bold text-center text-blue-500 dark:text-sky-500">
        Pilihan Jasa
      </h1>
      <div className="mx-auto">
        <div className="mb-5  p-6 grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-2  justify-between">
          {serviceItem.map((item) => (
            <div key={item.key} className="p-5 m-3 text-center mx-auto ">
              <div
                className={`${item.imageItem} xl:w-[200px] xl:h-[200px] lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[100px] h-[100px]`}
              ></div>
              <p className="xl:text-lg md:text-xl font-bold text-slate-500 dark:text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    //     <div className="w-full grid xl:grid-cols-4 grid-cols-2 flex-row xl:py-9 xl:px-[150px]  justify-between">
    //       {serviceItem.map((item) => (
    //         <div key={item.key}>
    //           <div className="grid md:grid-rows-2 text-center">
    //             <div>
    //               <Image
    //                 src={item.imageItem}
    //                 width={200}
    //                 height={200}
    //                 alt={item.desc}
    //               />
    //             </div>
    //             <h3 className="pt-5 text-xl font-semibold">{item.desc}</h3>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
  );
};
