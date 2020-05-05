require('intersection-observer');
import { gsap} from 'gsap'

const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {

              const el = entry.target;

              let tl = gsap.timeline();

              let letter = el.textContent.split('').map(e => `<span class="spl-ltr">${e}</span>`)

              el.innerHTML = letter.join('')

              tl.staggerFromTo(".spl-ltr", .3, { opacity: 0, }, { opacity: 1 }, "0.03")

          }
      })
  });

  document.querySelectorAll('.spl-h1').forEach(e => imageObserver.observe(e))
