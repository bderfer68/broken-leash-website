"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { galleryImages } from "@/content/gallery"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-md cursor-pointer group aspect-square"
            onClick={() => setSelectedImage(image.id)}
          >
            <div className="h-full w-full">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-brokenYellow text-lg font-medium">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-brokenYellow"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            {galleryImages.find((img) => img.id === selectedImage) && (
              <img
                src={galleryImages.find((img) => img.id === selectedImage)!.src || "/placeholder.svg"}
                alt={galleryImages.find((img) => img.id === selectedImage)!.alt}
                className="object-contain w-full h-full"
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}
