import Navigation from "@/components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";

export default function Join() {
  return (
    <>
      {/* Header Section */}
      <section
        className="h-[50vh] md:h-[40vh] w-full bg-gradient-to-b from-blue-900/70 to-blue-900/70 bg-blend-overlay bg-cover bg-center text-center text-white relative"
        style={{ backgroundImage: "url('/banner4.jpg')" }}
      >
        <Navigation />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-normal">
          Ready To Join Us?
        </h1>
      </section>

      {/* Join Instructions Section */}
      <section className="w-4/5 mx-auto pt-32 pb-12 text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left mb-8">
            <div className="mr-0 md:mr-8 mb-4 md:mb-0 flex justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdqEp1bOgx1cz1MUDyM8MoMH0jLRRZDEZ9UZTzkFo-_YihmxQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                <FontAwesomeIcon icon={faListAlt} className="text-5xl" />
              </a>
            </div>
            <div className="flex-1">
              <h2 className="text-xl text-gray-600 font-normal">
                1. Fill out the google form through the icon on the left.
              </h2>
            </div>
          </div>

          <div className="text-center md:text-left mb-8">
            <h2 className="text-xl text-gray-600 font-normal">
              2. Sign in to getInvolved and click &quot;Join Club&quot;. A link
              is provided in the form and in the links page.
            </h2>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-xl text-gray-600 font-normal">
              3. Join the GroupMe or Discord through the links page to interact
              with other members and to stay up-to-date with club events!
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
