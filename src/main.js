import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<section id="main">
    <h1 id="hero-text" style="transition: opacity 0.15s ease;">Kamil<br>&nbsp&nbsp&nbspKula</h1>
</section>

<section id="about_me">
<h2>About Me</h2>
</section>
`


const fonts = ['Ethnocentric-Regular', 'Press Start 2P', 'JetBrains Mono'];
const el = document.getElementById('hero-text');
let i = 0;

setInterval(() => {
    setTimeout(() => {
        i = (i + 1) % fonts.length;
        el.style.fontFamily = fonts[i];
    }, 150)
}, 2000);
