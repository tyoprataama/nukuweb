import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

interface indexProps {}
const Footer: FC<indexProps> = ({}) => {
  const sections = [
    {
      title: "Services",
      items: ["Pembuatan Websites", "Design", "Joki Tugas", "Hosting"],
    },
  ];
  const sections2 = [
    {
      title: "Details",
      items: ["Tentang Kami", "Blog", "Cara Order"],
    },
  ];
  return (
    <footer className="grid md:grid-cols-4 grid-cols-1 bg-slate-50 border-t border-gray-300 justify-between p-6 gap-5">
      <div>
        <div className="footer-logo"></div>{" "}
        <p className="text-medium text-sky-600 font-semibold">nukuweb</p>
        <p className="text-gray-500 text-sm pt-2 font-light">
          Buat custom website sesuai kebutuhan anda bersama kami.
        </p>
      </div>

      <div>
        {sections2.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold text-gray-600 pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="py-2 text-gray-500 hover:text-gray-600 hover:font-medium cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold text-gray-600  pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="py-2 text-gray-500 hover:text-gray-600 hover:font-medium cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-gray-500">
        <div className="inline-flex items-center gap-3">
          <div>
            <CiLocationOn className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold text-medium">Kota Kediri</p>
            <p className=" text-sm">
              Jl.Lapangan, Pesantren, Kota Kediri, Jawa Timur 64134.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center pt-3">
          <FaInstagram className="w-5 h-5 opacity-70" />
          <p className="text-sm">@nukuweb</p>
        </div>
        <div className="flex flex-row gap-3 items-center pt-3 pb-3">
          <FaWhatsapp className="w-5 h-5 opacity-70" />
          <p className="text-sm">6282342344</p>
        </div>
        <Separator />
        <p className="text-gray-400 text-sm pt-3">All Right Reserved © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
