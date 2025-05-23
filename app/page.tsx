"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AirplayIcon as Spotify, Youtube, Music } from "lucide-react"
import Gallery from "@/components/gallery"

export default function Home() {
  return (
    <div>
      {/* Hero Section - Removed min-h-screen and adjusted padding */}
      <section className="pt-24 pb-16 flex flex-col items-center text-center px-4">
        <div className="animate-on-scroll flex flex-col items-center">
          <div className="flex justify-center w-full">
            <img
              src="/broken-leash-logo.png"
              alt="Broken Leash"
              className="max-w-[80%] md:max-w-[600px] h-auto mb-8 mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-brokenYellow mb-6 tracking-wide">
            90's Rock. No Restraints.
          </h1>
          <Button
            size="lg"
            className="bg-brokenYellow text-black hover:bg-brokenYellow/80"
            onClick={() => {
              const musicSection = document.getElementById("music")
              if (musicSection) {
                musicSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Listen Now
          </Button>
        </div>
      </section>

      <div className="section-divider" />

      {/* Music Section */}
      <section id="music" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-brokenYellow mb-8 text-center animate-on-scroll tracking-wide">
            Latest Release
          </h2>

          <div className="bg-charcoal p-4 rounded-lg shadow-lg mb-8 animate-on-scroll">
            <div className="aspect-video">
              <iframe
                src={process.env.SPOTIFY_EMBED_SRC || "https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT"}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Embed"
                className="rounded-md"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <Link
              href="https://open.spotify.com/artist/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1DB954] text-black px-4 py-2 rounded-md hover:bg-[#1DB954]/80 transition-colors"
            >
              <Spotify size={20} />
              <span>Spotify</span>
            </Link>
            <Link
              href="https://music.apple.com/artist/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FA243C] text-white px-4 py-2 rounded-md hover:bg-[#FA243C]/80 transition-colors"
            >
              <Music size={20} />
              <span>Apple Music</span>
            </Link>
            <Link
              href="https://youtube.com/channel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#FF0000] text-white px-4 py-2 rounded-md hover:bg-[#FF0000]/80 transition-colors"
            >
              <Youtube size={20} />
              <span>YouTube</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-brokenYellow mb-8 text-center animate-on-scroll tracking-wide">
            Gallery
          </h2>
          <Gallery />
        </div>
      </section>
    </div>
  )
}
