import { MainBar } from "@/components/organism/Hero/MainBar";
import { SideBar } from "@/components/organism/Hero/SideBar";
import { FC } from "react";

interface indexProps {}
const Hero: FC<indexProps> = ({}) => {
  return (
  <div className="xl:grid-cols-[70%,30%] md:grid-cols-1 overflow-hidden lg:grid hidden bg-slate-100 dark:bg-slate-800 rounded-xl">
         <MainBar />
        <SideBar />
  </div>
  );
};

export default Hero;
