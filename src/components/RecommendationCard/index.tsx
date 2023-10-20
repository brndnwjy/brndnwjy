import Image from "next/image";

export const RecommendationCard = ({
  keyword,
  title,
}: {
  keyword: string;
  title: string;
}) => {
  return (
    <article className="flex flex-col items-center gap-4">
      <Image
        src={`https://source.unsplash.com/random/200x250/?${keyword}`}
        alt="Concert"
        width={225}
        height={250}
      />
      <h3 className="text-xl">{title}</h3>
    </article>
  );
};
