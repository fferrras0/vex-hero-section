import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col text-white overflow-hidden">
      {/* Video Background - no overlay */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col h-full px-6 md:px-12 lg:px-16">
        {/* Navbar */}
        <nav className="pt-6">
          <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
            {/* Logo */}
            <span className="text-2xl font-semibold tracking-tight">VEX</span>

            {/* Center links */}
            <div className="hidden md:flex items-center gap-8">
              {['Story', 'Investing', 'Building', 'Advisory'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-white hover:text-gray-300 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
              Start a Chat
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            {/* Left Column */}
            <div>
              <AnimatedHeading
                text={`Shaping tomorrow\nwith vision and action.`}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
                style={{ letterSpacing: '-0.04em' } as React.CSSProperties}
                initialDelay={200}
                charDelay={30}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5">
                  We back visionaries and craft ventures that define what comes next.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                    Start a Chat
                  </button>
                  <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-200">
                    Explore Now
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column */}
            <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <p className="text-lg md:text-xl lg:text-2xl font-light">
                  Investing. Building. Advisory.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
