// Mobile menu opening and closing
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const elements of toggle) {
  elements.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// Closing the menu when menu items are clicked
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// Library Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// Library ScrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .contactInfo,
  footer .brand, footer .social`,
  { interval: 100 }
)

// Header Height and change the header style when the Scroll happens
function changeHeaderWhenScrollHappens() {
  const header = document.querySelector('#header')
  const headerHeight = header.offsetHeight

  if (window.scrollY >= headerHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// button back-to-top
function backToTopButton() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 2000) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// imaginary line to identify the current section
function activedMenuAtCurrentSection() {
  const sections = document.querySelectorAll('main section[id]')
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const eachSections of sections) {
    const sectionsTop = eachSections.offsetTop
    const sectionsHeight = eachSections.offsetHeight
    const sectionsId = eachSections.getAttribute('id')

    const checkpointLineStarted = checkpoint >= sectionsTop
    const checkpointLineEnd = checkpoint <= sectionsTop + sectionsHeight

    if (checkpointLineStarted && checkpointLineEnd) {
      document
        .querySelector(`nav .menu ul li a[href*=${sectionsId}] `)
        .classList.add('active')
    } else {
      document
        .querySelector(`nav .menu ul li a[href*=${sectionsId}] `)
        .classList.remove('active')
    }
  }
}

// When the Scroll happens on the page, these two functions will be called.
window.addEventListener('scroll', () => {
  backToTopButton()
  changeHeaderWhenScrollHappens()
  activedMenuAtCurrentSection()
})
