"use client";
import { FC } from "react";
import { NavigationMenuDemo } from "./demo";
import { Button } from "@/components/ui/button";
import { Toggle } from "../Toggle";

interface indexProps {}
const Navbar: FC<indexProps> = ({}) => {
  return (
    <nav className="p-6 md:px-6 fixed  bg-slate-50 dark:bg-slate-900 dark:border-none z-10 w-full border-b border-slate-200 dark:border-gray-700  flex flex-row items-center justify-between">
      <div>
        <NavigationMenuDemo />
      </div>
      <div className="flex flex-row items-center">
        <Button variant={"ghost"} className="gap-2 text-lg font-semibold">
          <span className="nav-logo"></span>nukuweb
        </Button>
      </div>
      <div>
        <Toggle />
      </div>
    </nav>
  );
};

export default Navbar;
