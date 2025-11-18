import React, { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
}

export default function LoopScroller({ children }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const adjustingRef = useRef(false)
  const initializedRef = useRef(false)
  const lastObservedHeight = useRef(0)
  const [showDuplicate, setShowDuplicate] = useState(false)
  const showDuplicateRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let contentHeight = container.scrollHeight / 2

    const recompute = () => {
      // if duplicate hasn't been added yet, the container holds a single copy
      if (!showDuplicateRef.current) {
        contentHeight = container.scrollHeight
      } else {
        contentHeight = container.scrollHeight / 2
      }
      lastObservedHeight.current = container.scrollHeight
    }

    // scroll handler that jumps the scroll position by half the content height
    const onScroll = () => {
      if (adjustingRef.current) return
      const y = window.scrollY || window.pageYOffset
      if (y >= contentHeight * 1.5) {
        adjustingRef.current = true
        // jump back by one content block
        window.scrollTo(0, y - contentHeight)
        // emit custom event so FadeIn can retrigger
        window.dispatchEvent(new CustomEvent('loop-reset', { detail: { direction: 'forward' } }))
        // allow next frame
        requestAnimationFrame(() => {
          adjustingRef.current = false
        })
      } else if (y <= contentHeight * 0.5) {
        adjustingRef.current = true
        // jump forward by one content block
        window.scrollTo(0, y + contentHeight)
        // emit custom event so FadeIn can retrigger
        window.dispatchEvent(new CustomEvent('loop-reset', { detail: { direction: 'backward' } }))
        requestAnimationFrame(() => {
          adjustingRef.current = false
        })
      }
    }

    // ensure we have the right measurements
    recompute()

    // Use ResizeObserver to wait until layout (images/fonts) settle and contentHeight stabilizes
    let ro: ResizeObserver | null = null
    try {
      ro = new ResizeObserver(() => {
        recompute()
        // Two-phase init:
        // 1) If duplicate not yet added, once we have a non-zero height add the duplicate copy
        // 2) After duplicate renders, recompute and set scroll to middle
        if (!initializedRef.current) {
          if (!showDuplicateRef.current) {
            if (lastObservedHeight.current > 0) {
              // reveal the duplicate copy (this will trigger another ResizeObserver callback)
              showDuplicateRef.current = true
              setShowDuplicate(true)
            }
          } else {
            // duplicate is present — compute middle and initialize scroll
            // ensure we compute after paint
            requestAnimationFrame(() => {
              recompute()
              window.scrollTo(0, contentHeight)
              requestAnimationFrame(() => {
                initializedRef.current = true
                window.dispatchEvent(new CustomEvent('loop-reset', { detail: { direction: 'init' } }))
              })
            })
          }
        }
      })
      ro.observe(container)
    } catch (e) {
      // ResizeObserver may not be available in some envs; fallback to timeout init
      const initTimer = setTimeout(() => {
        if (!initializedRef.current) {
          // Fallback: show duplicate and jump to middle
          showDuplicateRef.current = true
          setShowDuplicate(true)
          // after DOM updates
          requestAnimationFrame(() => {
            recompute()
            window.scrollTo(0, contentHeight)
            initializedRef.current = true
            window.dispatchEvent(new CustomEvent('loop-reset', { detail: { direction: 'init' } }))
          })
        }
      }, 200)
      // ensure we clear the timer on cleanup
      ;(recompute as any).__initTimer = initTimer
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', recompute)

    return () => {
      // cleanup any init timer set on fallback
      const fallbackTimer = (recompute as any).__initTimer
      if (fallbackTimer) clearTimeout(fallbackTimer)
      if (ro) ro.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', recompute)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {showDuplicate ? (
        <>
          <div aria-hidden style={{ pointerEvents: 'none' }}>{children}</div>
          <div>{children}</div>
        </>
      ) : (
        // only render a single copy until initialization finishes to prevent the user
        // from scrolling up into the duplicated content and seeing the FAQ early
        <div>{children}</div>
      )}
    </div>
  )
}
