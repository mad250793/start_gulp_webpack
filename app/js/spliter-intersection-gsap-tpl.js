require('intersection-observer');
import {gsap} from 'gsap'
import Splitter from 'split-html-to-chars';
  const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              const el = entry.target;

              let tl = gsap.timeline();

              let els = document.querySelectorAll(".spl-h1");
              [].forEach.call(els, function(el) {
                  el.outerHTML = Splitter(el.outerHTML, '<span class="spl-ltr">$</span>');
              });

              tl.from('.spl-h1', { opacity: 0 })

              tl.staggerFromTo(".spl-ltr", .3, { opacity: 0, }, { opacity: 1 }, "0.03", 1)

          }
      })
  });
  const arr = document.querySelectorAll('.spl-h1')
  for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      imageObserver.observe(element);
  }
}


