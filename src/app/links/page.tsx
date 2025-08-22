import Navigation from "@/components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Links() {
  return (
    <section
      className="h-screen w-full bg-gradient-to-b from-blue-900/70 to-blue-900/70 bg-blend-overlay bg-cover bg-center text-center text-white relative"
      style={{ backgroundImage: "url('/banner5.jpg')" }}
    >
      <Navigation />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <h1 className="text-4xl md:text-5xl font-normal mb-8">Helpful Links</h1>

        <h2 className="text-lg md:text-xl text-black font-normal mb-12 max-w-4xl mx-auto">
          Use these links to stay up-to-date with the latest news and events
          from ROCC!
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          <a
            href="https://discord.com/invite/DfqzPAHj28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors text-lg font-medium underline"
          >
            Discord
          </a>

          <a
            href="https://www.youtube.com/channel/UCA7In5U9RzL4xdmLAIQnrTA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            <FontAwesomeIcon icon={faYoutube} className="text-6xl" />
          </a>

          <a
            href="https://rutgers.campuslabs.com/engage/organization/rocc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors text-lg font-medium underline"
          >
            getINVOLVED
          </a>
        </div>

        <div className="flex justify-center items-center gap-8 mb-8">
          <a
            href="https://instagram.com/rucloudcomputing?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-6xl" />
          </a>

          <a
            href="https://linktr.ee/rp66"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors text-lg font-medium underline"
          >
            Linktree
          </a>
        </div>

        <h3 className="text-lg text-black font-normal max-w-3xl mx-auto">
          Don&apos;t hesitate to reach out and ask questions through these links
          or by email!
        </h3>
      </div>
    </section>
  );
}
