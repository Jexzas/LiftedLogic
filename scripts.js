let splide = new Splide('.splide', {
    fixedWidth: '40vw',
    perPage: 3,
    breakpoints: {
        1000: {
            fixedWidth: '80vw',
        },
        640: {
            fixedWidth: '98vw',
        }
    },
    focus: 'center',
    type: 'loop'
}).mount();
/**
 * Code that makes the navbar stick to top
 */
const navbar = document.querySelector('#navbarDesktop');
let distanceFromTop = navbar.offsetTop;

function stickynavbar() {
  if (window.scrollY >= distanceFromTop) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}

window.addEventListener('scroll', stickynavbar);

/**
 * Code that makes a collapsible menu work
 */

const menu = document.querySelector('#navContainerMobile');
const toggle = document.querySelector('#menuButton');

function collapse() {
    if (menu.classList.contains('collapsed')) {
        menu.classList.replace('collapsed', 'show');
    } else {
        menu.classList.replace('show', 'collapsed');
    }
}

toggle.addEventListener('click', collapse);

/** 
 * Custom slider buttons
 */

document.querySelector("#back").addEventListener('click', function() {
    splide.go('-1')
});
document.querySelector("#next").addEventListener('click', function() {
    splide.go('+1');
});