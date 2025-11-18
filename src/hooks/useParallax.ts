import { useEffect, useRef, useState } from 'react'

type UseParallaxProps = {
  speed?: number // 0 to 1, where 0.5 means 50% of scroll speed
  direction?: 'up' | 'down' // direction of parallax effect
}

export default function useParallax({ speed = 0.5, direction = 'up' }: UseParallaxProps = {}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top
      const windowHeight = window.innerHeight

      // Calculate how far into the viewport the element is (0 = top, 1 = bottom)
      const elementProgress = (windowHeight - elementTop) / (windowHeight + rect.height)

      // Only calculate parallax when element is in view
      if (elementProgress > 0 && elementProgress < 1) {
        const scrollAmount = window.scrollY
        let parallaxOffset = scrollAmount * speed * (direction === 'down' ? -1 : 1)
        // Clamp to prevent moving further up than the original position (avoid cutoff at top)
        parallaxOffset = Math.max(parallaxOffset, 0)
        setOffset(parallaxOffset)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])

  return { ref, offset }
}
