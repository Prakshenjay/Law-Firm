/*====== MENU =====*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.value__accordion-header')
    
    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(open && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.value__accordion-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
    else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

// window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* ============== SWIPER EXPLORE ============*/
let swiperExplore = new Swiper(".explore__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
          spaceBetween: 72,
        },
      },
  });

  /*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*====== RELLAX =====*/
var rellax = new Rellax('.parallax');


/*====== ANIMATE GSAP ======*/
/*Navbar*/
gsap.from('.nav__logo', {opacity:0, duration: 3, delay: .5, y: 30, ease:'expo.out'});
gsap.from('.nav__toggle', {opacity:0, duration: 3, delay: .7, y: 30, ease:'expo.out'});
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: .7, y: 35, ease:'expo.out', stagger: .2})

/*Text*/
gsap.from('.home__title', {opacity:0, duration: 3, delay: 1.3, y: 35, ease:'expo.out'});
gsap.from('.home__subtitle', {opacity:0, duration: 3, delay: 1.1 , y: 35, ease:'expo.out'});

/*Scroll*/
gsap.from('.home__scroll', {opacity:0, duration: 3, delay: 1.5, y: 25, ease:'expo.out'});


/*====== SCROLL REVEAL SECTION ======*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

/*Data*/
sr.reveal('.section__data',{origin: 'left',distance: '70px'}); 
/*Imgs*/
sr.reveal('.section__img',{origin: 'left',distance: '90px',delay: 200}); 
sr.reveal('.career__title, .explore, .subscribe__container ,.footer__container')
sr.reveal('.career__descripion', {delay: 500})
sr.reveal('.career__search', {delay: 600})
sr.reveal('.career__value', {delay: 700})
sr.reveal('.career__images', {delay: 800, origin: 'bottom'})
sr.reveal('.logos__img', {delay: 300})
sr.reveal('.footer__info, .director__name', {delay: 600})
sr.reveal('.logos__img, .director__img', {interaval: 100})
sr.reveal('.value__images, .contact__content, .value__description', {origin:'left'})
sr.reveal('.value__content, .contact__images', {origin: 'right'})
sr.reveal('.director_discription', {origin: 'right'})
