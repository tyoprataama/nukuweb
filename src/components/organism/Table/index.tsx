import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaStar } from "react-icons/fa";

const items = [
  {
    userImage: "https://i.ibb.co/h7ndHSG/review-user-1.png",
    userName: "Fira",
    userRatings: "4.9",
    userReviews: "Pelayanan sangat cepat dan admin ganteng.",
  },
  {
    userImage: "https://i.ibb.co/P9s2QJP/review-user-2.png",
    userName: "Nazella",
    userRatings: "4.7",
    userReviews: "Overall sangat mengesankan, goodjob!",
  },
  {
    userImage: "https://i.ibb.co/zRmdTx4/review-user-3.png",
    userName: "Reni",
    userRatings: "4.5",
    userReviews: "Baguss, ketika minta revisi langsung tanggap.",
  },
  {
    userImage: "https://i.ibb.co/yPSNr3G/review-user-4.png",
    userName: "Lita",
    userRatings: "4.9",
    userReviews: "Cocok untuk membantu tugas kuliah saya.",
  },
];

export const TableEl = () => {
  return (
    <Table className="bg-gray-200 dark:bg-slate-700 text-foreground rounded-lg">
      <TableCaption>List of happy customer.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Profile</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Ulasan</TableHead>
          <TableHead>Ratings</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, i) => (
          <TableRow key={i + 1}>
            <TableCell>
              <Avatar className="w-[50px] h-[50px]">
                <AvatarImage src={item.userImage} />
                <AvatarFallback className="bg-blue-200">
                  {item.userName.split("")[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>{item.userName}</TableCell>
            <TableCell>{item.userReviews}</TableCell>
            <TableCell className="flex items-center gap-1">
              <FaStar className="w-4 h-4 text-yellow-400" />
              {item.userRatings}/5
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
