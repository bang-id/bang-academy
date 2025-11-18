import { useEffect, useRef, useState } from 'react'

type UseParallaxProps = {
  speed?: number // 0 to 1, where 0.5 means 50% of scroll speed
  direction?: 'up' | 'down' // direction of parallax effect
}

export default function useParallax({ speed = 0.9, direction = 'up' }: UseParallaxProps = {}) {
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
        // Compute offset based on element's progress through the viewport so
        // the parallax is relative to where the element is rather than the
        // absolute page scroll. This gives a smoother, predictable effect.
        // elementProgress ranges ~0..1; center it around 0 by subtracting 0.5
        const centered = elementProgress - 0.5
        // scale by viewport height so movement feels proportional across devices
        const baseMovement = centered * windowHeight
        // apply speed and direction
        const dir = direction === 'down' ? -1 : 1
        const parallaxOffset = baseMovement * speed * dir
        setOffset(parallaxOffset)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])

  return { ref, offset }
}
