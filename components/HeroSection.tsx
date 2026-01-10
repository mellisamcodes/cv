export default function HeroSection() {
  return (
    <section className="mb-12">
      {/* Main Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Business Ideas &amp;
        <br />
        Marketing Frameworks
        <br />
        to help you{' '}
        <span className="highlight-title">sell on the internet</span>
      </h1>

      {/* Description */}
      <div className="space-y-4 text-gray-600 dark:text-gray-400 max-w-lg">
        <p>
          This is where I share the good stuff—business insights, marketing strategies, growth tactics, and the occasional brutal lesson learned the hard way. I&apos;m documenting wins, losses, and everything in between as I build.
        </p>

        <p>
          I might branch out into other topics as I learn new things so expect some surprises along the way.
        </p>

        <p>
          If this sounds like your kind of read, bookmark this site and check back regularly for new posts. I&apos;m also thinking about adding a newsletter so you can get updates straight to your inbox—stay tuned!
        </p>

        <p className="font-medium text-gray-900 dark:text-gray-100">Thanks for being here.</p>
      </div>
    </section>
  )
}
