import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Direction = 'up' | 'left' | 'right'

/**
 * Reveals an element with a GSAP tween as soon as it scrolls into view.
 * Replaces the old IntersectionObserver + CSS keyframe approach with
 * real GSAP-driven animation.
 */
export function useGsapReveal<T extends HTMLElement = HTMLElement>(
  direction: Direction = 'up',
  delay = 0,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const from =
      direction === 'left'
        ? { x: -32, opacity: 0 }
        : direction === 'right'
          ? { x: 32, opacity: 0 }
          : { y: 32, opacity: 0 }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        from,
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [direction, delay])

  return ref
}

/**
 * Staggers all direct children of a container as it scrolls into view.
 * Used for grids like the Services list and Projects grid.
 */
export function useGsapStagger<T extends HTMLElement = HTMLElement>(
  childSelector: string,
  stagger = 0.08,
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      const children = el.querySelectorAll(childSelector)
      gsap.fromTo(
        children,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [childSelector, stagger])

  return ref
}
