import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/components";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-center ${inter.className}`}
      >
        <section className="w-full max-w-4xl h-full grid grid-cols-2 items-center mb-24">
          <Image
            src={`https://source.unsplash.com/random/400x400/?white `}
            alt="Concert"
            width={400}
            height={400}
            className="w-full"
          />
          <p className="pl-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
            praesentium tempora. Dicta sit adipisci dolores, cupiditate dolore
            ipsam quod ea! Numquam expedita quasi voluptates nihil.
          </p>
        </section>

        <section className="w-full max-w-4xl h-full grid grid-cols-2 items-center mb-24">
          <p className="pr-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
            praesentium tempora. Dicta sit adipisci dolores, cupiditate dolore
            ipsam quod ea! Numquam expedita quasi voluptates nihil.
          </p>
          <Image
            src={`https://source.unsplash.com/random/400x400/?white `}
            alt="Concert"
            width={400}
            height={400}
            className="w-full"
          />
        </section>

        <section className="w-full max-w-4xl h-full flex flex-col mb-24">
          <Image
            src={`https://source.unsplash.com/random/1200x400/?white `}
            alt="Concert"
            width={1200}
            height={400}
            className="w-full mb-8"
          />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
            praesentium tempora. Dicta sit adipisci dolores, cupiditate dolore
            ipsam quod ea! Numquam expedita quasi voluptates nihil.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
