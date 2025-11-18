import { useEffect, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Options = {
  maxRotation?: number // degrees, rotate from -max to +max
  start?: string
  end?: string
  scrub?: boolean | number
}

export default function useGsapRotate(ref: RefObject<HTMLElement> | null, opts: Options = {}){
  useEffect(() => {
    if (!ref || !ref.current) return
    const el = ref.current as HTMLElement
    const max = opts.maxRotation ?? 20
    const start = opts.start ?? 'top bottom'
    const end = opts.end ?? 'bottom top'
    const scrub = opts.scrub ?? true

    // ensure a sensible transform origin so rotation looks centered
    gsap.set(el, { transformOrigin: '50% 50%' })

    const tween = gsap.fromTo(
      el,
      { rotation: -max },
      {
        rotation: max,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub,
          invalidateOnRefresh: true
        }
      }
    )

    return () => {
      try {
        // kill tween and its scrollTrigger only
        if (tween && tween.scrollTrigger) {
          tween.scrollTrigger.kill()
        }
        tween.kill()
      } catch (e) {
        // ignore
      }
    }
  }, [ref, opts.maxRotation, opts.start, opts.end, opts.scrub])
}
