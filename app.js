// Toggle menu 
const toggleMenu = document.querySelector(".toggle-menu");
const navbar = document.querySelector(".navbar");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  navbar.classList.toggle('active')
});

navbar.addEventListener("click", (e) => {
  if (e.target.localName === 'a') {
  navbar.classList.remove("active")
  toggleMenu.classList.remove("active")}
});