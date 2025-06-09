import Navbar from '@/components/Navbar';

export default function Team() {
  const teamMembers = [
    {
      name: 'Aditya',
      role: 'Founder & UHC Specialist',
      description: 'A visionary leader and expert in Ultra Hardcore strategies.',
      minecraft_username: 'AdityaCNB',
    },
    {
      name: 'John Cena',
      role: 'Founder & Tank Commander',
      description: 'Master tactician specializing in tank warfare and team coordination.',
      minecraft_username: 'JohnCenaCNB',
    },
    {
      name: 'Dinto',
      role: 'Founder & Strategy Director',
      description: 'Strategic mastermind behind CNB\'s competitive success.',
      minecraft_username: 'DintoCNB',
    },
  ];

  return (
    <div className="min-h-screen bg-cnb-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The elite players behind CNB's success in Minecraft competitive gaming
          </p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.minecraft_username} className="card hover-scale">
                <div className="flex items-center justify-center mb-6">
                  <img
                    src={`https://mc-heads.net/avatar/${member.minecraft_username}/100`}
                    alt={`${member.name}'s Minecraft avatar`}
                    className="w-24 h-24 rounded-lg shadow-lg border-2 border-cnb-accent/50"
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  <span className="gradient-text">{member.name}</span>
                </h3>
                <p className="text-cnb-purple text-center mb-4">{member.role}</p>
                <p className="text-gray-300 text-center mb-4">{member.description}</p>
                <p className="text-gray-400 text-sm text-center">
                  MC: {member.minecraft_username}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-16 bg-cnb-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the <span className="gradient-text">Elite</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Are you ready to compete at the highest level? CNB is always looking for
            talented players to join our ranks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join" className="button-primary">
              Apply Now
            </a>
            <a
              href="https://discord.gg/cnb"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}