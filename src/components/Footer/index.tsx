import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const Footer = () => {
  return (
    <footer
      className={`h-8 flex justify-center items-center text-xs uppercase ${poppins.className}`}
    >
      &copy; 2023 brndnwjy
    </footer>
  );
};
