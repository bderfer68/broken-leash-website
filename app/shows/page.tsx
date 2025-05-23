import { formatDate } from "@/lib/utils"
import { upcomingShows } from "@/content/shows"

export default function ShowsPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-brokenYellow mb-12 text-center animate-on-scroll tracking-wide">
          Upcoming Shows
        </h1>

        <div className="animate-on-scroll">
          {/* Desktop View */}
          <div className="hidden md:block bg-charcoal rounded-lg overflow-hidden shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-brokenYellow/20">
                  <th className="px-6 py-4 text-left text-brokenYellow">Date</th>
                  <th className="px-6 py-4 text-left text-brokenYellow">Venue</th>
                  <th className="px-6 py-4 text-left text-brokenYellow">City</th>
                </tr>
              </thead>
              <tbody>
                {upcomingShows.map((show) => (
                  <tr key={show.id} className="border-b border-brokenYellow/10 hover:bg-black/30 transition-colors">
                    <td className="px-6 py-4">{formatDate(show.date)}</td>
                    <td className="px-6 py-4">{show.venue}</td>
                    <td className="px-6 py-4">{show.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {upcomingShows.map((show) => (
              <div key={show.id} className="bg-charcoal rounded-lg p-4 shadow-lg">
                <div className="flex flex-col">
                  <p className="text-brokenYellow font-bold">{formatDate(show.date)}</p>
                  <h3 className="text-xl font-bold mt-1">{show.venue}</h3>
                  <p className="text-offWhite/70">{show.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-charcoal p-6 rounded-lg shadow-lg animate-on-scroll">
          <h2 className="text-2xl font-bold text-brokenYellow mb-4 tracking-wide">Stay Updated on Tour Dates</h2>
          <p className="mb-4">Follow us on Songkick to get notified when we announce new shows in your area.</p>
          <div className="bg-black/30 p-4 rounded-md">
            {/* Songkick Tourbox Widget Placeholder */}
            <div className="aspect-video flex items-center justify-center border border-dashed border-brokenYellow/30 rounded">
              <p className="text-offWhite/70">Songkick Tourbox Widget will appear here</p>
              <script
                // This is a placeholder - replace with actual Songkick embed code
                async
                src="//widget.songkick.com/ARTIST_ID/widget.js"
              ></script>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
