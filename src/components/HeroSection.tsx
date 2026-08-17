import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col">
      {/* Video Background - no overlay */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* All content above video */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Navbar */}
        <div className="px-6 md:px-12 lg:px-16 pt-6">
          <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
            {/* Logo */}
            <span className="text-2xl font-semibold tracking-tight text-white">VEX</span>

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

            {/* CTA Button */}
            <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
              Start a Chat
            </button>
          </nav>
        </div>

        {/* Hero Content pushed to bottom */}
        <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">

            {/* Left Column */}
            <div>
              <AnimatedHeading
                text={"Shaping tomorrow\nwith vision and action."}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4"
                style={{ letterSpacing: '-0.04em' }}
                initialDelay={200}
                charDelay={30}
              />

              <FadeIn delay={800} duration={1000} className="mb-5">
                <p className="text-base md:text-lg text-gray-300">
                  We back visionaries and craft ventures that define what comes next.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                    Start a Chat
                  </button>
                  <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-200">
                    Explore Now
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Tag */}
            <FadeIn delay={1400} duration={1000} className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                  Investing. Building. Advisory.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </div>
  )
}
