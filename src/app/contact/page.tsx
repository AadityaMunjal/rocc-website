import Navigation from "@/components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <section
        className="h-[50vh] md:h-[40vh] w-full bg-gradient-to-b from-blue-900/70 to-blue-900/70 bg-blend-overlay bg-cover bg-center text-center text-white relative"
        style={{ backgroundImage: "url('/banner3.jpeg')" }}
      >
        <Navigation />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-normal">
          Contact & Additional Information
        </h1>
      </section>

      {/* Map Section */}
      <section className="w-4/5 mx-auto py-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.6843757643155!2d-74.45124268484403!3d40.50436195822951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c7ab228198dd%3A0xafbf1da67e9ebb48!2s613%20George%20St%2C%20New%20Brunswick%2C%20NJ%2008901!5e0!3m2!1sen!2sus!4v1680390129746!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Contact Information Section */}
      <section className="w-4/5 mx-auto pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Details Column */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faHome}
                className="text-3xl text-red-500 mr-8 min-w-fit"
              />
              <div>
                <h2 className="text-xl mb-1 text-gray-600 font-normal">
                  613 George Street, Student Activities Center
                </h2>
                <p className="text-gray-700">New Brunswick, NJ 08890</p>
              </div>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-3xl text-red-500 mr-8 min-w-fit"
              />
              <div>
                <h2 className="text-xl mb-1 text-gray-600 font-normal">
                  rucloudcomputing@gmail.com
                </h2>
                <p className="text-gray-700">Email us with your questions!</p>
              </div>
            </div>
          </div>

          {/* FAQ Column */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-xl mb-1 text-gray-600 font-normal">
                When and where are your organization meetings held?
              </h2>
              <p className="text-gray-700">Wednesdays - 7:30 ~ 8:30 pm!</p>
            </div>

            <div>
              <h2 className="text-xl mb-1 text-gray-600 font-normal">
                Are your meetings open to all students?
              </h2>
              <p className="text-gray-700">Yes!</p>
            </div>

            <div>
              <h2 className="text-xl mb-1 text-gray-600 font-normal">
                Student Involvement Organizational Theme
              </h2>
              <p className="text-gray-700">Academic!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
