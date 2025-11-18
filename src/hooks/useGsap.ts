import { useEffect, RefObject } from 'react'
import { gsap } from 'gsap'

export function useGsapReveal<T extends HTMLElement>(ref: RefObject<T> | null){
  useEffect(() => {
    if (!ref || !ref.current) return
    const el = ref.current
    gsap.fromTo(el, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.8 })
  }, [ref])
}
