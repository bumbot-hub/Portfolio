import gsap from 'gsap'

// Efekt „dekodowania” tekstu — używany w tytułach (hero na głównej, podstrony case study).

const GLYPHS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#%/<>_'   // tylko ASCII — font pikselowy nie ma np. „×”

// „Dekodowanie” tekstu: znaki po kolei przechodzą z losowych w docelowe.
// Zmienia tylko nodeValue istniejącego węzła tekstowego, więc nie gryzie się z Reactem.
// Docelowy tekst: data-scramble, a jeśli go nie ma — obecna treść, zapamiętana w data-scramble
// PRZED pierwszą zmianą (inaczej kolejne uruchomienie wzięłoby już zamieszany tekst za docelowy).
export function scramble(el, { duration = 0.9, delay = 0 } = {}) {
    const node = el.firstChild
    if (!node || node.nodeType !== Node.TEXT_NODE) return null
    if (el.dataset.scramble == null) el.dataset.scramble = node.nodeValue
    const state = { p: 0 }
    const render = () => {
        const text = el.dataset.scramble
        const shown = Math.floor(state.p * text.length)
        let out = text.slice(0, shown)
        for (let i = shown; i < text.length; i++) {
            out += text[i] === ' ' ? ' ' : GLYPHS[(Math.random() * GLYPHS.length) | 0]
        }
        node.nodeValue = out
    }
    render()   // od razu losowe znaki — bez mignięcia gotowego napisu przed startem
    return gsap.to(state, {
        p: 1, duration, delay, ease: 'none',
        onUpdate: render,
        onComplete() { node.nodeValue = el.dataset.scramble },
        onInterrupt() { node.nodeValue = el.dataset.scramble },
    })
}
