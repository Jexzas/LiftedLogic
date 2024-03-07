const navbar = document.querySelector('#navbar');
let distanceFromTop = navbar.offsetTop;

function stickynavbar() {
  if (window.scrollY >= distanceFromTop) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}

window.addEventListener('scroll', stickynavbar);