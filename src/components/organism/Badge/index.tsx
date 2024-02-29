import { Badge } from "@/components/ui/badge";
import { FC } from "react";

interface indexProps {}
export const BadgeEl: FC<indexProps> = () => {
  const El = [
    {
      items: "JavaScript",
      class:
        "border border-yellow-400 bg-yellow-100 text-yellow-600 hover:bg-yellow-200 cursor-pointer",
    },
    {
      items: "TypeScript",
      class:
        "border border-blue-400 bg-blue-100 text-blue-600 hover:bg-blue-200 cursor-pointer",
    },

    {
      items: "WordPress",
      class:
        "border border-sky-400 bg-sky-100 text-sky-600 hover:bg-sky-200 cursor-pointer",
    },

    {
      items: "and more..",
      class:
        "border border-purple-400 bg-purple-100 text-purple-600 hover:bg-purple-200 cursor-pointer",
    },
  ];
  return (
    <div className="flex flex-wrap md:gap-2 gap-1 md:pt-7 pt-4 md:text-medium text-xs">
      {El.map((item, key) => (
        <Badge key={key} variant={"outline"} className={item.class}>
          {item.items}
        </Badge>
      ))}
    </div>
  );
};
