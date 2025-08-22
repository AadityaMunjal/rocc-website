import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <>
      {/* Header Section */}
      <section
        className="h-[50vh] md:h-[40vh] w-full bg-gradient-to-b from-blue-900/70 to-blue-900/70 bg-blend-overlay bg-cover bg-center text-center text-white relative"
        style={{ backgroundImage: "url('/banner2.jpg')" }}
      >
        <Navigation />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-normal">
          About Us
        </h1>
      </section>

      {/* About Content Section */}
      <section className="w-4/5 mx-auto pt-6 pb-12 text-center">
        <div className="py-8 px-2">
          <h1 className="text-2xl md:text-3xl mb-6 pt-0 text-gray-800">
            The Best Place To Learn About Cloud Computing!
          </h1>

          <div className="mb-6">
            <Image
              src="/members.jpg"
              alt="Members"
              width={600}
              height={400}
              className="mx-auto w-full max-w-md md:max-w-lg p-2 rounded-lg"
            />
          </div>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8 px-4">
            This organization aims to create a network for students interested
            in cloud computing. It provides a platform for discussions, debates,
            and socializing related to this field. It also helps students build
            their professional skills, such as resume building, and hosts
            speaker events to facilitate networking with cloud professionals.
            The main goal is to inform students about cloud computing careers
            and teach them the necessary skills to pursue them.
          </p>

          <Link href="/contact" className="hero-btn red-btn">
            Click to Explore More
          </Link>
        </div>
      </section>
    </>
  );
}
