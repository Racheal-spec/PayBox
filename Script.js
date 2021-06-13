const Menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const Navlist = document.querySelectorAll('.nav-ul li');

function loader () {
    window.addEventListener("DOMContentLoaded", () => {
     // preloader animation
     gsap.timeline().fromTo(
        "#main-preloader",
        {
          autoAlpha: 1
        },
        {
          autoAlpha: 0,
          duration: 0.8,
          onComplete: function() {
            Animations();
          }
        }
     ) //gsap
     gsap.timeline().to(
         '.preloader-box',
         {
            rotation: '360', 
            duration: 3, 
            ease: 'none', 
            repeat:-1,
            repeatDelay: 0.5,
            yoyo: true
            }
     )
     

function Animations() {
    gsap.registerPlugin(ScrollTrigger);

     let tl = gsap.timeline({ paused: true });
     
     //Navbar Slide-in
     tl.fromTo(".nav-ul li a",
     {
         opacity: 1,
         y:-20
     },
     {
         opacity: 0,
         right: "-100%",
         stagger: 0.1,
         y: 0,
         duration: 0.6,
         ease: 'power1.out'
     })
     
     tl.to(".nav-ul", {
        right: "-50%"
    })
     tl.staggerFrom(".nav-ul li a", 0.2, {opacity: 1}, 0.1, "-=0.2");
     tl.reverse();
     
     Menu.addEventListener("click", ()=> {
         tl.reversed(!tl.reversed());
     })
     closeMenu.addEventListener("click", ()=> {
         tl.reversed(!tl.reversed());
     })
     
     Navlist.forEach((item) => {
        item.addEventListener('click', ()=> {
         tl.reversed(!tl.reversed());
        })
    })
    
     
     //Hero-section animtion
     let HeroTl = gsap.timeline();
     HeroTl.from(
         '.logo-d', {
             y: -40, 
             ease: Power1.easeOut, 
             duration: 1.2 
         }
     )
     HeroTl.from(
         ['.nav-ul li', '.btn-login', '.btn-sign'],{
          y: -60, 
          stagger: 0.2,
          duration: 0.7 
         },'-=0.8'
     )
     HeroTl.fromTo('.hero-text h1',
      {y: 20, opacity: 0},
      {opacity: 1,ease: Power1.easeOut, y: 0},'-=0.8'
     )
     HeroTl.fromTo('.hero-p',
      {y: 30, opacity: 0},
      {opacity: 1,ease: Power1.easeOut, y: 0},'-=0.5'
     )
     HeroTl.fromTo(['.download-btn', '.hero-btn'],
      {y: 30, opacity: 0},
      {opacity: 1,ease: Power1.easeOut, y: 0}
     )
     HeroTl.fromTo(
         '.hero-img img',{
             y: 30, 
             rotate: '120deg', 
             opacity: 0, 
             scale: 0.5,
             ease: "back"
         },
      {
          opacity: 1,
          ease: Power1.easeOut, 
          scale: 1.1,
          y: 0, 
          rotate: 0, 
          duration: 1.3,
         }
     ,'-=0.9')
     .to(
         ['.shape1', '.shape4', '.shape3', '.shape5', '.shape2'], {
             rotation: '360', 
             duration: 5, 
             ease: 'none', 
             repeat:-1,
             repeatDelay: 0.5,
             yoyo: true  
         }
     )
     
     //Card section 
     
     let cardTl = gsap.timeline();
     
     cardTl.from(
         '.card',{
          y: 80, 
          stagger: 0.4,
          duration: 1,
          ease: Power1.easeOut,
          scrollTrigger: {
             trigger: '.card-section',
              start: 'top 30%',
             end: 'bottom 40%',
             scrub: true,
             toggleClass: 'active'
         } 
         },'-=0.2'
     )
     
     //App section
     
     let appTl = gsap.timeline();
     appTl.to(".app-img img",{
         translateX: '2%',
         duration: 2,
         scrollTrigger: {
         trigger: ".app-section",
         start: 'top top',
         end: "bottom bottom",
         scrub: true
     }})
     
     .fromTo('.app-text',
     {
        scale: 0.2,
        duration: 3
     },
     {
         scale: 1,
         opacity: 1,
         ease: Power1.easeOut,
         scrollTrigger: {
             trigger: '.app-section',
             start: 'top top',
             end: 'bottom bottom',
             scrub: true,
             toggleClass: 'cc-active'
         } 
         }
     )
     
     
     //Credit Card
     
     
     let creditTl = gsap.timeline();
     
     creditTl.fromTo('.cc-text',
     {
        scale: 0.2,
        duration: 3
     },
     {
         scale: 1,
         duration: 1,
         ease: Power1.easeOut,
         scrollTrigger: {
             trigger: '.creditcard-section',
             start: 'top top',
             end: 'bottom 70%',
             scrub: true,
             toggleClass: 'cc-active'
         } 
         },'-=0.2'
     )
     
     //Download section
     
     
     let phoneTl = gsap.timeline();
     
     phoneTl.to('.download-img img',
     {
         rotationX:"30", 
         rotationY:"50", 
         duration: 3, 
         ease: 'none', 
         repeat:-1,
         repeatDelay: 0.5,
         yoyo: true
         },'-=0.2'
     )
     
     
}



    }//window
    )}
loader();



