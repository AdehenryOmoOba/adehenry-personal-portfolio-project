import { animateOnLoad, debouncedAnimateOnPageTop } from "./intersectioObserver.js";

const $ = document.querySelector.bind(document);

window.addEventListener("load", animateOnLoad);

window.addEventListener('scroll', debouncedAnimateOnPageTop)

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

// God Top Button 
const goTop = $('.go-up')
goTop.addEventListener('click', () => {
  window.scrollTo({top: 0})
})

