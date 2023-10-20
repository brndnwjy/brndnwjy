import Image from "next/image";
import React from "react";

export const FavoriteCard = ({ title }: { title: string }) => {
  return (
    <article className="w-full h-full aspect-square bg-red-400 relative flex justify-center overflow-hidden">
      <Image
        src={`https://source.unsplash.com/random/200x200/?white `}
        alt="Concert"
        width={200}
        height={200}
        className="w-full h-full peer"
      />
      <h2 className="absolute -bottom-full text-black font-medium peer-hover:bottom-2 transition-all duration-300 ease-in-out">
        {title}
      </h2>
    </article>
  );
};
