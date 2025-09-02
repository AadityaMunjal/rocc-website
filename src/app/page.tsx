"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Small delay to ensure DOM is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);
  return (
    <div>
      <Navigation />

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen w-full bg-gradient-to-b from-blue-900/70 to-blue-900/70 bg-blend-overlay bg-cover bg-center relative pt-20"
        style={{ backgroundImage: "url('/banner1.png')" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-[90%]">
          <h1 className="text-4xl md:text-6xl font-normal mb-4">
            Rutgers Organization Of Cloud Computing
          </h1>
          <p className="text-sm md:text-base mb-10 text-white">
            The best place to learn about cloud computing! <br />
            Don&apos;t hesitate to be a part of the cloud!
          </p>
          <a href="#about" className="hero-btn">
            Click to Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen w-full bg-gradient-to-b from-blue-900/70 to-blue-900/70 bg-blend-overlay bg-cover bg-center text-center text-white relative"
        style={{ backgroundImage: "url('/banner2.jpg')" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <h1 className="text-4xl md:text-5xl font-normal mb-8">About Us</h1>
        </div>
      </section>

      {/* About Content Section */}
      <section className="w-4/5 mx-auto pt-6 pb-12 text-center bg-white">
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

          <a href="#contact" className="hero-btn red-btn">
            Click to Explore More
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen w-full bg-gradient-to-b from-blue-900/70 to-blue-900/70 bg-blend-overlay bg-cover bg-center text-center text-white relative"
        style={{ backgroundImage: "url('/banner3.jpeg')" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <h1 className="text-4xl md:text-5xl font-normal mb-8">
            Contact & Additional Information
          </h1>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-4/5 mx-auto py-20 bg-white">
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
      <section className="w-4/5 mx-auto pb-16 bg-white">
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

      {/* Join Section */}
      <section
        id="join"
        className="min-h-screen w-full bg-gradient-to-b from-blue-900/70 to-blue-900/70 bg-blend-overlay bg-cover bg-center text-center text-white relative"
        style={{ backgroundImage: "url('/banner4.jpg')" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <h1 className="text-4xl md:text-5xl font-normal mb-8">
            Ready To Join Us?
          </h1>
        </div>
      </section>

      {/* Join Instructions Section */}
      <section className="w-4/5 mx-auto pt-32 pb-12 text-center bg-white">
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

      {/* Links Section */}
      <section
        id="links"
        className="min-h-screen w-full bg-gradient-to-b from-blue-900/70 to-blue-900/70 bg-blend-overlay bg-cover bg-center text-center text-white relative"
        style={{ backgroundImage: "url('/banner5.jpg')" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <h1 className="text-4xl md:text-5xl font-normal mb-8">
            Helpful Links
          </h1>

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
            Don&apos;t hesitate to reach out and ask questions through these
            links or by email!
          </h3>
        </div>
      </section>
    </div>
  );
}
