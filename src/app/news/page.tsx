import Navbar from '@/components/Navbar'

type NewsPost = {
  id: number
  title: string
  category: string
  date: string
  summary: string
  content: string
}

const newsPosts: NewsPost[] = [
  {
    id: 1,
    title: 'CNB Dominates Summer Championship',
    category: 'Tournament',
    date: '2023-08-15',
    summary: 'Our team showcased exceptional skill and teamwork in the recent summer championship.',
    content: 'The CNB team demonstrated outstanding performance in the Summer Championship, securing first place with innovative strategies and flawless execution. Special mentions to our PvP specialists who maintained control throughout the tournament.'
  },
  {
    id: 2,
    title: 'New Training Program Launched',
    category: 'Team Update',
    date: '2023-08-10',
    summary: 'Introducing our comprehensive training program for team members.',
    content: 'We're excited to announce our new structured training program, designed to enhance individual skills and team coordination. The program includes daily practice sessions, strategy workshops, and personalized coaching.'
  },
  {
    id: 3,
    title: 'Server Maintenance and Upgrades',
    category: 'Technical',
    date: '2023-08-05',
    summary: 'Important updates about our practice server maintenance and new features.',
    content: 'Our practice servers have been upgraded with the latest performance optimizations and custom plugins. The maintenance includes improved anti-cheat systems and new practice scenarios for team training.'
  }
]

export default function News() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-cnb-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Latest <span className="neon-text">News</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with CNB's latest achievements, events, and announcements
          </p>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {newsPosts.map((post) => (
              <article key={post.id} className="card hover-scale">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <span className="text-cnb-accent text-sm">{post.category}</span>
                    <h2 className="text-2xl font-bold mt-2">{post.title}</h2>
                  </div>
                  <time className="text-gray-400 text-sm mt-2 md:mt-0">{post.date}</time>
                </div>
                <p className="text-gray-300 mb-6">{post.content}</p>
                <div className="flex items-center space-x-4">
                  <button className="text-cnb-neon hover:text-opacity-80 transition-colors duration-300">
                    Share
                  </button>
                  <button className="text-cnb-neon hover:text-opacity-80 transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-cnb-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay <span className="neon-text">Updated</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-cnb-primary border border-gray-600 text-white focus:outline-none focus:border-cnb-neon"
            />
            <button type="submit" className="button-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Follow Us
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stay connected with CNB on social media
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-cnb-neon transition-colors duration-300">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-cnb-neon transition-colors duration-300">
              YouTube
            </a>
            <a href="#" className="text-gray-400 hover:text-cnb-neon transition-colors duration-300">
              Discord
            </a>
            <a href="#" className="text-gray-400 hover:text-cnb-neon transition-colors duration-300">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}