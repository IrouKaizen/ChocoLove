const scrollHeader =() =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* Show scroll up */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove(show-scroll)
}
window.addEventListener('scroll', scrollUp)

/* Active link */

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelectorAll('.nav__menu a[href*=' + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*Scroll animation */

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 200
})

sr.reveal('.home__data, .products__data, .steps__content, .footer__container')
sr.reveal('.home__img', {origin: 'bottom'})
sr.reveal('.products__card', {interval : 100})
sr.reveal('.about__img, .testimonial__img', {origin: 'right'})
sr.reveal('.about__data, .testimonial__data', {origin: 'left'})