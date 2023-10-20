import Image from "next/image";
import { Playfair_Display, Alex_Brush } from "next/font/google";
import { RecommendationCard } from "..";

export const Recommendation = () => {
  return (
    <section className="w-full max-w-4xl flex flex-col items-start py-20">
      <h2 className="text-2xl uppercase mb-16">Recommended for you</h2>
      <div className="grid grid-cols-3 gap-20">
        <RecommendationCard keyword="music" title="Music" />
        <RecommendationCard keyword="festival" title="Festival" />
        <RecommendationCard keyword="concert" title="Concert" />
      </div>
    </section>
  );
};
