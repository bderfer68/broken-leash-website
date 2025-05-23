export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/images/brian1.jpeg",
    alt: "Lead guitarist performing with silver Fender guitar",
    width: 800,
    height: 1200,
  },
  {
    id: "2",
    src: "/images/broken-leash2.jpeg",
    alt: "Two guitarists performing on stage with colorful backdrop",
    width: 800,
    height: 1200,
  },
  {
    id: "3",
    src: "/images/mike1.jpeg",
    alt: "Vocalist playing guitar with drummer in background",
    width: 800,
    height: 1200,
  },
  {
    id: "4",
    src: "/images/broken-leash-bw2.jpeg",
    alt: "Black and white group photo of Broken Leash band members",
    width: 1200,
    height: 800,
  },
  {
    id: "5",
    src: "/images/broken-leash-bw1.jpeg",
    alt: "Black and white photo of full band performing on stage",
    width: 1200,
    height: 600,
  },
]
