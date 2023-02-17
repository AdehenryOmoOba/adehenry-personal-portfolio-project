import { animateOnLoad, debouncedAnimateOnPageTop } from "./intersectioObserver.js";

const $ = document.querySelector.bind(document);

window.addEventListener("load", animateOnLoad);

window.addEventListener('scroll', `debouncedAnimateOnPageTop`)

// Toggle menu 
const toggleMenu = $(".toggle-menu");
const navbar = $(".navbar");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  navbar.classList.toggle('active')
});

navbar.addEventListener("click", (e) => {
  if (e.target.localName === 'a') {
  navbar.classList.remove("active")
  toggleMenu.classList.remove("active")}
});

// Go Top Button 
const goTop = $('.go-up')
goTop.addEventListener('click', () => {
  window.scrollTo({top: 0})
})

// Dark Mode Switch 
const sun = $('.bx-sun')
const moon = $('.bx-moon')
const lightDark = $('.light-dark')
lightDark.addEventListener('click', (e) => {
  if(lightDark.dataset.theme === 'light'){
    lightDark.setAttribute('data-theme', 'dark')
    sun.classList.remove('active')
    moon.classList.add('active')
    document.body.classList.toggle('light-theme')

  }else{
    lightDark.setAttribute('data-theme', 'light')
    moon.classList.remove('active')
    sun.classList.add('active')
    document.body.classList.toggle('light-theme')
  }
})