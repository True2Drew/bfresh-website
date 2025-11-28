'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

interface HeroPlaceholderProps {
  title: string
  subtitle?: string
  imagePath?: string
  imageAlt?: string
  videoPath?: string
  rotateOnScroll?: boolean
}

export default function HeroPlaceholder({ title, subtitle, imagePath, imageAlt, videoPath, rotateOnScroll = false }: HeroPlaceholderProps) {
  const [scrollY, setScrollY] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [textOpacity, setTextOpacity] = useState(1)
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const lastScrollY = useRef(0)
  const fadeThreshold = 6.05 // seconds - when sky scene with logo appears

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    // Initialize scroll position
    const initialScrollY = window.scrollY
    setScrollY(initialScrollY)
    lastScrollY.current = initialScrollY
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    let ticking = false
    const handleScroll = () => {
      if (!ticking && !prefersReducedMotion) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          setScrollY(currentScrollY)
          
          // Calculate rotation based on scroll direction and amount
          if (rotateOnScroll && heroRef.current) {
            const scrollDelta = currentScrollY - lastScrollY.current
            // Rotate 0.1 degrees per pixel scrolled
            // Positive scrollDelta (scrolling down) = clockwise rotation (positive degrees)
            // Negative scrollDelta (scrolling up) = counterclockwise rotation (negative degrees)
            setRotation(prev => {
              const newRotation = prev + (scrollDelta * 0.1)
              // Cap rotation between -360 and 360 degrees for smooth continuous rotation
              return Math.max(-360, Math.min(360, newRotation))
            })
          }
          
          lastScrollY.current = currentScrollY
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
  }, [prefersReducedMotion, rotateOnScroll])

  // Track video time and fade text when sky scene appears
  useEffect(() => {
    if (!videoPath || !videoRef.current || prefersReducedMotion) {
      return
    }

    const video = videoRef.current
    
    const handleTimeUpdate = () => {
      const currentTime = video.currentTime
      // Start fading out slightly before the threshold for smoother transition
      if (currentTime >= fadeThreshold - 0.5) {
        // Fade out over 0.5 seconds, starting 0.5s before threshold
        const fadeProgress = Math.min(1, (currentTime - (fadeThreshold - 0.5)) / 0.5)
        setTextOpacity(1 - fadeProgress)
      } else {
        // Keep text visible before threshold
        setTextOpacity(1)
      }
    }

    // Reset opacity when video loops
    const handleSeeked = () => {
      if (video.currentTime < fadeThreshold - 0.5) {
        setTextOpacity(1)
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('seeked', handleSeeked)
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('seeked', handleSeeked)
    }
  }, [videoPath, prefersReducedMotion, fadeThreshold])

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  // Calculate transform styles based on scroll and rotation settings
  const getTransformStyle = () => {
    if (prefersReducedMotion) {
      return {}
    }
    
    const transforms: string[] = []
    
    // Parallax effect (translateY)
    transforms.push(`translateY(${scrollY * 0.5}px)`)
    
    // Rotation effect (clockwise = positive degrees, counterclockwise = negative degrees)
    if (rotateOnScroll) {
      // Scale up to fill container better when using object-contain
      // This ensures the image fills the visible area similar to object-cover while allowing full image to be visible when rotated
      transforms.push(`scale(1.4)`)
      transforms.push(`rotate(${rotation}deg)`)
    }
    
    return { transform: transforms.join(' ') }
  }

  return (
    <div ref={heroRef} className={`relative w-full h-[85vh] min-h-[600px] z-0 ${rotateOnScroll ? 'overflow-visible' : 'overflow-hidden'}`}>
      {/* Video or Image Background */}
      {videoPath ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={getTransformStyle()}
          poster={imagePath}
        >
          <source src={videoPath} type="video/mp4" />
        </video>
      ) : imagePath ? (
        <Image
          src={imagePath}
          alt={imageAlt || 'Hero background'}
          fill
          className={rotateOnScroll ? "object-contain" : "object-cover"}
          style={getTransformStyle()}
          priority
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 flex items-center justify-center">
        <div 
          className="text-center text-white px-4 animate-fade-in transition-opacity duration-500 ease-out"
          style={{ opacity: prefersReducedMotion ? 1 : textOpacity }}
        >
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

