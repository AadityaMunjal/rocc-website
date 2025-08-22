import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <section
      className="min-h-screen w-full bg-gradient-to-b from-blue-900/70 to-blue-900/70 bg-blend-overlay bg-cover bg-center relative"
      style={{ backgroundImage: "url('/banner1.png')" }}
    >
      <Navigation isHomePage={true} />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%]">
        <h1 className="text-4xl md:text-6xl font-normal mb-4">
          Rutgers Organization Of Cloud Computing
        </h1>
        <p className="text-sm md:text-base mb-10 text-white">
          The best place to learn about cloud computing! <br />
          Don&apos;t hesitate to be a part of the cloud!
        </p>
        <Link href="/about" className="hero-btn">
          Click to Learn More
        </Link>
      </div>
    </section>
  );
}
