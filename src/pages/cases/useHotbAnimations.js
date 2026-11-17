import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scramble } from '../../lib/scramble.js'

gsap.registerPlugin(ScrollTrigger)

// Wszystkie animacje podstrony HOTB 2026. Elementy oznaczasz w JSX atrybutem data-anim:
//   data-anim="hero"     → dzieci wchodzą po kolei zaraz po wejściu na stronę
//   data-anim="fade"     → element wjeżdża od dołu, gdy pojawi się na ekranie
//   data-anim="stagger"  → dzieci wjeżdżają po kolei, gdy kontener pojawi się na ekranie
//   data-anim="type"     → linie (li) „wypisują się” jak w terminalu
//   data-anim="scramble" → tekst „dekoduje się” z losowych znaków
// Przy prefers-reduced-motion nic się nie animuje — treść jest widoczna od razu.

const UP = { y: 28, opacity: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform,opacity' }
const onEnter = (trigger, start = 'top 85%') => ({ trigger, start, once: true })

export default function useHotbAnimations() {
    const ref = useRef(null)

    useLayoutEffect(() => {
        const root = ref.current
        if (!root) return
        const mm = gsap.matchMedia()

        mm.add({
            motion: '(prefers-reduced-motion: no-preference)',
        }, (ctx) => {
            const { motion } = ctx.conditions
            if (!motion) return
            const q = gsap.utils.selector(root)

            // --- hero: od razu po wejściu ---
            q('[data-anim="hero"]').forEach((el) => {
                gsap.from(el.children, { ...UP, stagger: 0.09, delay: 0.1 })
            })
            q('[data-anim="scramble"]').forEach((el) => scramble(el, { duration: 1.4, delay: 0.2 }))

            // --- pojedyncze elementy ---
            q('[data-anim="fade"]').forEach((el) => {
                gsap.from(el, { ...UP, scrollTrigger: onEnter(el) })
            })

            // --- grupy po kolei ---
            q('[data-anim="stagger"]').forEach((el) => {
                gsap.from(el.children, { ...UP, duration: 0.6, stagger: 0.09, scrollTrigger: onEnter(el) })
            })

            // --- terminal: linie wypisują się od lewej ---
            q('[data-anim="type"]').forEach((el) => {
                gsap.fromTo(el.querySelectorAll(':scope > li'),
                    { clipPath: 'inset(0 100% 0 0)' },
                    {
                        clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'steps(36)', stagger: 0.7, delay: 0.2,
                        clearProps: 'clipPath', scrollTrigger: onEnter(el),
                    })
            })

            ScrollTrigger.refresh()

            return () => q('[data-anim="scramble"]').forEach((el) => {
                if (el.firstChild && el.dataset.scramble != null) el.firstChild.nodeValue = el.dataset.scramble
            })
        })

        return () => mm.revert()
    }, [])

    return ref
}
