import { FC } from "react";
import { IoMdTime } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { BadgeEl } from "../Badge";
import { TableEl } from "../Table";

interface indexProps {}
export const MainBar: FC<indexProps> = ({}) => {
  return (
    <div className="md:p-6 p-3 flex flex-col items-center">
      <div className="p-6 rounded-lg bg-gradient-to-t from-blue-600 to-blue-500 text-white">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-2">
            <div className="p-1.5 bg-red-500 rounded-full"></div>
            <div className="p-1.5 bg-yellow-500 rounded-full"></div>
            <div className="p-1.5 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex gap-2 items-center">
            <IoMdTime />
            <span className="text-xs">Feb 25th</span>
          </div>
          <FaCode className="w-6 h-6" />
          <p className="text-lg font-semibold">
            Ayo! buat website dan layanan lainnya sesuai dengan kebutuhan Anda.
          </p>
          <Separator />
          <div className="flex flex-row items-center gap-2">
            <div className=" bg-blue-400 border border-gray-100 items-center p-1 rounded-full">
              <Avatar className="w-[49px] h-[49px]">
                <AvatarImage src="https://i.ibb.co/x60sN0Y/1-user.png" />
                <AvatarFallback className="bg-blue-200">V</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <span className="text-xs">Personal guide</span>
              <p className="font-semibold text-sm">Violy A.</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Progress
              indicatorColor="bg-white"
              value={80}
              className="h-[5px] bg-blue-400 color-white"
            />
            <span className="text-xs">80%</span>
          </div>
        </div>
      </div>
      <div className="pb-3">
        <BadgeEl />
      </div>
      <TableEl />
    </div>
  );
};
