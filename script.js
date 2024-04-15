const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const phoneBtn = document.querySelector(".phone-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
};
cancelBtn.onclick = () => {
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};

let scrollTimeout;

window.onscroll = function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function () {
    var currentScrollPos = window.pageYOffset;
    var contactRow = document.querySelector(".contact-row");
    var screenWidth = window.innerWidth; // Get the screen width

    if (screenWidth > 860) { // Only execute this code if screen width is greater than 860px
      if (currentScrollPos < 36) {
        contactRow.style.display = "block";
        contactRow.classList.remove("hide");
        navbar.style.top = "60px";
      } else {
        contactRow.style.display = "none";
        contactRow.classList.add("hide");
        navbar.style.top = "0";
      }
    }
  }, 100); // Increase the debounce delay for smoother scrolling
};
