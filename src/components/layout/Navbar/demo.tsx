"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid gap-3 p-4 md:w-[500px] w-[300px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <span className="flex h-full w-full select-none flex-col text-center justify-center rounded-md text-white nav-hero p-6 no-underline outline-none focus:shadow-md">
                    <p className="text-xs font-semibold text-green-400">
                      Welcome! 🥳
                    </p>
                    <div className="mb-2 mt-4 text-xl font-semibold">
                      nukuweb
                    </div>
                    <p className="text-sm leading-tight text-gray-400">
                      Solusi bikin website tanpa ribet!
                    </p>
                  </span>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title="Services">
                Cari tau lebih lanjut tentang apasaja layanan di nukuweb.
              </ListItem>
              <ListItem href="/projects" title="Project">
                Mari lihat beberapa project yang nukuweb handle.
              </ListItem>
              <ListItem href="/rates" title="Pricing">
                Yuk intip berapa sih rate jika ingin memulai dengan nukuweb.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
