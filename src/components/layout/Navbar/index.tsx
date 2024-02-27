"use client";
import { FC } from "react";
import { NavigationMenuDemo } from "./demo";
import { Button } from "@/components/ui/button";

interface indexProps {}
const Navbar: FC<indexProps> = ({}) => {
  return (
    <nav className="p-3 md:px-6 fixed bg-slate-50 z-10 w-full border-b border-slate-300   flex flex-row items-center justify-between">
      <div>
        <NavigationMenuDemo />
      </div>
      <div className="flex flex-row items-center">
        <Button variant={"ghost"} className="gap-2 text-lg font-semibold">
          <span className="nav-logo"></span>nukuweb
        </Button>
      </div>
      <div>Toggle</div>
    </nav>
  );
};

export default Navbar;
