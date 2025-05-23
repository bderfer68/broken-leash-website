export default function BioPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-brokenYellow mb-12 text-center animate-on-scroll tracking-wide">
          Band Bio
        </h1>

        <div className="grid md:grid-cols-2 gap-8 animate-on-scroll">
          <div className="order-2 md:order-1">
            <p className="mb-6 text-lg">
              Broken Leash was formed by friends Mike Casarin and Brian Derfer at the beginning of 2024. Playing for the
              first time together at a local music jam, they instantly formed a musical bond centered on hard-driving,
              melodic rock. They wrote and recorded their first song "Far Away" a few months later. Drummer Hugo de León
              joined the band that Spring, and they have been playing ever since.
            </p>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-brokenYellow mb-4 tracking-wide">Band Members</h2>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-brokenYellow">•</span>
                  <span>Mike Casarin - Lead Vocals/Guitar</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brokenYellow">•</span>
                  <span>Brian Derfer - Backing Vocals/Lead Guitar</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brokenYellow">•</span>
                  <span>Hugo de León - Drums</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-square md:aspect-auto md:h-full rounded-lg overflow-hidden">
              <img
                src="/images/broken-leash-bw2.jpeg"
                alt="Broken Leash band members"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
