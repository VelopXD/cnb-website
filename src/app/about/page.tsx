import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-cnb-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">CNB</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              One of the largest and most prestigious teams in the Minecraft community,
              specializing in UHC and Tank battles.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-cnb-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Our <span className="gradient-text">History</span>
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Founded by the visionary trio of Aditya, John Cena, and Dinto, CNB has grown
              from a small group of passionate players into one of the most formidable forces
              in competitive Minecraft gaming.
            </p>
            <p className="text-gray-300">
              Our journey has been marked by countless victories, strategic innovations, and
              a commitment to excellence that has earned us recognition across the Minecraft community.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-cnb-accent">Ultra Hardcore (UHC)</h3>
              <p className="text-gray-300">
                Masters of survival and strategy in Minecraft's most challenging game mode.
                Our UHC teams consistently demonstrate exceptional skill and teamwork.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-cnb-purple">Tank Battles</h3>
              <p className="text-gray-300">
                Dominating the battlefield with superior tactics and coordination in tank warfare,
                establishing ourselves as a leading force in competitive play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="py-16 bg-cnb-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Team <span className="gradient-text">Communication</span>
          </h2>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Team Crips Notification Bot</h3>
            <p className="text-gray-300 mb-6">
              Our dedicated Discord bot ensures seamless communication within the team,
              delivering important announcements, updates, and direct messages to all members
              in real-time.
            </p>
            <a
              href="https://discord.gg/cnb"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}