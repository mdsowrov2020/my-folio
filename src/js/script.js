const t1 = gsap.timeline({ defaults: { ease: 'power.out' } });
console.log(t1);

t1.to('.text', { y: '0%', duration: 1, stagger: 0.25 });

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
