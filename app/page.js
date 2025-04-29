import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="w-full h-dvh flex justify-center items-center bg-[url('/assets/images/hero-bg.png')] bg-cover bg-no-repeat">
        <div className="w-11/12 mx-auto text-center">
          <h1 className="w-6/12 mx-auto capitalize text-3xl lg:text-6xl font-semibold">Your Finance at your Fingertips</h1>
          <p className="w-5/12 mx-auto text-base leading-tight my-5">Welcome to Zealous Capital. We provide the resources for you to take the wheel, and drive yourself to financial success.</p>
          <div className="flex items-center justify-center">
            <Link href='#' className="py-2 px-5 rounded-sm bg-yellow-500 font-medium hover:bg-yellow-500/80 duration-500">Get Started</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
