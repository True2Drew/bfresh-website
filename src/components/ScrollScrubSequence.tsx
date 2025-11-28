'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface ScrollScrubSequenceProps {
  frames: string[]
  alt?: string
  className?: string
}

export default function ScrollScrubSequence({ 
  frames, 
  alt = 'Scroll-scrubbed animation sequence',
  className = '' 
}: ScrollScrubSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    if (prefersReducedMotion || frames.length === 0) {
      return () => mediaQuery.removeEventListener('change', handleChange)
    }

    let ticking = false

    const handleScroll = () => {
      if (!ticking && containerRef.current) {
        window.requestAnimationFrame(() => {
          const container = containerRef.current
          if (!container) return

          // Get container position relative to viewport
          const rect = container.getBoundingClientRect()
          const containerTop = rect.top
          const containerHeight = rect.height
          const viewportHeight = window.innerHeight

          // Calculate scroll progress through the container
          // Progress is 0 when container top is at viewport bottom (just entering)
          // Progress is 1 when container bottom is at viewport top (just leaving)
          const scrollStart = viewportHeight
          const scrollEnd = -containerHeight
          const scrollRange = scrollStart - scrollEnd
          const scrollPosition = containerTop
          
          // Calculate progress: 0 when at scrollStart, 1 when at scrollEnd
          let progress = (scrollStart - scrollPosition) / scrollRange
          
          // Clamp progress between 0 and 1
          progress = Math.max(0, Math.min(1, progress))
          
          // Map progress (0-1) to frame index (0 to frames.length-1)
          // Use Math.round for smoother transitions between frames
          const frameIndex = Math.round(progress * (frames.length - 1))
          const clampedIndex = Math.max(0, Math.min(frames.length - 1, frameIndex))
          
          setCurrentFrameIndex(clampedIndex)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial calculation
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [frames.length, prefersReducedMotion])

  if (frames.length === 0) {
    return null
  }

  // If reduced motion, show first frame only
  const displayFrame = prefersReducedMotion ? frames[0] : frames[currentFrameIndex]

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <Image
        src={displayFrame}
        alt={alt}
        fill
        className="object-cover"
        priority
        unoptimized={false}
      />
    </div>
  )
}

