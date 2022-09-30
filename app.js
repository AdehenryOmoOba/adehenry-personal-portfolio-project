
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Animation with Intersection Observer 
const items = $$("[data-observer]");
let observList = Array.from(items);

window.addEventListener("load", () => {

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('observer-animation')
      }
    });
  };

  const observer = new IntersectionObserver(callback, {threshold: 0.3});

  observList.forEach((item) => {
    observer.observe(item);
  });
});

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


