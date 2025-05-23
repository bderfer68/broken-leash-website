"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    // Observe elements
    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [pathname]) // Re-run when pathname changes

  return <>{children}</>
}
