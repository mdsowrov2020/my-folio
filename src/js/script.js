const tl = gsap.timeline({ defaults: { ease: 'power.out' } });

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.fromTo('header', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.project', { opacity: 0 }, { opacity: 1, duration: 1 });

// Reveal Animation

const reveal = gsap.utils.toArray('.animate-text');
reveal.forEach((text, i) => {
  ScrollTrigger.create({
    trigger: text,
    toggleClass: 'active',
    start: 'top 90%',
    end: 'top 15%',
    // markers: true,
  });
});

// let projects = gsap.utils.toArray('.project');
// projects.forEach((project) => {
//   ScrollTrigger.create({
//     start: 'top 20%',
//     end: 'top 70%',
//     markers: true,
//   });
// });
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
