import Image from 'next/image'

export default function CompaniesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-gray-500 dark:text-gray-400 text-sm mb-6">Companies I&apos;m building</h2>
      <div className="space-y-4">
        {/* Strawlo */}
        <a
          href="https://strawlo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="no-highlight block p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm transition-all hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/fonts/strawlo-logo copy.png"
              alt="Strawlo logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <h3 className="font-archivo text-xl">Strawlo</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Building innovative digital products for the modern web</p>
        </a>

        {/* Marketing Crafted */}
        <div className="block p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm cursor-default">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/fonts/marketing-crafted-logo.png"
              alt="Marketing Crafted logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <h3 className="font-geist text-lg">
              Marketing <span className="text-primary">Crafted</span>
            </h3>
            <span className="text-xs bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded-full inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              coming soon
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Crafting marketing strategies that drive real results</p>
        </div>
      </div>
    </section>
  )
}
