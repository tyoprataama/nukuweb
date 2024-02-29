import { FC } from "react";
import { ScrollEl } from "../Scroll";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Point } from "../Point";

interface indexProps {}
export const SideBar: FC<indexProps> = ({}) => {
  return (
    <div className="md:py-6 xl:block hidden py-3">
      <Point />
      <ScrollEl />
      <div className="p-6 w-[400px] flex flex-col gap-3 rounded-lg bg-gray-200 dark:bg-slate-700 dark:text-foreground mt-5 items-start">
        <h1 className="text-lg font-semibold">Mari bergabung bersama kami</h1>
        <Label htmlFor="email">Your Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Name"
          className="dark:bg-white border-none"
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="dark:bg-white border-none"
        />
      </div>
    </div>
  );
};
