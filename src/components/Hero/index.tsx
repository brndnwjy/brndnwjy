import Image from "next/image";
import { Playfair_Display, Alex_Brush } from "next/font/google";

const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });
const alexbrush = Alex_Brush({ weight: "400", subsets: ["latin"] });

export const Hero = () => {
  return (
    <section className="bg-red-400 relative">
      <Image
        src={"https://source.unsplash.com/random/900x600/?love"}
        alt="Concert"
        width={900}
        height={600}
      />
      <div className="absolute bottom-0 right-4 text-center">
        <span className={`block text-5xl leading-[1rem] ${playfair.className}`}>
          Love
        </span>
        <span className={`text-6xl ${alexbrush.className}`}>Epiphany</span>
      </div>
    </section>
  );
};
