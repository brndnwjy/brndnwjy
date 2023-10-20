import { Inter } from "next/font/google";
import { Footer, Navbar, PhotoCard } from "@/components";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-center ${inter.className} mb-20`}
      >
        <section className="w-full max-w-4xl h-full grid grid-cols-4 items-center gap-2">
          <PhotoCard />
          <PhotoCard />
          <PhotoCard isBig />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard isBig />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard />
          <PhotoCard isBig />
          <PhotoCard />
          <PhotoCard />
        </section>
      </main>
      <Footer />
    </>
  );
}
