'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function BrandStatement() {
  const [scrollY, setScrollY] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    let ticking = false
    const handleScroll = () => {
      if (!ticking && !prefersReducedMotion) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [prefersReducedMotion])

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      <Image
        src="/images/arp-4.webp"
        alt="Aerial view of avocado orchard"
        fill
        className="object-cover"
        style={prefersReducedMotion ? {} : { transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            YOUR TRUSTED PARTNER IN PREMIUM AVOCADOS
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            At BFresh Avocado Group, we're committed to delivering excellence from farm to table. 
            Our dedication to quality, sustainability, and innovation ensures that every avocado 
            meets the highest standards while supporting communities and ecosystems.
          </p>
        </div>
      </div>
    </section>
  )
}

