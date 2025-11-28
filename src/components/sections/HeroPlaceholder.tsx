'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface HeroPlaceholderProps {
  title: string
  subtitle?: string
  imagePath: string
  imageAlt: string
}

export default function HeroPlaceholder({ title, subtitle, imagePath, imageAlt }: HeroPlaceholderProps) {
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

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden">
      {/* PLACEHOLDER IMAGE - DO NOT DEPLOY */}
      <Image
        src={imagePath}
        alt={imageAlt}
        fill
        className="object-cover"
        style={prefersReducedMotion ? {} : { transform: `translateY(${scrollY * 0.5}px)` }}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 flex items-center justify-center">
        <div className="text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            {title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-2 animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                {word}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-3xl font-light animate-fade-in-delay">{subtitle}</p>
          )}
        </div>
      </div>
      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  )
}

