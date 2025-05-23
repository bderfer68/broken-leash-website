"use client"

import { useEffect } from "react"

export default function VerifyImages() {
  useEffect(() => {
    const images = [
      "/broken-leash-logo.png",
      "/images/brian1.jpeg",
      "/images/broken-leash2.jpeg",
      "/images/mike1.jpeg",
      "/images/broken-leash-bw1.jpeg",
      "/images/broken-leash-bw2.jpeg",
    ]

    images.forEach((src) => {
      const img = new Image()
      img.onload = () => console.log(`Image loaded successfully: ${src}`)
      img.onerror = () => console.error(`Failed to load image: ${src}`)
      img.src = src
    })
  }, [])

  return null
}
