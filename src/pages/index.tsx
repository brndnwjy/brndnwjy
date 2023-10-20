import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-center ${inter.className}`}
      >
        Hello world
      </main>
      <Footer />
    </>
  );
}
