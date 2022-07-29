// Navbar
const toggleBtn = document.querySelector('.toggle-nav')
const hiddenNav = document.querySelector('.site-nav-hidden')

toggleBtn.addEventListener('click', () => {
    hiddenNav.classList.toggle('shownav')
})



// Plus minus
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const nol = document.querySelector(".nol");

let a = 0;

plus.addEventListener("click", () => {
  a++;
  nol.innerHTML = a;
});

minus.addEventListener("click", () => {
  if (a > 0) {
    a--;
    nol.innerHTML = a;
  }
});



