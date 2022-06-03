const tl = gsap.timeline({ defaults: { ease: 'power.out' } });
tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.fromTo('header', { opacity: 0 }, { opacity: 1, duration: 1 });

// tl.fromTo(
//   '.project',
//   { opacity: 0 },
//   { opacity: 1, duration: 0.5, stagger: 2 }
// );

//Smooth Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});
// Reveal Animation

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on('scroll', ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".data-scroll-container" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector('[data-scroll-container]').style.transform
    ? 'transform'
    : 'fixed',
});
const reveal = gsap.utils.toArray('.animate-text');
reveal.forEach((text, i) => {
  ScrollTrigger.create({
    trigger: text,
    toggleClass: 'active',
    start: 'top 90%',
    end: 'top 15%',
    // markers: true,
    scroller: '[data-scroll-container]',
  });
});

//Magnetic Buton
const magnetic__button = document.querySelectorAll('.magnetic');
magnetic__button.forEach((mag) => {
  mag.addEventListener('mousemove', (e) => {
    const position = mag.getBoundingClientRect();

    const x = e.pageX - position.left - position.width / 100;
    const y = e.pageY - position.top - position.height / 100;

    mag.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
    mag.children[0].style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
  });

  mag.addEventListener('mouseout', (e) => {
    mag.style.transform = `translate(0px ,0px)`;
    mag.children[0].style.transform = `translate(0px ,0px)`;
  });
});

window.addEventListener('load', function (event) {
  ScrollTrigger.refresh();
});

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
