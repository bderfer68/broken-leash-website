import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"
import { Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal py-8 border-t border-brokenYellow/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-3">
            <img src="/broken-leash-logo.png" alt="Broken Leash" className="h-8 w-auto" />
            <p className="text-offWhite/70 text-sm">© {new Date().getFullYear()} Broken Leash</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brokenYellow hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brokenYellow hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brokenYellow hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brokenYellow hover:text-white transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
