import Image from "next/image";

export const PhotoCard = ({ isBig = false }: { isBig?: boolean }) => {
  return (
    <div className={`overflow-hidden ${isBig ? "col-span-2 row-span-2" : ""}`}>
      <Image
        src={`https://source.unsplash.com/random/400x400/?white `}
        alt="Concert"
        width={400}
        height={400}
        className="w-full hover:scale-110 transition-all duration-300"
      />
    </div>
  );
};
