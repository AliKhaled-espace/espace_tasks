// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.getElementById("hamburger");
//   const sideMenu = document.getElementById("side-menu");

//   if (hamburger && sideMenu) {
//     hamburger.addEventListener("click", function () {
//       sideMenu.classList.toggle("open");
//     });
//   }
// });
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("side-menu");

  if (hamburger && sideMenu) {
    hamburger.addEventListener("click", function () {
      sideMenu.classList.toggle("open");
    });
  }
