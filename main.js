const navLinksContainer = document.querySelector(".nav-items");
const navIcon = document.querySelector(".nav-icon");
console.log(navLinksContainer);

navIcon.addEventListener('click', () => {
 navLinksContainer.classList.toggle("hidden");
})