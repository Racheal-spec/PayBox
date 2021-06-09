const Menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const Navlist = document.querySelector('.nav-ul');



let tl = gsap.timeline({ paused: true });

tl.to(".nav-ul", 0.2, {
    left: "-50%",
})
    tl.to(".nav-ul li a", 0.2, {
        left: "-50%",
    })
tl.staggerFrom(".nav-ul li a", 0.4, {opacity: 1}, 0.1, "-=0.2");
tl.reverse();

Menu.addEventListener("click", ()=> {
    tl.reversed(!tl.reversed());
})
closeMenu.addEventListener("click", ()=> {
    tl.reversed(!tl.reversed());
})
Navlist.addEventListener("click", ()=> {
    tl.reversed(!tl.reversed());
})

