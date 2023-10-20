import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const Navbar = () => {
  return (
    <nav
      className={`h-24 flex justify-center items-center ${poppins.className}`}
    >
      <ul className="w-full max-w-4xl flex justify-between text-2xl">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/gallery"}>Gallery</Link>
        </li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
