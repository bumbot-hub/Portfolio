import './style.css'
import gsap from 'gsap'

document.querySelector('#app').innerHTML = `
<section id="main">
    <section id="main-text">
        <section id="hero-text" class="layered-text">
            <h1 class="first-layer">Kamil<br>&nbspKula</h1>
            <h1 class="fill-layer">Kamil<br>&nbspKula</h1>
        </section>
        <h4>Product Designer<br>& Developer</h4>
    </section>
    <div class="dot-reveal"></div>
    <img src='/images/ChatGPT.png' alt='człowiek' class="hero-figure"> 
</section>

<section id="about_me">
<h2>About Me</h2>
<p>Lorem ipsum</p>
</section>
`


window.addEventListener('load', () => {
    const el = document.querySelector('.dot-reveal');
    let progress = { size: 15 };
    gsap.to(progress, {
      size: 352,
      duration: 10,
      ease: 'power3.out',
      onUpdate: () => {
        el.style.maskImage = `radial-gradient(ellipse 30% 20% at 70% 45%, transparent 0%, transparent ${progress.size}%, black calc(${progress.size}% + 25%))`;
        el.style.webkitMaskImage = el.style.maskImage;
      },
      onComplete: () => {
        el.style.display = "none";
      }
    });
    gsap.to(el, {
        opacity: 0.1,
        duration: 40,
        ease: 'power3.out'
      });
  });