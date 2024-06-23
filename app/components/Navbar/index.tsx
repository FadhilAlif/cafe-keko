import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/app/constants";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/Logo-Keko-04.png" alt="logo" width={120} height={120} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link: any) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50 hover:border-b-2 hover:border-green-50"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
