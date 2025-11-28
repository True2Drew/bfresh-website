interface SectionDividerProps {
  variant?: 'diagonal' | 'curve' | 'gradient'
  className?: string
}

export default function SectionDivider({ variant = 'gradient', className = '' }: SectionDividerProps) {
  if (variant === 'diagonal') {
    return (
      <div className={`w-full h-16 overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 L1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-white"
          />
          <path
            d="M0,120 L1200,0 L1200,120 Z"
            fill="currentColor"
            className="text-gray-50"
          />
        </svg>
      </div>
    )
  }

  if (variant === 'curve') {
    return (
      <div className={`w-full h-16 overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-white"
          />
        </svg>
      </div>
    )
  }

  // Default: gradient
  return (
    <div className={`w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent ${className}`} />
  )
}

