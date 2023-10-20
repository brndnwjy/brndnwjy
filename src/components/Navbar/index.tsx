import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const Navbar = () => {
  return (
    <nav
      className={`h-24 flex justify-center items-center ${poppins.className}`}
    >
      <ul className="w-full max-w-5xl flex justify-between text-2xl">
        <li>Home</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
