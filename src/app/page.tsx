import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cnb-purple/30 via-cnb-primary/50 to-cnb-pink/30 z-10" />
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Welcome to <span className="neon-text">CNB</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Dominating Minecraft Competition with Style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join" className="button-primary">
              Join Our Team
            </Link>
            <Link href="/about" className="button-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cnb-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="gradient-text">CNB</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card hover-scale">
              <h3 className="text-xl font-semibold mb-4">Elite Players</h3>
              <p className="text-gray-400">
                Join a team of dedicated Minecraft players pushing the boundaries of competitive gameplay.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card hover-scale">
              <h3 className="text-xl font-semibold mb-4">Active Community</h3>
              <p className="text-gray-400">
                Be part of a vibrant Discord community sharing strategies, tips, and friendship.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card hover-scale">
              <h3 className="text-xl font-semibold mb-4">Regular Events</h3>
              <p className="text-gray-400">
                Participate in tournaments, training sessions, and team building activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Latest <span className="gradient-text">Updates</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News cards would be dynamically generated here */}
            <div className="card">
              <div className="mb-4">
                <span className="text-cnb-accent text-sm">Tournament</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">CNB Wins Summer Championship</h3>
              <p className="text-gray-400 mb-4">Our team dominated the summer tournament with unprecedented strategies...</p>
              <Link href="/news" className="text-cnb-purple hover:text-cnb-accent transition-colors duration-300">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Section */}
      <section className="py-20 bg-cnb-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our <span className="gradient-text">Discord</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with the CNB community, participate in events, and stay updated!
          </p>
          <a
            href="https://discord.gg/cnb"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary inline-flex items-center"
          >
            Join Discord Server
          </a>
        </div>
      </section>
    </div>
  )
}