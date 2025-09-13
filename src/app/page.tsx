import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Calendar, BookOpen, Code, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="ROCC Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-primary">ROCC</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#about"
                className="text-foreground hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link
                href="#events"
                className="text-foreground hover:text-accent transition-colors"
              >
                Events
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-accent transition-colors"
              >
                Contact
              </Link>
              <Link
                href="https://rutgers.campuslabs.com/engage/organization/rocc"
                className="text-foreground bg-accent px-3 py-1 rounded-md"
                target="_blank"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center">
              <Image
                src="/logo.png"
                alt="ROCC Logo"
                width={120}
                height={120}
                className="h-24 w-auto md:h-32"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 text-balance">
              Rutgers Organization of Cloud Computing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              Empowering students to learn, build, and innovate with
              cutting-edge cloud technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://rutgers.campuslabs.com/engage/organization/rocc"
                className="text-lg px-6 py-3 bg-accent text-foreground rounded-md"
                target="_blank"
              >
                Join ROCC Today
              </Link>
              <Link
                href="#about"
                className="text-lg px-6 py-3 bg-transparent text-foreground hover:text-accent transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              ROCC is dedicated to fostering a community of cloud computing
              enthusiasts at Rutgers University
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Explore cloud platforms like AWS, Azure, and Google Cloud
                  through workshops, tutorials, and hands-on projects
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Build</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Collaborate on real-world projects, , and cloud-native
                  applications with fellow students
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Network with industry professionals, attend tech talks, and
                  build lasting relationships in the cloud community
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Stay updated with our latest workshops, meetings, and cloud
              computing events
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Event Calendar</CardTitle>
                <CardDescription>
                  View all our upcoming events, workshops, and meetings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FNew_York&showPrint=0&mode=AGENDA&showNav=0&showTabs=0&showCalendars=0&title=ROCC%20Fall%202025&showTz=0&showTitle=0&src=Y18xNWVhNzRmNTRhY2I5ZTRjYmY0NGEwNzRiM2M0YzY1NjZlNmU3ZDYxNGIzMmJkMzVlN2ZlMDRiNWU0NmQwMjI3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23009688"
                    className="w-full rounded-lg border-0"
                    style={{ borderWidth: 0 }}
                    width="800"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Join ROCC?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Zap className="h-4 w-4 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Industry-Relevant Skills
                </h3>
                <p className="text-muted-foreground">
                  Gain hands-on experience with the same cloud technologies used
                  by top tech companies
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Users className="h-4 w-4 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Networking Opportunities
                </h3>
                <p className="text-muted-foreground">
                  Connect with like-minded peers and industry professionals in
                  the cloud computing space
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpen className="h-4 w-4 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Certification Support
                </h3>
                <p className="text-muted-foreground">
                  Get guidance and study groups for AWS, Azure, and Google Cloud
                  certifications
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Code className="h-4 w-4 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Project Experience
                </h3>
                <p className="text-muted-foreground">
                  Build portfolio-worthy projects that demonstrate your cloud
                  computing expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Social Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Get Connected
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Join our community and stay updated with the latest news, events,
            and opportunities
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link
                href="https://instagram.com/rucloudcomputing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25-.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5z" />
                </svg>
                Follow Instagram
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 bg-transparent"
            >
              <Link
                href="https://discord.com/invite/9uQU5bpsQA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.077.077 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image
                src="/logo.png"
                alt="ROCC Logo"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
              <span className="text-lg font-semibold text-primary">ROCC</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">
                Rutgers Organization of Cloud Computing
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Empowering the next generation of cloud engineers at Rutgers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
