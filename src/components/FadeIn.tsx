import React, { useEffect, useRef, useState } from 'react'
import styles from './FadeIn.module.css'
import config from '../animationConfig'

type Props = {
  children: React.ReactNode
  y?: string
  duration?: string
  easing?: string
  scale?: string
  delay?: string
  threshold?: number
  rootMargin?: string
  playOnLoad?: boolean
  noTranslate?: boolean
  noScale?: boolean
  replay?: boolean
  className?: string
}

export default function FadeIn({ children, y, duration, easing, scale, delay, threshold = 0.1, rootMargin = '-15% 0px -15% 0px', playOnLoad = false, noTranslate = false, noScale = false, replay = false, className }: Props){
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (playOnLoad) {
      // Immediately set visible on mount when requested (useful for elements already in view)
      setVisible(true)
      return
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
        } else if (replay) {
          // only hide again if replay behavior is explicitly requested
          setVisible(false)
        }
      })
    }, { threshold, rootMargin })

    io.observe(el)

    // Listen for loop reset events to retrigger animations
    const onLoopReset = () => {
      // Reset visible state so the element can fade in again on the next loop
      setVisible(false)
      // Force a re-observe by disconnecting and re-observing
      setTimeout(() => {
        io.disconnect()
        io.observe(el)
      }, 0)
    }

    window.addEventListener('loop-reset', onLoopReset as EventListener)

    return () => {
      io.disconnect()
      window.removeEventListener('loop-reset', onLoopReset as EventListener)
    }
  }, [threshold, rootMargin, replay])

  const style = {
    ['--fade-y' as any]: noTranslate ? '0px' : (y ?? config.y),
    ['--fade-duration' as any]: duration ?? config.duration,
    ['--fade-easing' as any]: easing ?? config.easing
  }
  // include scale variable
  ;(style as any)['--fade-scale'] = noScale ? '1' : (scale ?? (config as any).scale ?? '0.98')
  ;(style as any)['--fade-delay'] = delay ?? (config as any).delay ?? '0ms'

  return (
    <div
      ref={ref}
      className={[styles.root, visible ? styles.visible : '', className || ''].join(' ')}
      style={style as React.CSSProperties}
      data-fade-visible={visible ? 'true' : 'false'}
    >
      {children}
    </div>
  )
}
