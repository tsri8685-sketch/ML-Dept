

let role = localStorage.getItem("role");
if(!role){
    window.location.href = "login.html";
}


iidbaiaidmee
window.addEventListener("load", function(){
  document.getElementById("loader").style.display = "none";
});



document.addEventListener("contextmenu", e => e.preventDefault());



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar-nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {

  const hero = document.getElementById("hero");

  const images = [
    "images/ml1.jpg",
    "images/ml2.jpg",
    "images/ml3.jpg"
  ];

  let index = 0;

  function changeBackground() {
    hero.style.background =
      `url(${images[index]}) center/cover no-repeat`;
    index = (index + 1) % images.length;
  }

  changeBackground();
  setInterval(changeBackground, 4000);

});




    // <!-- ================= JS FOR POPUP ================= -->


function openPopup(el) {
  event.stopPropagation();

  // popup must be the NEXT sibling
  const popup = el.nextElementSibling;

  if (popup && popup.classList.contains("hide-display")) {
    popup.classList.add("active");
  }
}

// click anywhere outside → close popup
document.addEventListener("click", function () {
  document.querySelectorAll(".hide-display.active")
    .forEach(popup => popup.classList.remove("active"));
});

// prevent closing when clicking inside popup
document.querySelectorAll(".about-pop, .out-reach-pop")
  .forEach(pop =>
    pop.addEventListener("click", e => e.stopPropagation())
  );

    /* ---------- SUB BUTTON POPUPS ---------- */
function openSubPopup(event, id) {
  event.stopPropagation();

  // close all sub popups
  document.querySelectorAll(".hide-display-sub")
    .forEach(p => p.classList.remove("active"));

  // open selected popup
  const popup = document.getElementById(id);
  if (popup) popup.classList.add("active");
}

// click anywhere outside -> close sub popup
document.addEventListener("click", function () {
  document.querySelectorAll(".hide-display-sub")
    .forEach(p => p.classList.remove("active"));
});

// prevent closing when clicking inside popup
document.querySelectorAll(".hide-display-sub")
  .forEach(popup => {
    popup.addEventListener("click", e => e.stopPropagation());
  });

    /* ---------- VIEW ALL FACULTY BUTTON ---------- */
  document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("facultyGrid");
  const btn = document.getElementById("viewBtn");

  // Open faculty
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    grid.classList.add("show-all");
    btn.style.display = "none";
  });

  // Click anywhere → close faculty
  document.addEventListener("click", function () {
    grid.classList.remove("show-all");
    btn.style.display = "inline-block";
  });

  // Prevent closing when clicking inside faculty grid
  grid.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

// Course popup
function openSubPopup(event, id) {
    event.stopPropagation();
    document.querySelectorAll(".hide-display-sub")
        .forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}


