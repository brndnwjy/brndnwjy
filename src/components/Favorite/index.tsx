import { FavoriteCard } from "..";
import {
  Almarai,
  Dancing_Script,
  Cormorant_Garamond,
  Arimo,
  Passion_One,
  Oranienbaum,
} from "next/font/google";

const almarai = Almarai({ weight: "800", subsets: ["arabic"] });
const dancing = Dancing_Script({ weight: "600", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ weight: "700", subsets: ["latin"] });
const arimo = Arimo({ weight: "500", subsets: ["latin"] });
const passion = Passion_One({ weight: "700", subsets: ["latin"] });
const oranienbaum = Oranienbaum({ weight: "400", subsets: ["latin"] });

export const Favorite = () => {
  return (
    <section className="w-full max-w-4xl flex flex-col items-start py-20">
      <h2 className="text-2xl uppercase mb-16">Our Favorite Artist(s)</h2>
      <div className="w-full grid grid-cols-4 gap-4">
        <FavoriteCard title="Reality Club" />
        <div className="flex flex-col justify-center items-center relative">
          <span
            className={`absolute bottom-[43%] uppercase text-3xl text-orange-300 ${almarai.className}`}
          >
            Anything
          </span>
          <span
            className={`absolute bottom-[39%] right-5 text-3xl -rotate-[5deg] self-end ${dancing.className}`}
          >
            You Want
          </span>
        </div>
        <FavoriteCard title="Hindia" />
        <div className="flex justify-center items-center">
          <span
            className={`uppercase text-2xl tracking-[0.25rem] ${cormorant.className}`}
          >
            C i n c i n
          </span>
        </div>
        <div className="flex justify-center items-center">
          <span
            className={`text-4xl -tracking-[4px] text-red-500 ${arimo.className}`}
          >
            jealousy
          </span>
        </div>
        <FavoriteCard title="Pamungkas" />
        <FavoriteCard title="Maliq & D'essentials" />
        <FavoriteCard title="Nadin Amizah" />
        <FavoriteCard title="Phum Viphurit" />
        <FavoriteCard title="Coldiac" />
        <div className="flex flex-col justify-center items-center">
          <span
            className={`uppercase text-xl leading-[0.75rem] ${oranienbaum.className}`}
          >
            Semua orang
          </span>
          <span className={`uppercase text-2xl ${passion.className}`}>
            Pernah sakit hati
          </span>
        </div>
        <FavoriteCard title="Lomba Sihir" />
      </div>
    </section>
  );
};
