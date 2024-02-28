import { MainBar } from "@/components/organism/Hero/MainBar";
import { SideBar } from "@/components/organism/Hero/SideBar";
import { FC } from "react";

interface indexProps{}
const Hero : FC<indexProps> = ({}) => {
  return (
    <div className="grid lg:grid-cols-[70%,30%] md:grid-cols-2">
      <MainBar />
      <SideBar />
    </div>
  );
}

export default Hero;